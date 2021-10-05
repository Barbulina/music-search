import { typesToSerach, DEFAULT_LIMIT } from "@/config";
import { spotifyConfig } from "@/keys/spotify.keys";
import axios from "axios";
export const actions = {
  async getToken(context) {
    const result = await axios.post(
      spotifyConfig.tokenUrl,
      "grant_type=client_credentials",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic " +
            btoa(spotifyConfig.clientId + ":" + spotifyConfig.clientSecret),
        },
      }
    );

    const data = await result.data;
    const expirationTime = new Date().getTime() + data?.expires_in;
    Object.assign(data, { expirationTime });
    context.commit("setToken", data);
  },
  async getByTypeId(context, payload) {
    const token = await checkToken(context.state.token?.access_token, context);

    const url = `https://api.spotify.com/v1/${payload.type}/${payload.id}`;
    const result = await axios.get(url, {
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.data;
    context.commit("setDetail", data);
  },
  async getList(context, payload) {
    if (!payload.textToSearch || payload.textToSearch.length < 1) {
      context.commit("setList", {});
    } else {
      const token = await checkToken(
        context.state.token?.access_token,
        context
      );

      const limit = payload.limit ? payload.limit : DEFAULT_LIMIT;
      const types =
        payload.types && payload.types.length > 0
          ? payload.types.join()
          : typesToSerach.join();
      const result = await axios.get(
        `https://api.spotify.com/v1/search?q=${payload.textToSearch}&type=${types}&limit=${limit}`,
        {
          headers: { Authorization: "Bearer " + token },
        }
      );

      const data = await result.data;
      if (!payload.types) {
        context.commit("setList", data);
      } else {
        context.commit("setTypeList", data);
      }
    }
  },
  async getTypeListByUrlAnAddItems(context, payload) {
    const token = await checkToken(context.state.token?.access_token, context);

    const result = await axios.get(payload.url, {
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.data;
    context.commit("addItemsToTypeList", data);
  },
};

const checkToken = async function(token, context) {
  const currentTime = new Date().getTime();
  if (!token || currentTime > context.state.token.expirationTime) {
    await context.dispatch("getToken");
    token = context.state.token?.access_token;
  }
  return token;
};

import { actions } from "@/store/actions";
import { initialState } from "@/store/state";
import axios from "axios";

describe("Actions", () => {
  let state;
  const commit = jest.fn();
  const dispach = jest.fn();

  let context;

  beforeEach(() => {
    state = { ...initialState };
    commit.mockClear();
    dispach.mockClear();

    context = { commit, state, dispach };
  });

  describe("getToken", () => {
    it("Should not call getToken and store it", async () => {
      // TODO check issue with time in tests
      // const currentTime = new Date().getTime();
      const expires_in = 3600;
      // const expirationTime = currentTime + expires_in;
      const mockRequest = {
        data: { access_token: "mock", expires_in },
      };
      // const mockResponse = { access_token: "mock", expires_in, expirationTime };

      jest.spyOn(axios, "post").mockReturnValue(Promise.resolve(mockRequest));
      await actions.getToken(context);

      expect(context.commit).toBeCalled();
    });
  });

  describe("getByTypeId", () => {
    it("Should get detail from api and set in store", async () => {
      const expires_in = 3600;
      context.state.token = { access_token: "mock", expires_in };
      const mockResponse = { data: { id: "mockId" } };
      jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(mockResponse));
      await actions.getByTypeId(context, mockResponse.data);
    });
  });

  describe("getList", () => {
    const expires_in = 3600;
    const mockResponse = { data: { mock: { items: [] } } };
    it("Should call getList and store it", async () => {
      context.state.token = { access_token: "mock", expires_in };
      jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(mockResponse));
      await actions.getList(context, { textToSearch: "textToSearchMock" });

      expect(context.commit).toBeCalledWith("setList", mockResponse.data);
    });

    it("Should clear list if we havent textToSearch ", async () => {
      context.state.token = {};

      jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(mockResponse));
      await actions.getList(context, {});

      expect(context.commit).toBeCalledWith("setList", {});
    });

    it("Should call setTypeList when it have type", async () => {
      context.state.token = { access_token: "mock", expires_in };

      jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(mockResponse));
      await actions.getList(context, {
        textToSearch: "textToSearchMock",
        types: ["mock"],
      });

      expect(context.commit).toBeCalledWith("setTypeList", mockResponse.data);
    });
  });

  it("Should call url ", async () => {
    const expires_in = 3600;
    context.state.token = { access_token: "mock", expires_in };
    const mockResponse = { data: { mock: { items: [] } } };
    jest.spyOn(axios, "get").mockReturnValue(Promise.resolve(mockResponse));
    await actions.getTypeListByUrlAnAddItems(context, {
      url: "url",
      type: "type",
    });
    expect(context.commit).toBeCalledWith(
      "addItemsToTypeList",
      mockResponse.data
    );
  });
});

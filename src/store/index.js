import { createStore } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { initialState } from "./state";
export default createStore({
  state: initialState,
  mutations: mutations,
  actions: actions,
  modules: {},
});

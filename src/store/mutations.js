export const mutations = {
  setToken(state, token) {
    state.token = token;
  },

  setList(state, list) {
    state.list = list;
  },

  setTypeList(state, list) {
    state.typeList = list;
  },

  addItemsToTypeList(state, listToAdd) {
    // use push becase I need mutate current list
    Object.keys(state.typeList).forEach((type) => {
      listToAdd[type].items.forEach((element) =>
        state.typeList[type].items.push(element)
      );
      state.typeList[type].next = listToAdd[type].next;
      state.typeList[type].previous = listToAdd[type].previous;
    });
  },

  setTextToSearch(state, text) {
    state.lastSearch = text;
  },

  setDetail(state, detail) {
    state.detail = detail;
  },
};

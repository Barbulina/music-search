import { mutations } from "@/store/mutations";

describe("Mutations", () => {
  const tokenMock = "token";
  let state;

  beforeEach(() => {
    state = { token: tokenMock };
  });

  describe("setToken", () => {
    it("Should set token in store", () => {
      mutations.setToken(state, tokenMock);
      expect(state.token).toEqual(tokenMock);
    });
  });

  describe("setList", () => {
    it("Should set list in store", () => {
      const mockList = [{ id: "mock" }];
      mutations.setList(state, mockList);
      expect(state.list).toEqual(mockList);
    });
  });

  describe("addItemsToTypeList", () => {
    it("Should add new items to the list and update next and previous url", () => {
      const mockList = {
        mock: {
          items: [{ id: "mock2" }],
          next: "next",
          previous: "pre",
        },
      };
      const result = {
        mock: {
          items: [{ id: "mock1" }, { id: "mock2" }],
          next: "next",
          previous: "pre",
        },
      };
      state.typeList = {
        mock: {
          items: [{ id: "mock1" }],
          next: undefined,
          previous: undefined,
        },
      };
      mutations.addItemsToTypeList(state, mockList);
      expect(state.typeList).toEqual(result);
    });
  });

  describe("addItems", () => {
    it("Should set list by type in store", () => {
      const mockList = [{ id: "mock" }];
      mutations.setTypeList(state, mockList);
      expect(state.typeList).toEqual(mockList);
    });
  });

  describe("setDetail", () => {
    it("Should set list by detail in store", () => {
      const mockList = { id: "mock" };
      mutations.setDetail(state, mockList);
      expect(state.detail).toEqual(mockList);
    });
  });

  describe("setTextToSearch", () => {
    it("Should set last search in store", () => {
      const mock = "mock";
      mutations.setTextToSearch(state, mock);
      expect(state.lastSearch).toEqual(mock);
    });
  });
});

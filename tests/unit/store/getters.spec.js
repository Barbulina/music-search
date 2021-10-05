import { getters } from "@/store/getters";
describe("Getters", () => {
  describe("token", () => {
    it("Should return token in the state", () => {
      expect(getters.token({ token: "mock" })).toEqual("mock");
    });
  });

  describe("getList", () => {
    it("Should return list in the state", () => {
      expect(getters.getList({ list: [] })).toEqual([]);
    });
  });

  describe("getTypeList", () => {
    it("Should return list of types in the state", () => {
      expect(getters.getTypeList({ typeList: [] })).toEqual([]);
    });
  });

  describe("Detail", () => {
    it("Should return detail in the state", () => {
      expect(getters.getDetail({ detail: {} })).toEqual({});
    });
  });

  describe("getLastSearch", () => {
    it("Should return list in the state", () => {
      expect(getters.getLastSearch({ lastSearch: "mock" })).toEqual("mock");
    });
  });
});

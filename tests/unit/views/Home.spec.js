import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import router from "@/router";
import { initialState } from "../../../src/store/state";
import { createStore } from "vuex";
describe("Home view", () => {
  let wrapper;
  const getList = jest.fn();
  let store;

  beforeEach(() => {
    getList.mockClear();
    store = createStore({
      state: initialState,
      mutations: {},
      actions: {
        getToken: jest.fn(),
        getList,
      },
      modules: {},
    });
    wrapper = shallowMount(Home, {
      global: {
        plugins: [router, store],
      },
    });
  });

  it("Should renders property", async () => {
    expect(wrapper.find(".home").exists()).toBeTruthy();
  });

  it("Should call router push with clicked params", async () => {
    await router.isReady();
    const routerSpy = jest
      .spyOn(router, "push")
      .mockReturnValue(Promise.resolve());
    const data = { id: "id", type: "type" };
    wrapper.vm.selectedItem(data);

    expect(routerSpy).toBeCalledWith("/" + data.type + "/" + data.id);
  });

  it("should call getList method to search", () => {
    wrapper.vm.search("mock");

    expect(getList).toBeCalled();
  });
});

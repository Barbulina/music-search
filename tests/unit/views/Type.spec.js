import { shallowMount } from "@vue/test-utils";
import Type from "@/views/Type.vue";
import router from "@/router";
import { initialState } from "../../../src/store/state";
import { createStore } from "vuex";
describe("Type view", () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = createStore({
      state: initialState,
      mutations: {
        setTypeList: jest.fn(),
      },
      actions: {
        getToken: jest.fn(),
        getList: jest.fn(),
      },
      modules: {},
    });

    const type = "type";
    wrapper = shallowMount(Type, {
      props: {
        type,
      },
      global: {
        plugins: [store, router],
      },
    });
  });

  it("Should renders property", async () => {
    expect(wrapper.find(".type").exists()).toBeTruthy();
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

  it("Should clear detail in stero before go to de last route", async () => {
    router.push("/");
    await router.isReady();
    wrapper.vm.goBack();
    jest.spyOn(router, "go");
    setTimeout(() => expect(router.go).toBeCalledWith(-1), 100);
  });
});

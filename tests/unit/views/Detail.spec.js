import { shallowMount } from "@vue/test-utils";
import Detail from "@/views/Detail.vue";
import { initialState } from "../../../src/store/state";
import { createStore } from "vuex";
import router from "@/router";
describe("Detail view", () => {
  const setDetail = jest.fn();
  let wrapper;
  beforeEach(() => {
    setDetail.mockClear();
    const id = "id";
    const type = "type";
    wrapper = shallowMount(Detail, {
      props: {
        id,
        type,
      },
      global: {
        plugins: [router, store],
      },
    });
  });
  const store = createStore({
    state: initialState,
    mutations: {
      setDetail,
    },
    actions: {
      getToken: jest.fn(),
      getByTypeId: jest.fn(),
    },
    modules: {},
  });

  it("Should renders property", async () => {
    expect(wrapper.find(".details").exists()).toBeTruthy();
  });

  it("Should clear detail in stero before go to de last route", async () => {
    router.push("/");
    await router.isReady();
    wrapper.vm.goBack();
    jest.spyOn(router, "go");
    setTimeout(() => expect(router.go).toBeCalledWith(-1), 100);
  });
});

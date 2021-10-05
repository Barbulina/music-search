import { shallowMount } from "@vue/test-utils";
import SearchForm from "@/components/SearchForm.vue";
import { createStore } from "vuex";

const initialState = {
  token: {},
  list: {},
  typeList: {},
  detail: {},
  lastSearch: "last search",
};

describe("SearchForm component", () => {
  let wrapper;
  let store;
  const setTextToSearch = jest.fn();
  beforeEach(() => {
    setTextToSearch.mockClear();
  });
  it("Should renders property and set last search value", async () => {
    store = createStore({
      state: initialState,
      mutations: {
        setTextToSearch,
      },
      actions: {},
      modules: {},
    });
    wrapper = shallowMount(SearchForm, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.find(".form").exists()).toBeTruthy();
    expect(wrapper.vm.textToSearch).toEqual(initialState.lastSearch);
  });

  it("Should dont set last search value", () => {
    store = createStore({
      state: {
        token: {},
        list: {},
        typeList: {},
        detail: {},
        lastSearch: null,
      },
      mutations: {
        setTextToSearch,
      },
      actions: {},
      modules: {},
    });
    wrapper = shallowMount(SearchForm, {
      global: {
        plugins: [store],
      },
    });
    expect(wrapper.vm.textToSearch).toBeUndefined();
  });

  it("Should emit text to search value when do submit ", () => {
    wrapper.vm.submit();
    setTimeout(() => {
      // wait debounce time

      expect(setTextToSearch).toHaveBeenCalledWith(initialState.lastSearch);
      expect(wrapper.emitted("onSubmit")).toBeTruthy();
    }, 201);
  });
});

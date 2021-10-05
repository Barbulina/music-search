import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";

describe("List compoennt", () => {
  it("Should renders property", async () => {
    const items = [
      {
        id: "mockID",
        images: [{ url: "1" }, { url: "2" }, { url: "3" }],
      },
    ];
    const type = "type";
    const wrapper = shallowMount(List, {
      props: {
        items,
        type,
      },
    });

    expect(wrapper.find(".list").exists()).toBeTruthy();
  });

  it("Should renders property", async () => {
    const items = [];
    const type = "type";
    const wrapper = shallowMount(List, {
      props: {
        items,
        type,
      },
    });

    expect(wrapper.find(".list__no-data").exists()).toBeTruthy();
  });

  describe("SelectItem", () => {
    it("Should emit onselectedItem", () => {
      const items = [
        {
          id: "mockID",
          images: [{ url: "1" }, { url: "2" }, { url: "3" }],
        },
      ];
      const type = "type";
      const wrapper = shallowMount(List, {
        props: {
          items,
          type,
        },
      });

      wrapper.vm.selectItem(items[0]);

      expect(wrapper.emitted("onSelectedItem")).toBeTruthy();
    });
  });
});

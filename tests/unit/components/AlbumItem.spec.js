import { shallowMount } from "@vue/test-utils";
import AlbumItem from "@/components/AlbumItem.vue";

describe("AlbumItem component", () => {
  it("Should renders property", async () => {
    const item = {
      images: [{ url: "1" }, { url: "2" }, { url: "3" }],
    };
    const wrapper = shallowMount(AlbumItem, {
      props: {
        item,
      },
    });

    expect(wrapper.find(".album").exists()).toBeTruthy();
  });
});

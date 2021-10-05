import { shallowMount } from "@vue/test-utils";
import ArtistItem from "@/components/ArtistItem.vue";

describe("ArtistItem component", () => {
  it("Should renders property", async () => {
    const item = {
      images: [{ url: "1" }, { url: "2" }, { url: "3" }],
    };
    const wrapper = shallowMount(ArtistItem, {
      props: {
        item,
      },
    });

    expect(wrapper.find(".artist").exists()).toBeTruthy();
  });
});

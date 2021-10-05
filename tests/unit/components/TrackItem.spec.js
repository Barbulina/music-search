import { shallowMount } from "@vue/test-utils";
import TrackItem from "@/components/TrackItem.vue";

describe("TrackItem component", () => {
  const item = {
    duration_ms: 36121212,
    album: { name: "name" },
    images: [{ url: "1" }, { url: "2" }, { url: "3" }],
  };
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(TrackItem, {
      props: {
        item,
      },
    });
  });
  it("Should renders property", async () => {
    expect(wrapper.find(".track").exists()).toBeTruthy();
  });

  it("Should redenr duration time formated", () => {
    expect(wrapper.find(".track__duration").text()).toEqual("2 min 1 sec");
  });
});

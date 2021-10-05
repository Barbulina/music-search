import { shallowMount } from "@vue/test-utils";
import TrackDetails from "@/components/TrackDetails.vue";
describe("TrackDetails view", () => {
  it("Should renders property", async () => {
    const data = {
      name: "name",
      album: { name: "albumName" },
      artist: [{ name: "artistName" }],
      popularity: 40,
      duration_ms: 3636363,
    };
    const wrapper = shallowMount(TrackDetails, {
      props: {
        data,
      },
    });

    expect(wrapper.find(".track-details").exists()).toBeTruthy();
  });

  // TODO mock get deail call and return value
});

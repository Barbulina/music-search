import { shallowMount } from "@vue/test-utils";
import AlbumDetails from "@/components/AlbumDetails.vue";
describe("AlbumDetails view", () => {
  it("Should renders property", async () => {
    const data = {
      name: "name",
      type: "type",
      artist: [{ name: "artistName" }],
      popularity: 40,
      total_tracks: 10,
      release_date: 3636363,
      images: [{ url: "1" }, { url: "2" }, { url: "3" }],
    };
    const wrapper = shallowMount(AlbumDetails, {
      props: {
        data,
      },
    });

    expect(wrapper.find(".album-details").exists()).toBeTruthy();
    expect(wrapper.find(".album-details__name").text()).toEqual(data.name);
  });

  // TODO values are rendered
});

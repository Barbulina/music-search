import { shallowMount } from "@vue/test-utils";
import ArtistDetails from "@/components/ArtistDetails.vue";
describe("ArtistDetails view", () => {
  it("Should renders property", async () => {
    const data = {
      name: "name",
      type: "type",
      genres: ["genre 1", "genre 2"],
      followers: { total: 40 },
      total_tracks: 10,
      images: [{ url: "1" }, { url: "2" }, { url: "3" }],
    };
    const wrapper = shallowMount(ArtistDetails, {
      props: {
        data,
      },
    });

    expect(wrapper.find(".artist-details").exists()).toBeTruthy();
    expect(wrapper.find(".artist-details__name").text()).toEqual(data.name);
  });

  // TODO values are rendered
});

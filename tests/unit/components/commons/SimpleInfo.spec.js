import { shallowMount } from "@vue/test-utils";
import SimpleInfo from "@/components/commons/SimpleInfo.vue";
describe("SimpleInfo view", () => {
  it("Should renders property", async () => {
    const value = "valueMock";
    const label = "labelMock";
    const wrapper = shallowMount(SimpleInfo, {
      props: {
        value,
        label,
      },
    });

    expect(wrapper.find(".simple-data").exists()).toBeTruthy();
    expect(wrapper.find(".simple-data__label").text()).toEqual(label);
    expect(wrapper.find(".simple-data__content").text()).toEqual(value);
  });
});

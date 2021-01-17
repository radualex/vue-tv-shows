import { shallowMount } from "@vue/test-utils";
import Tag from "@/components/Tag.vue";

describe("Tag.vue", () => {
  it("exists", () => {
    const wrapper = shallowMount(Tag, {});
    expect(wrapper.exists()).toBeTruthy();
  });

  it("triggers event", () => {
    const mockMethod = jest.spyOn(Tag.methods, "handleOnClick");

    const wrapper = shallowMount(Tag, {
      propsData: {
        text: "test",
        color: "red"
      }
    });

    const span = wrapper.find("span");
    span.trigger("click");

    expect(mockMethod).toHaveBeenCalled();
  });
});

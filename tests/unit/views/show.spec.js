import { shallowMount } from "@vue/test-utils";
import Show from "@/views/Show.vue";
import Search from "@/components/Search.vue";
import Tag from "@/components/Tag.vue";
import Scrollable from "@/components/Scrollable.vue";

import { defaultCall } from "../../test-data/api.js";

describe("Show.vue", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(defaultCall)
    })
  );

  it("exists", () => {
    const wrapper = shallowMount(Show, {});
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should have a search bar", () => {
    const wrapper = shallowMount(Show, {});
    expect(wrapper.findComponent(Search)).toBeTruthy();
  });

  it("should have tags", () => {
    const wrapper = shallowMount(Show, {});
    expect(wrapper.findAllComponents(Tag).length).toBe(5);
  });

  it("should have scrollable", () => {
    const wrapper = shallowMount(Show, {});
    expect(wrapper.findComponent(Scrollable)).toBeTruthy();
  });
});

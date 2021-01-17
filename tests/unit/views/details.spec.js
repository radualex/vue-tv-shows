import { shallowMount } from "@vue/test-utils";
import Details from "@/views/Details.vue";

import { lookupCall } from "../../test-data/api.js";

describe("Show.vue", () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(lookupCall)
    })
  );
  let $route;
  beforeEach(() => {
    $route = {
      params: {
        id: 1
      }
    };
  });

  it("exists", () => {
    const wrapper = shallowMount(Details, {
      mocks: {
        $route
      }
    });
    expect(wrapper.exists()).toBeTruthy();
  });

  it("should display error screen if item is null", () => {
    const wrapper = shallowMount(Details, {
      mocks: {
        $route
      }
    });

    expect(wrapper.find("#contentWrapper").exists()).toBe(false);
  });

  it("should display details screen if item is defined", async () => {
    const wrapper = shallowMount(Details, {
      mocks: {
        $route
      }
    });

    const item = {
      name: "test"
    };
    wrapper.setData({ item });

    await wrapper.vm.$nextTick();

    expect(wrapper.find("#contentWrapper").exists()).toBe(true);
  });

  it("should compute default value if rating is null", () => {
    const wrapper = shallowMount(Details, {
      mocks: {
        $route
      }
    });

    const item = {
      rating: null
    };

    wrapper.setData({ item });
    expect(wrapper.vm.rating).toBe("N/A");
  });

  it("should compute the rating correctly", () => {
    const wrapper = shallowMount(Details, {
      mocks: {
        $route
      }
    });

    const item = {
      rating: 10
    };

    wrapper.setData({ item });
    expect(wrapper.vm.rating).toBe(`${item.rating}/10`);
  });
});

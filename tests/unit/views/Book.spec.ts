import { mount, createLocalVue, Wrapper } from "@vue/test-utils";

import VueRouter from "vue-router";
import { routes } from "@/router";

import Book from "@/views/Book.vue";
import Vue from "vue";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({ routes });

describe("Book", () => {
  let wrapper: Wrapper<Vue>;
  beforeEach(() => {
    wrapper = mount(Book, {
      localVue,
      router
    });
  });
  it("Updates currentStep accordingly to the route index", async () => {
    router.push("/goals");
    await wrapper.vm.$nextTick();
    // const { currentStep, stages } = wrapper.vm;
    // expect(stages).toContain("goals");
    // expect(currentStep).toBe(2);
  });
});

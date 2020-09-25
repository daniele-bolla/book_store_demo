/* eslint-disable @typescript-eslint/no-explicit-any */
import { mount, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import WithPagination from "@/components/WithPagination";

const WrapperComp = {
  template: `
  <WithPagination v-bind="$attrs" v-slot="props">
    <div>
      <div class="current-items-length">{{props.currentItems.length}}</div>
      <div class="links-length">{{props.currentItems.length}}</div>
    </div>
  </WithPagination>
  `,
  components: {
    WithPagination
  }
};

const createWrapper = (propsData: object): Wrapper<Vue> => {
  return mount(WrapperComp, {
    propsData
  }).findComponent(WithPagination);
};

describe("WithPagination", () => {
  it("calculates current items and links", () => {
    const propsData = {
      currentPage: 2,
      pageSize: 4,
      items: [...Array(10)].map((item, index) => ({ index }))
    };
    const wrapper = createWrapper(propsData);
    const { currentItems, links, pageSize } = wrapper.vm as any;
    const { 0: first, length, [length - 1]: last } = currentItems;
    expect(length).toBe(pageSize);
    expect(first.index).toBe(4);
    expect(last.index).toBe(7);
    expect(links.length).toBe(3);
  });
  it("calculates last current items", () => {
    const propsData = {
      currentPage: 3,
      pageSize: 4,
      items: [...Array(10)].map((item, index) => ({ index }))
    };
    const wrapper = createWrapper(propsData);
    const { currentItems, pageSize, items } = wrapper.vm as any;
    const { 0: first, length, [length - 1]: last } = currentItems;
    const reminder = items.length % pageSize;
    expect(length).toBe(reminder);
    expect(first.index).toBe(items.length - reminder);
    expect(last.index).toBe(items.length - 1);
  });
});

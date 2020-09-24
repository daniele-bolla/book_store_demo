import { mount, createLocalVue, Wrapper } from "@vue/test-utils";
import Vue from "vue";
import BookCard from "@/components/BookCard.vue";
import VueRouter from "vue-router";
import { routes } from "@/router";

const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter({ routes });

describe("BookCard", () => {
  let wrapper: Wrapper<Vue>;
  const book = { slug: "test-slug" };
  beforeEach(() => {
    wrapper = mount(BookCard, {
      localVue,
      router,
      propsData: {
        book
      }
    });
  });
  it("computes link", () => {
    const { link } = wrapper.vm as any;
    expect(link.params.slug).toBe(book.slug);
  });
  it("pushes on book view", () => {
    const links = wrapper.findAll("[data-test=link]");
    expect(links.length).toBe(2);
  });
  it("pushes on book view", async () => {
    const link = wrapper.get("[data-test=link]");
    link.trigger("click");
    await Vue.nextTick();
    expect(router.currentRoute.path).toBe(`/books/${book.slug}`);
  });
});

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
  it("has two links", () => {
    const { length, wrappers } = wrapper.findAll("[data-test=link]");

    const isWrappingImage = wrappers.filter(link =>
      link.find(".top-book-card__cover").exists()
    );
    const isWrappingTitle = wrappers.filter(link =>
      link.find(".top-book-card__title").exists()
    );
    expect(isWrappingImage.length).toBe(1);
    expect(isWrappingTitle.length).toBe(1);
    expect(length).toBe(2);
  });
  it("pushes on book view", async () => {
    const link = wrapper.get("[data-test=link]");
    link.trigger("click");
    await Vue.nextTick();
    expect(router.currentRoute.path).toBe(`/books/${book.slug}`);
  });
});

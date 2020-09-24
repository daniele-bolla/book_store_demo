/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const book = {
    slug: "test-slug",
    synopsis:
      "In Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth.\nIn Search of Lost Time, also translated as Remembrance of Things Past, novel in seven parts by Marcel Proust, published in French as À la recherche du temps perdu from 1913 to 1927. The novel is the story of Proust's own life, told as an allegorical search for truth."
  };
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
  it("truncates synopsis to 200", async () => {
    const { synopsis } = wrapper.vm as any;
    const dots = 3;
    expect(synopsis.length).toBe(200 + dots);
  });
});

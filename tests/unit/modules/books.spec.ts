import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import Books from "@/store/modules/books";
import { BookInterface } from "@/interfaces/BookInterface";

jest.mock("@/services/BookService", () => ({
  getAll: () =>
    Promise.resolve([
      {
        title: "First Title",
        synopsis: "First text",
        slug: "first_slug",
        upvoted: false,
        upvotes: 1
      },
      {
        title: "Second Title",
        synopsis: "Second text",
        slug: "second_slug",
        upvoted: true,
        upvotes: 3
      }
    ])
}));

const Vue = createLocalVue();
Vue.use(Vuex);

const factory = () => {
  const store = new Vuex.Store({
    state: {},
    modules: {
      books: Books
    }
  });
  return getModule(Books, store);
};

describe("Books", () => {
  it("has to get a store instance", done => {
    const module = factory();
    expect(module).toBeInstanceOf(Object);
    done();
  });
  it("fills all books from api", async done => {
    const module = factory();
    await module.getAll();
    done();
  });
  it("filters books by searching text or title by case insensitive", async done => {
    //fetched all books
    const module = factory();
    await module.getAll();
    //filters books by text or title
    const searchAttempts = ["first", "title", "Text"];
    const searchMapAttempts = searchAttempts.reduce(
      (searchMap: Record<string, Array<BookInterface>>, attempt: string) => {
        searchMap[attempt] = module.booksBySearch(attempt);
        return searchMap;
      },
      {}
    );
    expect(searchMapAttempts.first.length).toBe(1);
    expect(searchMapAttempts.title.length).toBe(2);
    expect(searchMapAttempts.Text.length).toBe(2);
    done();
  });
  it("returns all books if search query is empty", async done => {
    //fetched all books
    const module = factory();
    await module.getAll();
    //returns all by empty search query
    const books = module.booksBySearch("");
    expect(books.length).toBe(2);
    done();
  });
  it("finds a book by given slug", async done => {
    //fetched all books
    const module = factory();
    await module.getAll();

    const slug = "first_slug";
    const book = module.bookBySlug(slug);
    expect(book && book.title).toBe("First Title");
    done();
  });
  it("sets upvetes", async done => {
    //fetched all books
    const module = factory();
    await module.getAll();
    //given a book
    const slug = "first_slug";
    const book = module.bookBySlug(slug);

    await module.setUpvote(slug);

    expect(book && book.upvoted).toBeTruthy();
    expect(book && book.upvotes).toBe(2);
    done();
  });
});

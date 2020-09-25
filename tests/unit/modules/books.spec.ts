import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import Books from "@/store/modules/books";
import { BookInterface } from "@/interfaces/BookInterface";

jest.mock("@/services/BookService", () => ({
  getAll: () =>
    Promise.resolve([
      { title: "First Title", synopsis: "First text" },
      { title: "Second Title", synopsis: "Second text" }
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
        searchMap[attempt] = module.queryBooks(attempt);
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
    const books = module.queryBooks("");
    expect(books.length).toBe(2);
    done();
  });
});

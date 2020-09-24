import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import { getModule } from "vuex-module-decorators";
import Books from "@/store/modules/books";

jest.mock("@/services/BookService", () => ({
  getAll: () => Promise.resolve([{}, {}])
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
    const service = factory();
    expect(service).toBeInstanceOf(Object);
    done();
  });
  it("fills all books from api", async done => {
    const service = factory();
    await service.getAll();
    expect(service.all.length).toBe(2);
    done();
  });
});

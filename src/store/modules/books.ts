import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

import { BookInterface } from "@/interfaces/BookInterface";
import BookService from "@/services/BookService";

@Module({
  namespaced: true,
  name: process.env.NODE_ENV === "test" ? "books" : undefined
})
class Books extends VuexModule {
  public all: BookInterface[] = [];

  @Mutation
  public GET_ALL(all: BookInterface[]) {
    this.all = all;
  }
  @Mutation
  public SET_UPVOTE(book: BookInterface) {
    book.upvoted = true;
    book.upvotes += 1;
  }

  @Action({ commit: "GET_ALL", rawError: true })
  public async getAll() {
    return await BookService.getAll();
  }

  @Action({ commit: "SET_UPVOTE", rawError: true })
  public async setUpvote(slug: string) {
    return this.bookBySlug(slug);
  }

  get booksBySearch() {
    return (searchText: string) => {
      return searchText
        ? this.all.filter(
            ({ title, synopsis }) =>
              title.match(new RegExp(searchText, "i")) ||
              synopsis.match(new RegExp(searchText, "i"))
          )
        : this.all;
    };
  }

  get bookBySlug() {
    return (bySlug: string) => {
      return this.all.find(({ slug }) => slug == bySlug);
    };
  }
}
export default Books;

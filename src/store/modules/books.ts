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

  @Action({ commit: "GET_ALL", rawError: true })
  public async getAll() {
    return await BookService.getAll();
  }

  get queryBooks() {
    return (searchText: string) => {
      return searchText
        ? this.all.filter(
            ({ title, synopsis }) =>
              title.includes(searchText) || synopsis.includes(searchText)
          )
        : this.all;
    };
  }
}
export default Books;

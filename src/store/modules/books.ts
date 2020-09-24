import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

import { BookInterface } from "@/interfaces/BookInterface";
import BookService from "@/services/BookService";

@Module({ namespaced: true })
class Books extends VuexModule {
  public all: BookInterface[] = [];
  public test: string | undefined;

  @Mutation
  public GET_ALL(all: BookInterface[]) {
    this.all = all;
    debugger;
  }
  public GET_TEST(test: string) {
    this.test = test;
  }
  @Action({ commit: "GET_ALL", rawError: true })
  public async getAll() {
    return await BookService.getAll();
  }
  @Action({ commit: "GET_ALL", rawError: true })
  getTest() {
    return "books";
  }
}
export default Books;

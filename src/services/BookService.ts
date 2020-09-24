import { BookInterface } from "@/interfaces/BookInterface";
import { ApiService } from "./ApiService";
type BooksResponse = {
  books: BookInterface[];
};
class BookService extends ApiService {
  public getAll = async (): Promise<BooksResponse> => {
    const {
      data: { books }
    } = await this.api.get("/books");
    return books;
  };
  public getBySlug = (slug: string) =>
    this.api.get<Promise<BookInterface>>(`/books/${slug}`);
}

export default new BookService();

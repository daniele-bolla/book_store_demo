<template>
  <div class="home container page">
    <div class="top-books__title">Top Books Of All Time</div>
    <base-input
      name="search"
      label="Serach for a book"
      type="search"
      v-model="searchText"
    ></base-input>
    <with-pagination
      v-slot="{ currentItems: currentBooks, links }"
      :current-page="currentPage"
      :items="books"
      :per-size="4"
    >
      <div class="top-books-list">
        <nav class="pagination">
          <a
            v-for="link in links"
            :key="link"
            class="pagination__link"
            :class="{ active: link === currentPage }"
            @click="currentPage = link"
            v-text="link"
          >
          </a>
        </nav>
        <book-card :book="book" v-for="book in currentBooks" :key="book.slug">
        </book-card>
        <nav class="pagination">
          <a
            v-for="link in links"
            :key="link"
            class="pagination__link"
            :class="{ active: link === currentPage }"
            @click="currentPage = link"
            v-text="link"
          >
          </a>
        </nav>
      </div>
    </with-pagination>
  </div>
</template>

<script lang="ts">
import { BookInterface } from "@/interfaces/BookInterface";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const books = namespace("books");

import BookCard from "@/components/BookCard.vue";
import BaseInput from "@/components/BaseInput.vue";
import WithPagination from "@/components/WithPagination.ts";

@Component({
  components: {
    BookCard,
    BaseInput,
    WithPagination
  }
})
export default class Home extends Vue {
  searchText = "";
  currentPage = 1;
  async mounted() {
    await this.getAll();
  }

  @books.State
  public all!: Array<object>;

  @books.Action
  public getAll!: () => void;

  @books.Getter
  public queryBooks!: (searchText: string) => Array<BookInterface>;

  get books() {
    return this.queryBooks(this.searchText);
  }
}
</script>

<style lang="scss">
.top-books-list__item:nth-child(even) {
  background: $card-bg;
}
.top-book-card {
  display: flex;
}
</style>

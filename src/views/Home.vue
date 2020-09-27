<template>
  <div class="container page top-books-page">
    <div class="top-books__title">Top Books Of All Time</div>
    <base-input
      class="top-books__search"
      name="search"
      placeholder="Search for a book"
      type="search"
      v-model="searchText"
    ></base-input>
    <with-pagination
      v-slot="{ currentItems: currentBooks, links }"
      :current-page="currentPage"
      :items="books"
    >
      <div class="top-books-list">
        <base-pagination :links="links" v-model="currentPage"></base-pagination>
        <book-card
          class="top-books-list__item"
          :book="book"
          :index="index + 1"
          v-for="(book, index) in currentBooks"
          :key="book.slug"
        >
        </book-card>
        <base-pagination :links="links" v-model="currentPage"></base-pagination>
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
import BasePagination from "@/components/BasePagination.vue";

@Component({
  components: {
    BookCard,
    BaseInput,
    WithPagination,
    BasePagination
  }
})
export default class Home extends Vue {
  private searchText = "";
  private currentPage = 1;

  @books.Getter
  public booksBySearch!: (searchText: string) => Array<BookInterface>;

  get books() {
    return this.booksBySearch(this.searchText);
  }
}
</script>

<style lang="scss">
.top-books__title {
  font-size: 2rem;
  color: $primary;
  font-weight: $bold;
  text-align: center;
  padding: 1rem 0 2rem;
}

.top-books__search {
  margin-bottom: 2rem;
}

.top-books-list__item {
  margin-left: -$padding-page-x;
  margin-right: -$padding-page-x;
  padding: 1.6rem;
}

.top-books-list__item:nth-child(odd) {
  background: $card-bg;
}
</style>

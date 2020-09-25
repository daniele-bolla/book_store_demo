<template>
  <div class="home container page">
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
        <book-card
          class="top-books-list__item"
          :book="book"
          :index="index + 1"
          v-for="(book, index) in currentBooks"
          :key="book.slug"
        >
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
  margin-left: -1.6rem;
  margin-right: -1.6rem;
  padding: 1.6rem;
}

.top-books-list__item:nth-child(odd) {
  background: $card-bg;
}

.pagination {
  display: flex;
  justify-content: center;
  padding: 0.6rem 0;
}

.pagination__link {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: 2px solid $primary;
  color: $primary;
  font-weight: $bold;
}

.pagination__link.active {
  background: $primary;
  color: $white;
}
</style>

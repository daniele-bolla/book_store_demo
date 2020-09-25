<template>
  <div class="home container page">
    <base-input name="search" type="search" v-model="searchText"></base-input>

    <div class="top-books__title">Top Books Of All Time</div>
    <div class="top-books-list">
      <book-card :book="book" v-for="book in books" :key="book.slug">
      </book-card>
    </div>
  </div>
</template>

<script lang="ts">
import { BookInterface } from "@/interfaces/BookInterface";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const books = namespace("books");

import BookCard from "@/components/BookCard.vue";
import BaseInput from "@/components/BaseInput.vue";

@Component({
  components: {
    BookCard,
    BaseInput
  }
})
export default class Home extends Vue {
  searchText = "";

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

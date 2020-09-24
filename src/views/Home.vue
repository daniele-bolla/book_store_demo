<template>
  <div class="home container page">
    <div class="top-books__title">Top Books Of All Time</div>
    <div class="top-books-list">
      <book-card :book="book" v-for="book in all" :key="book.slug"> </book-card>
    </div>
  </div>
</template>

<script lang="ts">
import BookCard from "@/components/BookCard.vue";
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const books = namespace("books");

@Component({
  components: {
    BookCard
  }
})
export default class Home extends Vue {
  mounted() {
    this.getAll();
  }

  @books.State
  public all!: Array<object>;

  @books.Action
  public getAll!: () => void;
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

<template>
  <div class="home container page">
    <div class="top-books__title">Top Books Of All Time</div>
    <div class="top-books-list">
      <div
        class="top-books-list__item top-book-card"
        v-for="book in all"
        :key="book.slug"
      >
        <div class="top-book-card__description">
          <h2 class="top-book-card__title">
            {{ book.title }}
            <small class="top-book-card__rating">{{ book.rating }}</small>
          </h2>
          <h3 class="top-book-card__author">{{ book.author }}</h3>
          <div class="top-book-card__synopsis">{{ book.synopsis }}</div>
        </div>
        <div class="top-book-card__picture">
          <img
            class="top-book-card__cover"
            :src="book.cover"
            :alt="book.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { namespace } from "vuex-class";
const books = namespace("books");

@Component
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

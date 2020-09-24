<template>
  <div class="top-books-list__item top-book-card">
    <div class="top-book-card__description">
      <router-link data-test="link" :to="link">
        <h2 class="top-book-card__title">
          {{ book.title }}
          <small class="top-book-card__rating">{{ book.rating }}</small>
        </h2>
      </router-link>
      <h3 class="top-book-card__author">{{ book.author }}</h3>
      <div class="top-book-card__synopsis">{{ book.synopsis }}</div>
    </div>
    <div class="top-book-card__picture">
      <router-link data-test="link" :to="link"
        ><img class="top-book-card__cover" :src="book.cover" :alt="book.title"
      /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { BookInterface } from "@/interfaces/BookInterface";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class BookCard extends Vue {
  @Prop({ required: true })
  readonly book!: BookInterface;

  get link(): object {
    return { name: "Book", params: { slug: this.book.slug } };
  }
}
</script>

<style scoped></style>

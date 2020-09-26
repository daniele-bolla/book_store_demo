<template>
  <div>
    <div class="container page book-page">
      <article class="book-article">
        <header class="book-article__header">
          <div class="book-article__header__left">
            <h1 class="book-article__title">{{ book.title }}</h1>
            <h2 class="book-article__author">{{ book.title }}</h2>
          </div>
          <div class="book-article__header__right">
            <span class="book-article__upvotes"
              >Upvoted {{ book.upvotes }} times</span
            >
            <base-button
              class="book-article__button"
              :text="upvotedText"
              :disabled="book.upvoted"
            ></base-button>
          </div>
        </header>
        <main class="book-article__body">
          <figure class="book-article__figure">
            <img
              class="book-article__cover"
              :src="book.cover"
              :alt="book.title"
            />
          </figure>
          <h3 class="book-article__subtitle">Synopsis</h3>
          <div class="book-article__description">{{ book.synopsis }}</div>
        </main>
        <span class="book-article__rating">Rating: {{ book.rating }}</span>
      </article>
    </div>
  </div>
</template>

<script lang="ts">
import { BookInterface } from "@/interfaces/BookInterface";

import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";

const books = namespace("books");

import BaseButton from "@/components/BaseButton.vue";
@Component({
  components: {
    BaseButton
  }
})
export default class Book extends Vue {
  @books.Getter
  public bookBySlug!: (bySlug: string) => BookInterface;

  get book() {
    return this.bookBySlug(this.$route.params.slug);
  }

  get upvotedText(): string {
    return this.book.upvoted ? "Upvoted" : "Upvote";
  }
}
</script>

<style lang="scss">
.book-article__header {
  display: flex;
  justify-content: space-between;
}

.book-article__header__right {
  display: flex;
  align-items: center;
}

.book-article__button {
  margin-left: 1rem;
}

.book-article__title {
  font-size: 2rem;
  color: $primary;
  font-weight: $bold;
  margin-bottom: 0;
}

.book-article__figure {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.book-article__cover {
  max-height: 90vh;
  display: block;
  margin: 1.6rem 0;
  border-radius: $radius;
  box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
}

.book-article__rating {
  font-size: 1rem;
  color: $text-color;
  font-weight: $bold;
}

.book-article__author {
  font-size: 1.2rem;
  font-style: italic;
}

.book-article__description {
  padding-bottom: 2rem;
}

.book-article__subtitle {
  font-size: 1.4rem;
  font-weight: $bold;
  margin-bottom: 1.2rem;
}

@media (max-width: 1024px) {
  .book-article__header {
    flex-direction: column;
  }
  .book-article__header__right {
    justify-content: flex-end;
    margin-top: 1.2rem;
  }
}
</style>

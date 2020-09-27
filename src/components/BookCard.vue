<template>
  <article class="book-card">
    <div class="book-card__description">
      <header class="book-card__description__top">
        <router-link class="book-card__link" :to="link">
          <h2 class="book-card__title">
            {{ index }}. {{ book.title }}
            <small class="book-card__rating">({{ book.rating }})</small>
          </h2>
        </router-link>
        <h3 class="book-card__author">{{ book.author }}</h3>
        <div class="book-card__synopsis">{{ synopsis }}</div>
      </header>
      <footer class="book-card__bottom">
        <base-button
          @click="setUpvote(book.slug)"
          :text="upvotedText"
          :disabled="book.upvoted"
          class="btn-upvotes"
        ></base-button>
        <span class="book-card__upvotes">Upvoted {{ book.upvotes }} times</span>
      </footer>
    </div>
    <figure class="book-card__picture">
      <router-link class="book-card__link" :to="link"
        ><img class="book-card__cover" :src="book.cover" :alt="book.title"
      /></router-link>
    </figure>
  </article>
</template>

<script lang="ts">
import { BookInterface } from "@/interfaces/BookInterface";
import { Component, Prop, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const books = namespace("books");

import BaseButton from "@/components/BaseButton.vue";
@Component({
  components: {
    BaseButton
  }
})
export default class BookCard extends Vue {
  @Prop({ required: true })
  readonly book!: BookInterface;
  @Prop({ required: true })
  readonly index!: number;

  get link(): object {
    return { name: "Book", params: { slug: this.book.slug } };
  }

  get synopsis(): string {
    const { synopsis } = this.book;
    const formattedSynopsis = synopsis.replace(/[\t\n\r]/gm, "");
    return formattedSynopsis.length > 200
      ? `${formattedSynopsis.substring(0, 200)}...`
      : formattedSynopsis;
  }

  get upvotedText(): string {
    return this.book.upvoted ? "Upvoted" : "Upvote";
  }
  @books.Action
  public setUpvote!: (slug: string) => void;
}
</script>

<style lang="scss">
.book-card {
  display: flex;
  padding: 1rem 0.6rem;
}

.book-card__title {
  font-size: 1.6rem;
  color: $primary;
  font-weight: $bold;
  margin: 1rem 0;
}

.book-card__rating {
  font-size: 1rem;
  color: $text-color;
  font-weight: $font-weight;
}

.book-card__author {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 2rem;
}

.book-card__link {
  text-decoration: none;
  display: block;
}

.book-card__cover {
  max-height: 40vh;
  display: block;
  margin: 0 1.6rem;
  border-radius: $radius;
  box-shadow: 0 0.2rem 0.2rem 0.1rem rgba(0, 0, 0, 0.1);
}

.book-card__description {
  display: flex;
  flex-direction: column;
}

.book-card__description__top {
  flex: 1;
}

.book-card__bottom {
  display: flex;
  align-items: center;
}

.book-card__upvotes {
  margin-left: 1rem;
}

@media (max-width: 1024px) {
  .book-card {
    align-items: center;
    flex-direction: column-reverse;
  }
  .book-card__cover {
    max-height: 80vh;
    margin-bottom: 2rem;
  }
}
</style>

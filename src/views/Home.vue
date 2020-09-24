<template>
  <div class="home container page">
    <div class="top-books__title">Top Books Of All Time</div>
    <div class="top-book__list">
      <div class="top--book__card" v-for="book in all" :key="book.slug">
        {{ book }}
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

<template>
  <section class="book-comments">
    <div class="book-comment">
      <div class="book-comment__author">
        UserName
        <time class="book-comment__published" datetime="2017-02-14"
          >2020-09-28</time
        >
      </div>
      <div class="book-comment__text">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          consequat eleifend imperdiet. Vivamus sapien mauris, ultricies nec
          ultricies quis, pellentesque et lacus. Vivamus non sodales urna.
          Vestibulum ultrices magna nec ligula hendrerit, ac venenatis purus
          vehicula. Donec quis imperdiet felis, eget laoreet erat. Etiam
          venenatis nisi augue, vel congue diam volutpat eu. Fusce vitae dapibus
          leo, et consectetur nunc. Nulla molestie nisi sed libero consectetur
          laoreet id eget odio. In non ornare lacus. Sed ligula sapien, dapibus
          sit amet ligula at, pretium tristique orci. Fusce nec lorem eu justo
          tristique finibus. Praesent id arcu a massa porttitor bibendum vel in
          lectus. Curabitur et venenatis libero. Quisque euismod ultrices dolor
          in tincidunt. Cras id mauris enim. Nulla volutpat magna bibendum
          interdum vehicula.
        </p>
      </div>
    </div>
    <div class="book-comment">
      <textarea class="textarea" name="" id="" cols="30" rows="10"></textarea>
      <base-button text="Comment" size="full"></base-button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseButton from "@/components/BaseButton.vue";
@Component({
  components: {
    BaseButton
  }
})
export default class BookComments extends Vue {}
</script>

<style lang="scss">
.book-comment {
  padding: 1rem 2rem;
}

.book-comment__author {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 1.4rem;
}
.book-comment__published {
  font-size: 0.8rem;
  font-style: italic;
  font-weight: $bold;
  margin-left: 1rem;
}

.book-comment__text {
  margin-bottom: 2rem;
  padding: 0 1rem;
}
</style>

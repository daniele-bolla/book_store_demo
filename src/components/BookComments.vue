<template>
  <div class="book-comment">
    <textarea class="textarea" name="" id="" cols="30" rows="10"></textarea>
    <base-button text="Comment" size="full"></base-button>
  </div>
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
  padding: 1rem 0.6rem;
}
</style>

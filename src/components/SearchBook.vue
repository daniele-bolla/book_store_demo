<template>
  <div>
    <base-input v-model="search"></base-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BaseInput from "@/components/BaseInput.vue";

@Component({
  components: {
    BaseInput
  }
})
export default class SearchBook extends Vue {}
</script>

<style scoped></style>

<template>
  <div>
    <div>User {{ $route.params.slug }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Book extends Vue {}
</script>

<style scoped></style>

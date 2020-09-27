<template>
  <nav class="pagination">
    <a
      v-for="link in links"
      :key="link"
      class="pagination__link"
      :class="{ 'pagination__link--active': link === value }"
      @click="$emit('input', link)"
      v-text="link"
    >
    </a>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class Basepagination extends Vue {
  @Prop({ required: true }) readonly links!: Array<unknown>;
  @Prop({ required: true }) readonly value!: number;
}
</script>

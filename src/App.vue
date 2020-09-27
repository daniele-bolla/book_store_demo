<template>
  <div class="site" id="app">
    <default-header></default-header>
    <main class="site__content">
      <router-view />
    </main>
    <default-footer class="site__footer--sticky"></default-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const books = namespace("books");

import DefaultFooter from "@/layout/DefaultFooter.vue";
import DefaultHeader from "@/layout/DefaultHeader.vue";

@Component({
  components: {
    DefaultFooter,
    DefaultHeader
  }
})
export default class App extends Vue {
  async mounted() {
    await this.getAll();
  }

  @books.State
  public all!: Array<object>;

  @books.Action
  public getAll!: () => void;
}
</script>
<style lang="scss">
@import "./assets/reset.css";
@import "@/assets/typo.scss";
@import "@/assets/layout.scss";
@import "@/assets/elements.scss";
@import "@/assets/navs.scss";
@import "@/assets/form.scss";

body {
  background-color: $body-bg;
  color: $text-color;
}

.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site__content {
  flex: 1;
}

.site__footer--sticky {
  position: sticky;
  width: 100%;
  bottom: 0;
}

@supports not (position: sticky) {
  .site__footer--sticky {
    position: fixed;
    height: 6rem;
  }
  .site__content {
    padding-bottom: 6rem;
  }
}
</style>

<template>
  <div class="site" id="app">
    <default-header></default-header>
    <div class="main site__content">
      <router-view />
    </div>
    <default-footer class="site__sticky-footer"></default-footer>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultFooter from "@/layout/DefaultFooter.vue";
import DefaultHeader from "@/layout/DefaultHeader.vue";

@Component({
  components: {
    DefaultFooter,
    DefaultHeader
  }
})
export default class App extends Vue {}
</script>
<style lang="scss">
@import "./assets/reset.css";
@import "./assets/typo.scss";
@import "./assets/layout.scss";
@import "./assets/elements.scss";
@import "./assets/navs.scss";

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

.site__sticky-footer {
  position: sticky;
  width: 100%;
  bottom: 0;
}

@supports not (position: sticky) {
  .site__sticky-footer {
    position: fixed;
    height: 6rem;
  }
  .site__content {
    padding-bottom: 6rem;
  }
}
</style>

<template>
  <footer class="footer">
    <div class="container">
      <nav>
        <ul class="nav nav--center">
          <li class="nav__item nav__item--footer">
            <a class="nav__item__link" href="#">Blog</a>
          </li>
          <li class="nav__item nav__item--footer">
            <a class="nav__item__link" href="#">About</a>
          </li>
          <li class="nav__item nav__item--footer">
            <a class="nav__item__link" href="#">Privacy</a>
          </li>
          <li class="nav__item nav__item--footer">
            <a class="nav__item__link" href="#">Terms</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultFooter extends Vue {}
</script>

<style lang="scss">
.footer {
  background-color: $footer-bg;
  color: $white;
}
</style>

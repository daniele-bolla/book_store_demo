<template>
  <header class="top-actions">
    <div class="container nav-head-wrap">
      <a class="top-logo">Logo</a>
      <nav class="top-menu">
        <ul class="nav nav--head">
          <li
            class="nav__item"
            :class="{ 'nav__item--active': currentPage === '/' }"
          >
            <router-link class="nav__item__link" to="/">Home</router-link>
          </li>
          <li class="nav__item">
            <a class="nav__item__link" href="#">Just added</a>
          </li>
          <li
            class="nav__item"
            :class="{ 'nav__item--active': currentPage === '/top-books' }"
          >
            <router-link class="nav__item__link" to="/top-books"
              >Top books</router-link
            >
          </li>
          <li class="nav__item">
            <a class="nav__item__link" href="#">Upcomingut</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DefaultHeader extends Vue {
  get currentPage() {
    return this.$route.path;
  }
}
</script>

<style lang="scss">
.nav-head-wrap {
  display: flex;
  justify-content: space-between;
}

.top-logo {
  border-radius: 0.4rem;
  padding: 0.6rem 6.6rem;
  background: $grey;
}
.top-menu {
  margin-left: auto;
}

@media (max-width: 1024px) {
  .nav-head-wrap {
    align-items: center;
    flex-direction: column;
  }
  .top-menu {
    margin: 1.2rem 0 0.8rem;
  }
  .top-logo {
    width: auto;
    border-radius: 0.4rem;
    padding: 0.6rem 6.6rem;
    background: $grey;
  }
}
</style>

<template>
  <div class="app" id="apps">
    <header class="header">
      <AHamburger />
      <ALogo />
      <nav v-if="isMobile" class="mobile-menu">
        <ul class="mobile-menu__list">
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link" exact to="/">Home</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/films">Films</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/people">People</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/planets">Planets</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/species">Species</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/starships">Starships</router-link>
          </li>
          <li class="mobile-menu__item">
            <router-link class="mobile-menu__link"exact to="/vehicles">Vehicles</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main">
      <aside v-if="isPC" class="aside"></aside>
      <article class="page">
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
        <div class="page__item"></div>
      </article>
    </main>
    <footer class="footer">
      <p class="footer__text">
        &copy; 2019
        <a
          class="footer__link"
          target="_blank  "
          href="https://github.com/arthurzakharov/start_wars_vue_app"
        >arthurzakharov
        </a>
      </p>
    </footer>
  </div>
</template>

<script>
  import AHamburger from './components/AHamburger.vue';
  import ALogo from './components/ALogo.vue';
  import {mq} from './utils/mixins/mq.js';
  
  export default {
    name: 'App',
    mixins: [mq],
    components: {
      ALogo,
      AHamburger,
    }
  };
</script>

<style lang="scss" scoped>
  @import "./styles/vars.scss";
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .header {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    padding: 20px 10px;
    background-color: $c_black-deep;
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  .mobile-menu {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: $c_black-deep;
    &__list {
      margin-top: 75px;
      margin-left: 10px;
      background-color: transparent;
    }
    &__item {
      margin-bottom: 30px;
      background-color: transparent;
      &:last-of-type { margin-bottom: 0 }
    }
    &__link {
      background-color: transparent;
      font-size: 52px;
      font-weight: 700;
      color: $c_yellow;
      text-decoration: none;
      text-transform: uppercase;
      &.active {
        color: white;
      }
    }
  }
  .main {
    margin-top: 75px;
    background-color: $c_black;
  }
  .page {
    background-color: $c_black;
    &__item {
      width: 90%;
      height: 60px;
      margin: 20px auto;
      background-color: dimgray;
    }
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $c_black-deep;
    padding: 20px 10px;
    &__text,
    &__link {
      background-color: transparent;
      color: $c_yellow;
      font-weight: 300;
      font-size: 14px;
    }
  }
</style>

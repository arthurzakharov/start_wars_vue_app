<template>
  <div class="app" id="apps">
    <header class="header">
      <AHamburger />
      <ALogo />
    </header>
    <main class="main">
      <aside v-if="isPC" class="aside"></aside>
      <article class="page"></article>
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
    padding: 20px 10px;
    background-color: $c_black-deep;
    display: flex;
    align-items: center;
    justify-content: space-between
  }
  .main {
    flex-grow: 1;
    background-color: $c_black;
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

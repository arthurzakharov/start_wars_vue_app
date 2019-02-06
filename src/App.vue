<template>
  <div class="app" id="apps">
    <header class="header">
      <AHamburger />
    </header>
    <main class="main">
      <aside class="aside"></aside>
      <article class="page"></article>
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<script>
  import './styles/styles.scss';
  import AHamburger from './components/AHamburger';
  import {mq} from './utils/mixins/mq';
  
  export default {
    name: 'App',
    mixins: [mq],
    components: {
      AHamburger,
    }
  };
</script>

<style lang="scss" scoped>
  
  .app {
  
  }
</style>

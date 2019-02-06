<template>
  <div class="app" id="apps">
    <header class="header"></header>
    <main class="main">
      <aside class="aside"></aside>
      <article class="page"></article>
    </main>
    <footer v-if="isMobile" class="footer"></footer>
  </div>
</template>

<script>
  import {mq} from './utils/mixins/mq';
  export default {
    name: 'App',
    mixins: [mq],
  };
</script>

<style lang="scss" scoped>
  .app {
  
  }
</style>

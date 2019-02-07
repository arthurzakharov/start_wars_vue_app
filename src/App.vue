<template>
  <div class="app" id="apps">
    <AHeader />
    <AMain />
		<AFooter />
  </div>
</template>

<script>
  import {mq} from './utils/mixins/mq.js';
  import AHeader from './components/AHeader.vue';
  import AMain from "./components/AMain";
  import AFooter from "./components/AFooter";
  
  export default {
    name: 'App',
    mixins: [mq],
    components: {
	    AFooter,
	    AMain,
    	AHeader
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
</style>

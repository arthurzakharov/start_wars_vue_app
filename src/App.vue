<template>
  <div class="app" id="apps">
    <AHeader />
    <AMain />
		<AFooter />
  </div>
</template>

<script>
  import AHeader from './components/AHeader.vue';
  import AMain from "./components/AMain";
  import AFooter from "./components/AFooter";
  
  export default {
    name: 'App',
    components: {
	    AFooter,
	    AMain,
    	AHeader
    },
  };
</script>

<style lang="scss" scoped>
  @import "./styles/vars.scss";
  .app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
	  background-color: $c_black;
  }
</style>

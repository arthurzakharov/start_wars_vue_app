<template>
	<div class="people">People</div>
</template>

<script>
	import {HTTP} from '../utils/http-common.js';
	
  export default {
    name: 'People',
    components: {},
    props: [],
    data() {
      return {};
    },
    methods: {},
    computed: {},
    watch: {},
	  created() {
    	HTTP.get('/people')
		    .then((resp) => {
		    	console.log(resp);
		    })
		    .catch((err) => {
		    	console.log(err);
		    })
	  }
  }
</script>

<style lang="scss" scoped>

</style>

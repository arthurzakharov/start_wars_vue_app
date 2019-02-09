<template>
	<div class="people">People
		<p>{{ number }}</p>
		<p>{{getPage(1)}}</p>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	
  export default {
    name: 'People',
    components: {},
    props: [],
    data() {
      return {};
    },
    methods: {
    	...mapActions({
		    fetchPage: 'people/fetchPage'
	    }),
    },
    computed: {
    	...mapGetters({
		    number: 'people/getItemsAmount',
		    getPages: 'people/getPages',
		    getPage: 'people/getPage',
	    }),
    },
    watch: {},
	  created() {
			this.fetchPage(1);
	  }
  }
</script>

<style lang="scss" scoped>

</style>

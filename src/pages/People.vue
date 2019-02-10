<template>
	<div class="people">
		<h1 class="people__title">People of Star War</h1>
		<PeopleCard
			v-for="(item, index) in peopleList"
			:key="`people-${index}`"
			:people="item"
		/>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import PeopleCard from "../components/PeopleCard";
	
  export default {
    name: 'People',
    components: {PeopleCard},
    props: [],
    data() {
      return {
      	peopleList: [],
      };
    },
    methods: {
    	...mapActions({
		    fetchPage: 'people/fetchPage'
	    }),
    },
    computed: {
    	...mapGetters({
		    number: 'people/getItemsAmount',
		    getCurrentPage: 'people/getCurrentPage',
		    getPage: 'people/getPage',
	    }),
    },
    watch: {},
	  created() {
			this.fetchPage(this.getCurrentPage)
				.then(() => this.peopleList = this.getPage(this.getCurrentPage))
				.catch(err => console.error('People.vue create:\n',err));
	  },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.people {
		padding: 20px 10px;
		background-color: transparent;
		&__title {
			padding-bottom: 10px;
			margin-bottom: 25px;
			border-bottom: 3px solid $c_yellow;
			font-size: 24px;
			color: $c_yellow;
			background-color: transparent;
		}
	}
</style>

<template>
	<div class="people">
		<h1 class="people__title">People of Star War</h1>
		<PeopleCard
			v-for="(item, index) in peopleList"
			:key="`people-${index}`"
			:people="item"
		/>
		<Paginate
			v-model="currentPage"
			container-class="paginate"
			page-class="paginate__item"
			prev-class="paginate__item"
			next-class="paginate__item"
			page-link-class="paginate__link"
			prev-link-class="paginate__link"
			next-link-class="paginate__link"
			:page-count="totalPages"
			:click-handler="functionName"
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
      	currentPage: 0,
	      totalPages: 0,
      	peopleList: [],
      };
    },
    methods: {
    	...mapActions({
		    fetchPage: 'people/fetchPage'
	    }),
      functionName(nextPageNumber) {
    	  console.log('function: ', nextPageNumber);
				this.updateData(nextPageNumber)
      },
	    updateData(nextPageNumber) {
        this.fetchPage(nextPageNumber)
          .then(() => {
            this.currentPage = this.getCurrentPage;
            this.totalPages = this.getTotalPages;
            this.peopleList = this.getPage(this.getCurrentPage);
          })
          .catch(err => console.error('People.vue create:\n',err));
	    }
    },
    computed: {
    	...mapGetters({
		    getCurrentPage: 'people/getCurrentPage',
        getTotalPages: 'people/getTotalPages',
		    getPage: 'people/getPage',
	    }),
    },
    watch: {},
	  created() {
      this.updateData(this.getCurrentPage)
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
	/deep/.paginate {
		display: flex;
		justify-content: space-between;
		padding: 0 10%;
		margin: 30px 0;
		&__item.disabled { opacity: 0.3 }
		&__item.active .paginate__link { color: white }
		&__link {
			color: $c_yellow;
		}
	}
</style>

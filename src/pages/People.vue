<template>
	<div class="people">
		<h1 class="people__title">People of Star War</h1>
		<div class="people__list">
			<ALoadSpinner v-if="isLoading" />
			<PeopleCard
				v-else
				v-for="(item, index) in peopleList"
				:key="`people-${index}`"
				:people="item"
			/>
		</div>
		<APagination
			:total-pages="totalPages"
			:current-page="currentPage"
			:click-handler="updateData"
		/>
	</div>
</template>

<script>
	import {mapActions, mapGetters} from 'vuex';
	import APagination from '../components/APagination.vue';
	import PeopleCard from "../components/PeopleCard";
  import ALoadSpinner from "../components/ALoadSpinner";
	
  export default {
    name: 'People',
    components: {ALoadSpinner, PeopleCard, APagination},
    props: [],
    data() {
      return {
      	currentPage: 0,
	      totalPages: 0,
      	peopleList: [],
	      isLoading: false,
      };
    },
    methods: {
    	...mapActions({
		    fetchPage: 'people/fetchPage'
	    }),
	    async updateData(nextPageNumber) {
    	  this.isLoading = true;
    	  try {
          await this.fetchPage(nextPageNumber ? nextPageNumber : 1);
          this.currentPage = this.getCurrentPage;
          this.totalPages = this.getTotalPages;
          this.peopleList = this.getPage(this.currentPage);
	      }catch (e) {
          console.error('People.vue create:\n', e);
        }finally {
		      this.isLoading = false;
        }
 
	    }
    },
    computed: {
    	...mapGetters({
		    getCurrentPage: 'people/getCurrentPage',
        getTotalPages: 'people/getTotalPages',
		    getPage: 'people/getPage',
	    }),
    },
	  created() {
      this.updateData(this.currentPage)
	  },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.people {
		flex-basis: 100%;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-between;
		padding: 20px 10px 0;
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

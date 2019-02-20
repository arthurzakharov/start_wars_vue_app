<template>
	<div class="people">
		<h1 class="people__title">People of Star War</h1>
		<AWithSpinner class="people__list" :is-loading="isLoading">
			<AItemCard
				v-for="item in peopleList"
				:key="getUID(item)"
				:item="item"
			/>
		</AWithSpinner>
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
	import AItemCard from '../components/AItemCard.vue';
	import AWithSpinner from '../components/AWithSpinner.vue';
	
  export default {
    name: 'People',
    components: {AWithSpinner, AItemCard, APagination},
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
      // this.updateData(this.currentPage)
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

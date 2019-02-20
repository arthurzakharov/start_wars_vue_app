<template>
	<div class="species">
		<h1 class="species__title">Species of Star War</h1>
		<AWithSpinner class="species__list" :is-loading="isLoading">
			<AItemCard
				v-for="item in speciesList"
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
    name: 'ASpecies',
    components: {AWithSpinner, AItemCard, APagination},
    props: [],
    data() {
      return {
        currentPage: 0,
        totalPages: 0,
        speciesList: [],
        isLoading: false,
      };
    },
    methods: {
      ...mapActions({
        fetchPage: 'species/fetchPage'
      }),
      async updateData(nextPageNumber) {
        this.isLoading = true;
        try {
          await this.fetchPage(nextPageNumber ? nextPageNumber : 1);
          this.currentPage = this.getCurrentPage;
          this.totalPages = this.getTotalPages;
          this.speciesList = this.getPage(this.currentPage);
        }catch (e) {
          console.error('Species.vue create:\n', e);
        }finally {
          this.isLoading = false;
        }
      }
    },
    computed: {
      ...mapGetters({
        getCurrentPage: 'species/getCurrentPage',
        getTotalPages: 'species/getTotalPages',
        getPage: 'species/getPage',
      }),
    },
    created() {
      this.updateData(this.currentPage)
    },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.species {
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

<template>
	<div class="page">
		<h1 class="page__title">{{ currentPageName.title }} of Star War</h1>
		<AWithSpinner class="page__list" :is-loading="isLoading">
			<AItemCard
				v-for="item in pageList"
				:key="getUID(item)"
				:item="item"
			/>
		</AWithSpinner>
		<APagination
			:total-pages="totalPages"
			:current-page="currentPageNumber"
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
    name: 'PageTemplate',
    components: {AWithSpinner, AItemCard, APagination},
    props: [],
    data() {
      return {
        totalPages: 0,
        currentPageNumber: 0,
        currentPageName: {},
        pageList: [],
        isLoading: false,
      };
    },
    methods: {
      ...mapActions({
        fetchPage: 'data/fetchPage',
      }),
	    async updateData(nextPageNumber = 1) {
        this.isLoading = true;
        const payload = {
          name: this.currentPageName.name,
          number: nextPageNumber,
        };
        try {
          await this.fetchPage(payload);
          this.currentPageNumber = this.getCurrentPageNumber(payload.name);
          this.totalPages = this.getTotalPages(payload.name);
          this.pageList = this.getPages(payload);
        }
        finally {
          this.isLoading = false;
        }
      }
    },
    computed: {
      ...mapGetters({
        getCurrentPageName: 'data/getCurrentPageName',
        getCurrentPageNumber: 'data/getCurrentPageNumber',
        getTotalPages: 'data/getTotalPages',
        getPages: 'data/getPages',
      }),
    },
	  beforeRouteEnter(to,from, next) {
      next(self => {
        self.currentPageName = self.getCurrentPageName;
        self.updateData();
      });
	  },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.page {
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

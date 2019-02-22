<template>
	<div class="page">
		<h1 class="page__title">{{ currentPageInfo.title }} of Star War</h1>
		<AWithSpinner class="page__list" :is-loading="isLoading">
			<!--<AItemCard-->
				<!--v-for="item in pageList"-->
				<!--:key="getUID(item)"-->
				<!--:item="item"-->
			<!--/>-->
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
        currentPageInfo: {},
        pageList: [],
        isLoading: false,
      };
    },
    methods: {
      ...mapActions({
        changeCurrentPageInfo: 'data/changeCurrentPageInfo',
        fetchPage: 'data/fetchPage',
      }),
      async updateData(nextPageNumber, payload) {
        this.isLoading = true;
        const {name, number} = payload;
        const fetchPagePayload = {
          name: (payload) ? this.currentPageInfo.name : name,
	        number: (nextPageNumber === null) ? number : 1,
        };
        try {
          await this.fetchPage(payload);
          this.currentPageNumber = this.getCurrentPageNumber(name);
          this.totalPages = this.getTotalPages(name);
          this.pageList = this.getPages(fetchPagePayload);
        }catch (e) {
          console.error('[PageTemplate.vue]updateData:\n', e);
        }finally {
	        this.isLoading = false;
        }
      }
    },
    computed: {
      ...mapGetters({
        getCurrentPageInfo: 'data/getCurrentPageInfo',
        getCurrentPageNumber: 'data/getCurrentPageNumber',
        getTotalPages: 'data/getTotalPages',
        getPages: 'data/getPages',
      }),
    },
	  beforeRouteEnter(to,from, next) {
      next(self => {
        self.currentPageInfo = self.getCurrentPageInfo;
        self.updateData(null, {
          name: self.getCurrentPageInfo.name,
          number: self.getCurrentPageNumber(self.getCurrentPageInfo.name),
        });
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

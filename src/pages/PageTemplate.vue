<template>
	<div class="page">
		<h1 class="page__title">{{ pageInfo.title }} of Star War</h1>
		<AWithSpinner class="page__list" :is-loading="isLoading">
			<!--<AItemCard-->
				<!--v-for="item in pageList"-->
				<!--:key="getUID(item)"-->
				<!--:item="item"-->
			<!--/>-->
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
    name: 'PageTemplate',
    components: {AWithSpinner, AItemCard, APagination},
    props: [],
    data() {
      return {
        currentPage: 0,
        totalPages: 0,
        pageList: [],
        isLoading: false,
	      pageInfo: {},
      };
    },
    methods: {
      ...mapActions({
        changeCurrentPageInfo: 'data/changeCurrentPageInfo',
        fetchPage: 'data/fetchPage',
      }),
      async updateData(payload) {
        console.log('updateData: ', payload);
        this.isLoading = true;
        try {
          await this.fetchPage(payload);
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
      }),
    },
	  beforeRouteEnter(to,from, next) {
      console.log('beforeRouteEnter [COMPONENT]');
      next(self => {
        self.changeCurrentPageInfo(to.name)
	        .then(() => self.pageInfo = self.getCurrentPageInfo)
	        .catch((e) => console.error(`error on PageTemplate in changeCurrentPage\n${e}`))
      });
	  },
	  created() {
      console.log('created [COMPONENT]: ', this.pageInfo);
      this.updateData({
	      name: this.getCurrentPageInfo.module,
	      number: 1
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

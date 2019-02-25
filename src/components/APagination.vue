<template>
	<Paginate
		v-if="totalPages !== 1"
		v-model="page"
		container-class="paginate"
		page-class="paginate__item"
		prev-class="paginate__item"
		next-class="paginate__item"
		page-link-class="paginate__link"
		prev-link-class="paginate__link"
		next-link-class="paginate__link"
		:page-count="totalPages"
		:click-handler="clickHandlerWrapper"
	/>
</template>

<script>
  export default {
    name: 'APagination',
    components: {},
    props: {
      clickHandler: {
        type: Function,
	      required: true,
      },
	    currentPage: {
        type: Number,
		    required: true,
	    },
      totalPages: {
        type: Number,
		    required: true,
	    },
    },
	  data() {
      return {
        page: this.currentPage,
      };
	  },
    methods: {
      clickHandlerWrapper(nextPage) {
        console.log('APagination method call: ');
        this.clickHandler(nextPage);
      },
    },
	  created() {
      console.log('APagination created: ');
    },
	  updated() {
      console.log('APagination updated: ');
    }
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.paginate {
		display: flex;
		justify-content: space-between;
		padding: 0 10%;
		margin: 30px 0;
		/deep/ &__item.disabled { opacity: 0.3 }
		/deep/ &__item.active .paginate__link { color: white }
		/deep/ &__link {
			color: $c_yellow;
		}
	}
</style>

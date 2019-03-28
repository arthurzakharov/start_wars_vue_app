<template>
	<article class="content">
		<transition name="fade">
			<Error v-if="error" :msg="error" />
			<router-view v-else />
		</transition>
	</article>
</template>

<script>
	import { mapGetters } from 'vuex';
	import Error from '../components/Error';
	
	export default {
		name: 'APage',
		components: {Error},
		computed: {
			...mapGetters({
				error: 'error/getError'
			})
		},
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars";
	
	.content {
		position: relative;
		display: flex;
		flex-basis: 100%;
		background-color: $c_black;
	}
	
	@media screen and (min-width: $mq_pc) {
		.content {
			margin-left: 20%;
		}
	}
</style>

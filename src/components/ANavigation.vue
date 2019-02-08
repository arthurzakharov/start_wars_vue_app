<template>
	<ul class="navigation">
		<ANavigationItem
		v-for="(item, index) in pages"
		:key="`${index}_${item.txt}`"
		:path="item.path"
		:txt="item.txt"
		/>
	</ul>
</template>

<script>
	import ANavigationItem from "./ANavigationItem.vue";
	
	export default {
		name: 'ANavigation',
		components: {ANavigationItem},
		data() {
			return {
				pages: [
					{
						path: '/',
						txt: 'Home',
					},
					{
						path: '/films',
						txt: 'Films'
					},
					{
						path: '/people',
						txt: 'People'
					},
					{
						path: '/planets',
						txt: 'Planets'
					},
					{
						path: '/species',
						txt: 'Species'
					},
					{
						path: '/starships',
						txt: 'Starships',
					},
					{
						path: '/vehicles',
						txt: 'Vehicles',
					},
				]
			};
		},
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.navigation {
		background-color: transparent;
	}
	
	@media screen and (min-width: $mq_pc) {
		.navigation {
			width: 80%;
			margin: 30px auto;
		}
	}
</style>
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
	.navigation {
		margin-top: 75px;
		margin-left: 10px;
		background-color: transparent;
	}
</style>
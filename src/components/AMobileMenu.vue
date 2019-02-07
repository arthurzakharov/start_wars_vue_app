<template>
	<nav class="mobile-menu">
		<ul class="mobile-menu__list">
			<AMobileMenuItem
				v-for="(item, index) in pages"
				:key="`${index}_${item.txt}`"
				:path="item.path"
				:txt="item.txt"
			/>
		</ul>
	</nav>
</template>

<script>
	import AMobileMenuItem from "./AMobileMenuItem";
	export default {
		name: 'AMobileMenu',
		components: {AMobileMenuItem},
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
	
	.mobile-menu {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: $c_black-deep;
		&__list {
			margin-top: 75px;
			margin-left: 10px;
			background-color: transparent;
		}
	}
</style>
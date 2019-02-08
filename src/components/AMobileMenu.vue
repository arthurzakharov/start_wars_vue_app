<template>
	<nav class="mobile-menu">
		<ANavigation />
	</nav>
</template>

<script>
	import ANavigation from "./ANavigation.vue";
	
	export default {
		name: 'AMobileMenu',
		components: {ANavigation},
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
		padding-top: 75px;
		padding-left: 10px;
		background-color: $c_black-deep;
	}
	
	@media screen and (min-width: $mq_tablet) {
		.mobile-menu {
			padding-top: 105px;
			padding-left: 25px;
		}
	}
</style>
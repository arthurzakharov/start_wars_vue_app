<template>
	<aside class="aside">
		<ANavigation />
	</aside>
</template>

<script>
	import ANavigation from "./ANavigation";
	export default {
		name: 'ASidebar',
		components: {ANavigation}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.aside {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 85px;
		bottom: 0;
		width: 20%;
		background-color: $c_black;
		box-shadow: 0px -20px 50px -20px $c_yellow;
	}
</style>
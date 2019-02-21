<template>
	<article class="content">
		<router-view></router-view>
	</article>
</template>

<script>
	export default {
		name: 'APage'
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.content {
		display: flex;
		flex-basis: 100%;
		background-color: $c_black;
		&__item {
			width: 90%;
			height: 80px;
			margin: 25px auto;
			background-color: dimgray;
		}
	}
	
	@media screen and (min-width: $mq_pc) {
		.content {
			margin-left: 20%;
		}
	}
</style>

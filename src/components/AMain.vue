<template>
	<main class="main">
		<aside v-if="isPC" class="aside"></aside>
		<article class="page">
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
			<div class="page__item"></div>
		</article>
	</main>
</template>

<script>
	export default {
		name: 'AMain'
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.main {
		margin-top: 75px;
		background-color: $c_black;
	}
	.page {
		background-color: $c_black;
		&__item {
			width: 90%;
			height: 60px;
			margin: 20px auto;
			background-color: dimgray;
		}
	}
</style>
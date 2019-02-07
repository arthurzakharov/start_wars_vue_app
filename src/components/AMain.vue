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
	import {mq} from '../utils/mixins/mq.js';
	
	export default {
		name: 'AMain',
		mixins: [mq],
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.main {
		flex-grow: 1;
		margin-top: 75px;
		background-color: $c_black;
	}
	.page {
		background-color: $c_black;
		&__item {
			width: 90%;
			height: 80px;
			margin: 25px auto;
			background-color: dimgray;
		}
	}
</style>
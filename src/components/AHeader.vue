<template>
	<header class="header">
		<AHamburger />
		<ALogo />
		<AMobileMenu v-if="isMobile" />
	</header>
</template>

<script>
	import {mq} from '../utils/mixins/mq.js';
	import AHamburger from '../components/AHamburger.vue';
	import ALogo from '../components/ALogo.vue';
	import AMobileMenu from "./AMobileMenu";
	
	export default {
		name: 'AHeader',
		mixins: [mq],
		components: {
			AMobileMenu,
			ALogo,
			AHamburger,
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.header {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		right: 0;
		padding: 20px 10px;
		background-color: $c_black-deep;
		display: flex;
		align-items: center;
		justify-content: space-between
	}
</style>
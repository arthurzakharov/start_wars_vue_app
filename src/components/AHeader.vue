<template>
	<header class="header">
		<AHamburger v-if="!isPC" @press="toggleIsMobileMenuOpen"/>
		<h1 v-if="!isMobile" class="header__title">Star Wars Library</h1>
		<ALogo />
		<AMobileMenu v-if="isMobileMenuShown" />
	</header>
</template>

<script>
	import {mq} from '../utils/mixins/mq.js';
	import {mapActions, mapGetters} from 'vuex';
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
		},
		computed: {
			...mapGetters({
				isMobileMenuOpen: 'view/getIsMobileMenuOpen',
			}),
			isMobileMenuShown: function () {
				return !this.isPC && this.isMobileMenuOpen
			}
		},
		methods: {
			...mapActions({
				toggleIsMobileMenuOpen: 'view/toggleIsMobileMenuOpen',
			}),
		},
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.header {
		position: fixed;
		z-index: 2;
		top: 0;
		left: 0;
		right: 0;
		padding: 20px 10px;
		background-color: $c_black-deep;
		display: flex;
		align-items: center;
		justify-content: space-between
	}
	
	@media screen and (min-width: $mq_tablet){
		.header {
			padding: 25px;
			&__title {
				background-color: transparent;
				font-weight: 700;
				font-size: 32px;
				color: $c_yellow;
				text-transform: uppercase;
			}
		}
	}
</style>
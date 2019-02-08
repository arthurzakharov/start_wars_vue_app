<template>
	<li class="navigation-item">
		<router-link
			class="navigation-item__link"
			exact
			:to="path"
			@click.native="clickHandler"
		>{{txt}}
		</router-link>
	</li>
</template>

<script>
	import {mapActions} from 'vuex';
	
	export default {
		name: 'AMobileMenuItem',
		props: {
			path: {
				type: String,
				required: true,
			},
			txt: {
				type: String,
				required: true,
			}
		},
		methods: {
			...mapActions({
				toggleIsMobileMenuOpen: 'view/toggleIsMobileMenuOpen',
			}),
			clickHandler() { this.toggleIsMobileMenuOpen() }
		},
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.navigation-item {
		margin-bottom: 25px;
		background-color: transparent;
		&:last-of-type { margin-bottom: 0 }
		&__link {
			background-color: transparent;
			font-size: 46px;
			font-weight: 700;
			color: $c_yellow;
			text-decoration: none;
			text-transform: uppercase;
			&.active {
				color: white;
			}
		}
	}
	
	@media screen and (min-width: $mq_tablet) {
		.navigation-item {
			margin-bottom: 35px;
			&__link {
				font-size: 66px;
			}
		}
	}
	
	@media screen and (min-width: $mq_pc) {
		.navigation-item {
			display: flex;
			justify-content: center;
			margin-bottom: 20px;
			&__link {
				padding-bottom: 5px;
				border-bottom: 3px solid $c_yellow;
				font-size: 24px;
			}
			&__link.active {
				border-bottom-color: white;
			}
		}
	}
</style>
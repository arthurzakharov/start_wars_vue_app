<template>
	<li class="mobile-menu-item">
		<router-link
			class="mobile-menu-item__link"
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
	
	.mobile-menu-item {
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
</style>
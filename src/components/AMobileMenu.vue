<template>
	<nav v-if="isMobileMenuOpen" class="mobile-menu">
		<ul class="mobile-menu__list">
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link" exact to="/">Home</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/films">Films</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/people">People</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/planets">Planets</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/species">Species</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/starships">Starships</router-link>
			</li>
			<li class="mobile-menu__item">
				<router-link class="mobile-menu__link"exact to="/vehicles">Vehicles</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'AMobileMenu',
		data() {
			return {
				isMobileMenuOpen: false,
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
		&__item {
			margin-bottom: 25px;
			background-color: transparent;
			&:last-of-type { margin-bottom: 0 }
		}
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
<template>
	<button :class="hamburger" type="button" @click="revertState">
    <span class="hamburger-box">
	    <span class="hamburger-inner"></span>
    </span>
	</button>
</template>

<script>
	import {mapGetters} from 'vuex';
	
  export default {
    name: 'AHamburger',
    methods: {
      revertState() { this.$emit('press') },
    },
    computed: {
    	...mapGetters({
		    isMobileMenuOpen: 'view/getIsMobileMenuOpen',
	    }),
      hamburger: function () {
        return [
          'hamburger', 'hamburger--slider',
          {'is-active': this.isMobileMenuOpen }
        ];
      }
    },
  };
</script>

<style scoped lang="scss">
	@import "../styles/vars.scss";
	
	$color: $c_yellow;
	
	.hamburger {
		z-index: 1000;
		padding: 0;
		display: inline-block;
		cursor: pointer;
		transition-property: opacity, filter;
		transition-duration: 0.4s;
		transition-timing-function: linear;
		color: inherit;
		text-transform: none;
		background-color: transparent;
		border: 0;
		margin: 0;
		overflow: visible;
		outline: none;
		&-box {
			width: 40px;
			height: 24px;
			display: inline-block;
			position: relative;
			background-color: transparent;
		}
		&-inner {
			display: block;
			top: 50%;
			margin-top: -2px;
		}
		&-inner,
		&-inner::before,
		&-inner::after {
			width: 40px;
			height: 4px;
			background-color: $color;
			border-radius: 4px;
			position: absolute;
			transition-property: transform;
			transition-duration: 0.4s;
			transition-timing-function: ease;
		}
		&-inner::before,
		&-inner::after {
			content: "";
			display: block;
		}
		&-inner::before { top: -10px }
		&-inner::after { bottom: -10px }
		&.header__dots--lower-index {
			z-index: 800;
		}
		&--slider .hamburger-inner { top: 2px }
		&--slider .hamburger-inner::before {
			top: 10px;
			transition-property: transform, opacity;
			transition-timing-function: ease;
			transition-duration: 0.4s;
		}
		&--slider .hamburger-inner::after { top: 20px }
		&--slider.is-active .hamburger-inner {
			transform: translate3d(0, 10px, 0) rotate(45deg);
			background-color: $color;
		}
		&--slider.is-active .hamburger-inner::before {
			transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
			opacity: 0;
		}
		&--slider.is-active .hamburger-inner::after {
			transform: translate3d(0, -20px, 0) rotate(-90deg);
			background-color: $color;
		}
	}
	
	@media screen and (min-width: $mq_tablet) {
		.hamburger {
			&-box {
				width: 60px;
				height: 44px;
			}
			&-inner {
				width: 60px;
				height: 7px;
			}
			&-inner:before {
				width: 60px;
				height: 7px;
				top: 21px !important;
			}
			&-inner:after {
				width: 60px;
				height: 7px;
				top: 42px !important;
			}
			&--slider.is-active .hamburger-inner {
				transform: translate3d(-9px, 20px, 0) rotate(37deg);
				background-color: #ffe33f;
				width: 77px;
			}
			&--slider.is-active .hamburger-inner:after {
				transform: translate3d(0px, -42px, 0) rotate(-75deg);
				background-color: #ffe33f;
				width: 77px;
			}
		}
	}
</style>

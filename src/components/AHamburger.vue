<template>
	<button :class="hamburger" type="button" @click="revertState">
    <span class="hamburger-box">
	    <span class="hamburger-inner"></span>
    </span>
	</button>
</template>

<script>
  export default {
    name: 'AHamburger',
    data() {
      return { isClosed: false };
    },
    methods: {
      revertState() { this.isClosed = !this.isClosed },
    },
    computed: {
      hamburger: function () {
        return [
          'hamburger', 'hamburger--slider',
          {'is-active': this.isClosed }
        ];
      }
    },
  };
</script>

<style scoped lang="scss">
	@import "../styles/vars.scss";
	
	$color: #FFE33F;
	
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
</style>

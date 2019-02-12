<template>
	<div class="load-spinner"></div>
</template>

<script>
  export default {
    name: 'ALoadSpinner',
    components: {},
    props: [],
    data() {
      return {};
    },
    methods: {},
    computed: {},
    watch: {},
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.load-spinner {
		display: inline-block;
		width: 164px;
		height: 164px;
		&:after {
			content: " ";
			display: block;
			width: 143px;
			height: 143px;
			margin: 1px;
			border-radius: 50%;
			border: 10px solid;
			border-color: $c_yellow transparent $c_yellow transparent;
			animation: load-spinner 1.2s linear infinite;
		}
	}
	
	@keyframes load-spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

</style>

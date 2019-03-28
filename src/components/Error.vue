<template>
	<div class="error">
		<p class="error__msg">{{ msg }}</p>
	</div>
</template>

<script>
	export default {
		name: 'Error',
		props: {
			msg: {
				type: String,
				required: true,
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import '../styles/vars';
	
	.error {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba($c_black-deep, 0.8);
	&__msg {
		 font-size: 2rem;
		 line-height: 1.25;
		 font-weight: 700;
		 color: $c_yellow;
		 text-align: center;
	 }
	}
</style>
<template>
	<footer class="footer">
		<p class="footer__text">
			&copy; 2019
			<a
			class="footer__link"
			target="_blank  "
			:href="repoLink"
			>arthurzakharov
			</a>
		</p>
	</footer>
</template>

<script>
	export default {
		name: 'AFooter',
		data() {
			return {
				repoLink: 'https://github.com/arthurzakharov/start_wars_vue_app'
			};
		}
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.footer {
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $c_black-deep;
		padding: 20px 10px;
		&__text,
		&__link {
			background-color: transparent;
			color: $c_yellow;
			font-weight: 300;
			font-size: 14px;
		}
	}
</style>
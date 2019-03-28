<template>
	<main class="main">
		<ASidebar v-if="isPC" />
		<APage />
	</main>
</template>

<script>
	import {mq} from '../mixins/mq.js';
	import APage from "./APage";
	import ASidebar from "./ASidebar";
	
	export default {
		name: 'AMain',
		components: {ASidebar, APage},
		mixins: [mq],
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.main {
		flex-grow: 1;
		display: flex;
		margin-top: 75px;
		background-color: transparent;
	}
	
	@media screen and (min-width: $mq_pc) {
		.main {
			margin-top: 85px;
			margin-bottom: 30px;
		}
	}
</style>

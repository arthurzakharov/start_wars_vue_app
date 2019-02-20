<template>
	<div class="item-card">
		<div class="item-card__image"></div>
		<div class="item-card__info">
			<div v-for="obj in item" :key="getUID(obj)" class="item-card__line">
				<b class="bold">{{ obj.field }}: </b>{{ obj.value }}
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'AItemCard',
    props: {
      item: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.item-card {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid $c_yellow;
		border-radius: 10px;
		background-color: transparent;
		&:last-of-type { margin-bottom: 0 }
		&__image {
			flex-basis: 90px;
			width: 90px;
			height: 90px;
			background-color: $c_yellow;
			border-radius: 5px;
		}
		&__info {
			flex-basis: calc(100% - 100px);
		}
		&__line {
			margin-bottom: 3px;
			font-weight: 300;
			font-size: 18px;
			line-height: 1.25;
			color: $c_yellow;
			&:last-of-type {
				margin-bottom: 0;
			}
			.bold {
				font-weight: 700;
			}
		}
	}
</style>

<template>
	<div class="item-card">
		<h6 class="item-card__title">{{ cardItem.name.value }}</h6>
		<div class="item-card__block">
			<object class="item-card__image" :data="cardItem.image" type="image/png">
				<img src="../assets/not-loaded.png" alt="avatar" class="item-card__image_404">
			</object>
			<div class="item-card__info">
				<div v-for="obj in cardItem.list" :key="getUID(obj)" class="item-card__line">
					<b class="bold">{{ obj.field }}: </b>{{ obj.value }}
				</div>
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
	  computed: {
      cardItem: function () {
	      const {url, image, name, ...list} = this.item;
        return {url, image, name, list};
      }
	  },
  }
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.item-card {
		display: block;
		padding: 10px;
		margin-bottom: 20px;
		border: 1px solid $c_yellow;
		border-radius: 10px;
		background-color: transparent;
		&:last-of-type { margin-bottom: 0 }
		&__title {
			display: inline-block;
			margin-bottom: 24px;
			padding-bottom: 8px;
			border-bottom: 2px solid $c_yellow;
			font-size: 1.25rem;
			color: $c_yellow;
		}
		&__block {
			display: flex;
			flex-wrap: nowrap;
			align-items: flex-start;
		}
		&__image {
			width: 100px;
			margin-right: 15px;
			background-color: transparent;
			border-radius: 5px;
			
			&_404 {
				width: 100px;
				height: 100px;
				background-size: contain;
				background-color: transparent;
			}
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

<template>
	<div class="people-card">
		<div class="people-card__image"></div>
		<div class="people-card__info">
			<h6 class="people-card__line people-card__name">
				<b class="bold">Name: </b>{{ people.name }}
			</h6>
			<p class="people-card__line people-card__species">
			<p class="people-card__line people-card__height">
				<b class="bold">Height: </b>{{ people.height }}
			</p>
			<p class="people-card__line people-card__mass">
				<b class="bold">Mass: </b>{{ people.mass }}
			</p>
			<p class="people-card__line people-card__date">
				<b class="bold">Date: </b>{{ people.date }}
			</p>
			<p class="people-card__line people-card__gender">
				<b class="bold">Gender: </b>{{ people.gender }}
			</p>
			<p class="people-card__line people-card__hair">
				<b class="bold">Hair: </b>{{ people.hair }}
			</p>
			<p class="people-card__line people-card__eye">
				<b class="bold">Eye: </b>{{ people.eye }}
			</p>
			<p class="people-card__line people-card__skin">
				<b class="bold">Skin: </b>{{ people.skin }}
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PeopleCard',
		props: {
			people: {
				type: Object,
				required: true,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../styles/vars.scss";
	
	.people-card {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 10px;
		border: 1px solid $c_yellow;
		border-radius: 10px;
		background-color: transparent;
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
			font-weight: 300;
			font-size: 18px;
			line-height: 1.25;
			color: $c_yellow;
			.bold {
				font-weight: 700;
			}
		}
	}
</style>
<template>
	<div class="home">
		<h1 class="home__title"> Welcome to SWAPI APP!</h1>
		<p class="home__text">This App is developed for fun purpose! It's shows some off my skills in Vue and ES6.</p>
		<p class="home__text">Very often HR asks to show my code example and fortunately or unfortunately most of my most interesting projects are under NDA.</p>
		<p class="home__text">So, I've decided  to make this App on the coffee breaks time little by little, step by step</p>
		<p class="home__text">It's made with help of Vue & Vuex. Myu source code can be found on open Github repository. Here is the <a href="https://github.com/arthurzakharov/start_wars_vue_app" target="_blank">link</a> where you can see how it's made.</p>
		<p class="home__text">All data is fetched form free APIs</p>
		<ul class="home__text">
			<li><a href="https://swapi.co" target="_blank">StarAPI Service</a></li>
			<li><a href="https://starwars-visualguide.com" target="_blank">StarWars API with images</a></li>
		</ul>
		<p class="home__text">Please enjoy this SPA. Hope you will get some nice experience using it. And... See you on the Internet!</p>
	</div>
</template>

<script>
  export default {
    name: 'Home',
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
	
	.home {
		flex-grow: 1;
		padding: 25px 10px;
		&__title {
			margin-bottom: 35px;
			font-size: 2rem;
			color: $c_yellow;
			text-align: center;
		}
		&__text {
			margin-bottom: 15px;
			font-size: 1.25rem;
			line-height: 1.5rem;
			color: $c_yellow;
			text-align: left;
			li {
				list-style-type: disc;
				list-style-position: inside;
				margin-bottom: 5px;
			}
			a {
				color: white;
			}
		}
	}
</style>

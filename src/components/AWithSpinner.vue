<template>
	<div>
		<ALoadSpinner v-if="isLoading" />
		<slot v-else />
	</div>
</template>

<script>
  import ALoadSpinner from "./ALoadSpinner.vue";
  
  export default {
    name: 'AWithSpinner',
    components: {ALoadSpinner},
    props: {
      isLoading: false,
    },
  }
</script>

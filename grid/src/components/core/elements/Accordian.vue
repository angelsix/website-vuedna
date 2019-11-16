<template>
	<div class="accordian">
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.accordian {
	border-radius: 1em;
	overflow: hidden;
	box-shadow: 0 0 0.4em -0.2em rgba(0, 0, 0, 0.5);
}
</style>

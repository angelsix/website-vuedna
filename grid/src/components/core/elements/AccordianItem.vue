<template>
	<div></div>
</template>

<script>
export default {
	name: "AccordianItem",
	components: {},
	props: {
		fullHeight: Boolean
	}
};
</script>

<style lang="scss" scoped>
.fullHeight,
.fullHeight > div {
	height: 100%;
}
.box {
	padding: 1em;

	> div {
		box-shadow: 0 0.1em 1em -0.1em #ccc;
	}
}
</style>

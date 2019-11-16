<template>
	<Section
		wrap
		pad
		class="center-content"
		:style="[
			{ height: height },
			{ backgroundImage: 'url(' + backgroundImage + ')' }
		]"
	>
		<slot></slot>
	</Section>
</template>

<script>
export default {
	props: {
		backgroundImage: String,
		height: String
	}
};
</script>

<style lang="scss" scoped>
// Center content vertically and horizontally
.center-content {
	display: flex;

	// Center horizontal and vertical
	align-items: center;
	justify-content: center;
	text-align: center;

	// Stack downwards
	flex-direction: column;

	// Cover image
	background-size: cover;
}
</style>

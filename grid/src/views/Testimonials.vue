<template>
	<Section wrap pad center class="testimonials">
		<GradientUnderline>
			<h1>{{ testimonialHeaderText }}</h1>
		</GradientUnderline>

		<Spacer double />
	</Section>
</template>

<script>
export default {
	data() {
		return {
			testimonialHeaderText: "Testimonials"
		};
	}
};
</script>

<style lang="scss" scoped></style>

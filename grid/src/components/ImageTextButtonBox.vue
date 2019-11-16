<template>
	<ShadowBox :fullHeight="fullHeight">
		<Section pad class="center-content">
			<a :href="imageUrl"><img class="image" :src="imagePath"/></a>

			<h1>{{ title }}</h1>
			<slot></slot>
			<a href="#">{{ buttonText }}</a>
		</Section>
	</ShadowBox>
</template>

<script>
export default {
	props: {
		imagePath: String,
		imageUrl: String,
		imageWidth: String,
		title: String,
		buttonText: String,
		fullHeight: Boolean
	}
};
</script>

<style lang="scss" scoped>
.image {
	width: 6em;
}
</style>

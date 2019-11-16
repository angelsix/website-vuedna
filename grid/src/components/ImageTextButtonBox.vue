<template>
	<ShadowBox :fullHeight="fullHeight">
		<Section pad class="image-text-button center-content">
			<div class="items">
				<a :href="imageUrl" target="_blank"
					><img class="image" :src="imagePath"
				/></a>

				<h1>{{ title }}</h1>
				<div class="content">
					<slot></slot>
				</div>
				<a v-if="imageUrl" href="#" class="read-more">{{ buttonText }}</a>
			</div>
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

<style lang="scss">
.image-text-button {
	height: 100%;
	.container {
		height: 100%;

		.image {
			width: 6em;
		}

		.read-more {
			padding: 1em 2em;
			color: white;
			background: red;
			border-radius: 0.5em;
			margin: 0 auto;
		}

		.items {
			height: 100%;

			display: flex;
			flex-direction: column;
			.content {
				flex-grow: 1;
			}
		}
	}
}
</style>

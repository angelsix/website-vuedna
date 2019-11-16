<template>
	<Grid no-gutter class="text-image-side-by">
		<Column :column-width="66" :below-laptop-width="100">
			<div class="text">
				<slot></slot>
			</div>
		</Column>

		<Column :column-width="33" :below-laptop-width="100">
			<img :src="imagePath" />
		</Column>
	</Grid>
</template>

<script>
export default {
	props: {
		imagePath: String
	}
};
</script>

<style lang="scss" scoped>
.text {
	margin-right: 2em;
}
</style>

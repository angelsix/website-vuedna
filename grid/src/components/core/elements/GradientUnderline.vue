<template>
	<div class="underline">
		<div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "GradientUnderline"
};
</script>

<style lang="scss" scoped>
@keyframes GradientBlend {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

.underline {
	margin-bottom: 2em;

	> div {
		display: inline-block;

		&::after {
			content: "";
			height: 0.2em;
			display: block;
			background: linear-gradient(to right, #efdb00, #ef0000);
			background-size: 400%;
			animation: GradientBlend 4s ease infinite;
			background-position: 0 1em;
		}
	}
}
</style>

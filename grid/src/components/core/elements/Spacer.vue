<template>
	<div :style="[{ paddingBottom: (double ? '2' : '1') + 'em' }]"></div>
</template>

<script>
export default {
	name: "Spacer",
	props: {
		double: Boolean
	}
};
</script>

<style lang="scss" scoped></style>

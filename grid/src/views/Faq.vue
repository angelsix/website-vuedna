<template>
	<Section vfo wrap pad center class="faq">
		<GradientUnderline>
			<h1>{{ faqHeaderText }}</h1>
		</GradientUnderline>

		<Spacer double />

		<Accordian vmod>
			<p>test1</p>
			<p>test2</p>
			<p>test3</p>
			<p>test4</p>
		</Accordian>
	</Section>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			faqHeaderText: "Frequently Asked Questions"
		};
	}
};
</script>

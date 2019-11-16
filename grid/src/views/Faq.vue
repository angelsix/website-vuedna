<template>
	<Section vfo wrap pad center class="faq">
		<GradientUnderline>
			<h1>{{ faqHeaderText }}</h1>
		</GradientUnderline>

		<Spacer double />

		<Accordian>
			<AccordianItem :title="question1">
				<div class="container" v-html="answer1"></div>
			</AccordianItem>
		</Accordian>
	</Section>
</template>

<script>
export default {
	name: "home",
	data() {
		return {
			faqHeaderText: "Frequently Asked Questions",

			question1: "Q: How often should I have my chimney swept?",
			answer1:
				"<em>Smokeless Coal</em>: At least once a year.<br/>" +
				"<em>Wood</em>: Quarterly when in use.<br/>" +
				"<em>Bitumous Coal</em>: Twice a year.<br/>" +
				"<em>Oil / Gas</em>: Once a year."
		};
	}
};
</script>

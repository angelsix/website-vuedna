<template>
	<Section vfo wrap pad center class="faq">
		<GradientUnderline>
			<h1>{{ faqHeaderText }}</h1>
		</GradientUnderline>

		<Spacer double />

		<Accordian>
			<AccordianItem :title="question1">
				<div class="faq-item container" v-html="answer1"></div>
			</AccordianItem>
			<AccordianItem :title="question2">
				<div class="faq-item container" v-html="answer2"></div>
			</AccordianItem>
			<AccordianItem :title="question3">
				<div class="faq-item container" v-html="answer3"></div>
			</AccordianItem>
			<AccordianItem :title="question4">
				<div class="faq-item container" v-html="answer4"></div>
			</AccordianItem>
			<AccordianItem :title="question5">
				<div class="faq-item container" v-html="answer5"></div>
			</AccordianItem>
			<AccordianItem :title="question6">
				<div class="faq-item container" v-html="answer6"></div>
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
				"<em>Oil / Gas</em>: Once a year.",

			question2: "Q: Do you make a mess?",
			answer2:
				"Modern chimney sweeping generally doesn’t make a mess. On occasion with bird nests, falling masonry or other such blockages you cannot guarantee that there will not be a slight mess as they become more difficult to contain.",
			
			question3: "Q: What's the best wood to burn?",
			answer3:
				"For the best results logs should be well seasoned (20% moisture or less) and not too big (about 5 inches wide). The choice between Hard or Soft wood comes down to how often you want to refuel the fire, overloading a stove can lead to creosote/tar build up. It also wastes fuel and money.",
			
			question4: "Q: I have a woodburning stove with a metal flue all the way to the top. Does this still need to be swept as often?",
			answer4:
				"Yes. Soot still forms inside these flues and there is still a risk of a chimney fire. Blockages can also still occur. See above for sweeping frequency. One of your liners warranty conditions will be sweeping by a member of the Guild of Master Sweeps, APICs or a HETAS approved sweep.",
			
			question5: "Q: How do I prepare for a sweep’s visit?",
			answer5:
				"Don’t light the fire.<br/>" +
				"It is helpful if you ensure a clear route to the fireplace, some items of equipment are big or heavy.<br/>" +
				"Remove ornaments and other items from your fireplace.<br/>" +
				"Ensure that your cats, dogs and other roaming pets are not in the room as soot is harmful to them.<br/>" +
				"Have a power socket available for our vacuum.<br/>" +
				"Emptying the stove or fireplace of ash and clinkers before we start to save time.",
			
			question6: "Q: Why do I need a certificate?",
			answer6:
				"Many insurance companies now require you to prove that you have had your chimney swept. A Guild Certificate will be recognised by your insurance company. They also fulfill a landlords mandatory safety obligations regarding Oil, Gas and Solid Fuel.",
			
		};
	}
};
</script>

<style lang="scss">
.faq-item em {
	text-decoration: underline;
}
</style>

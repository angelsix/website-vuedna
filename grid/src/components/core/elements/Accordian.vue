<script>
export default {
	name: "Accordian",
	render(createElement) {
		// List of all created elements
		var elements = [];

		// Loop each element in the default slot
		this.$slots.default.forEach(element => {
			// Create an item element with the content of the slot inside it
			elements.push(
				createElement(
					// Create a
					"div",
					{
						// Add class accordian
						attrs: { class: "item" }
					},
					// Single element so convert to array
					[element]
				)
			);
		});

		// Create main wrapper div
		return createElement(
			"div",
			{
				// Add class accordian
				attrs: { class: "accordian" }
			},
			// Add all created elements from above
			elements
		);
	},
	props: {}
};
</script>

<style lang="scss" scoped>
.accordian {
	background: red;
}
</style>

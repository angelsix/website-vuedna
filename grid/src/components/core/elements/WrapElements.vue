<script>
// Example of how to read each element from the slot
// and wrap them. For example <WrapElements><p></p><h1></h1></WrapElements>
// would wrap <p></p> and <h1></h1> in <div class="item"></div>
export default {
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
						// Add class item
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
				// Add class wrapped
				attrs: { class: "wrapped" }
			},
			// Add all created elements from above
			elements
		);
	}
};
</script>

<style lang="scss" scoped></style>

<template>
	<Column :fill="spacer" :below-laptop-width="100" class="menu-item">
		<router-link v-on:click.native="closeMenu" v-if="!spacer" :to="url">
			<slot></slot>
		</router-link>
	</Column>
</template>

<script>
export default {
	props: {
		url: String,
		// If the column should act as a spacer to fill all unused space
		spacer: Boolean
	},
	methods: {
		closeMenu: function() {
			window.$closeMenu();
		}
	}
};
</script>

<style lang="scss" scoped>
// For each menu item
.menu-item {
	// Set font size
	a {
		// Smooth transition
		transition: padding 0.7s ease, font-size 0.7s ease, color 0.7s ease;

		// Allow padding
		display: inline-block;

		// Padding for larger click area
		padding: 0.5em 1em;

		// Set font size
		font-size: 1.4em;

		// White text
		color: var(--color-foreground);

		// Highlight on hover
		&:hover {
			color: var(--color-primary);
		}
	}

	// Text centered below laptop
	@include media($breakpoint-below-laptop) {
		text-align: center;
	}
}
</style>

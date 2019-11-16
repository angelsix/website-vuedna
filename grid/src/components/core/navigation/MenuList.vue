<template>
	<!-- Add expanded class when top menu is clicked -->
	<div
		:class="['menu', noRightPadding ? 'no-right-padding' : '']"
		data-topmenu-class="expanded"
	>
		<Grid
			:class="[alignRight ? 'align-right' : '', center ? 'center-content' : '']"
			no-gutter
			no-grow
		>
			<Column fill :below-laptop-width="100">
				<Grid no-gutter no-grow>
					<MenuListItem
						v-bind:key="link.name"
						v-for="link in primaryLinks"
						:url="link.url"
						>{{ link.name }}</MenuListItem
					>
				</Grid>
			</Column>

			<Column class="below-lap-hidden" style="width: 3em;"></Column>

			<Column :below-laptop-width="100">
				<Grid no-gutter no-grow>
					<MenuListItem
						v-bind:key="link.name"
						v-for="link in secondaryLinks"
						:url="link.url"
						>{{ link.name }}</MenuListItem
					>
				</Grid>
			</Column>
		</Grid>
	</div>
</template>

<script>
export default {
	name: "MenuList",
	props: {
		// The items in the menu
		links: Array,
		// If true, right-aligns the columns in this grid
		alignRight: Boolean,
		// If true, removes the padding from the last
		// menu-item in the columns when above tablet
		// TODO: Improve this with detection of "hamburger" mode
		noRightPadding: Boolean,
		// If true, centers the menu items in the grid
		center: Boolean
	},
	computed: {
		primaryLinks() {
			return this.links.filter(link => link.secondary !== true);
		},
		secondaryLinks() {
			return this.links.filter(link => link.secondary === true);
		}
	}
};
</script>

<style lang="scss">
// Menu items
.menu {
	// Transition slide-in smoothly
	transition: left 0.7s ease, opacity 0.7s ease;

	// When menu is below laptop
	@include media($breakpoint-below-laptop) {
		// Go full width
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;

		// Push menu items below actual menu
		padding-top: 6em;

		// Show behind logo and hamburger
		z-index: -1;

		// Color background
		background: var(--color-background);

		// Push
		width: 100%;

		// Hide off to the left by default
		left: -100%;
	}

	// When expanded show all menu items
	&.expanded {
		@include media($breakpoint-below-laptop) {
			// Slide in when expanded
			left: 0;
		}
	}

	// When menu is across top
	@include media($breakpoint-above-tablet) {
		// Remove right padding
		// TODO: Figure out how to pass this down
		//       to the MenuListItem so it removes
		//       its a { padding: 0.5 } from the right
		&.no-right-padding {
			margin-right: -1em;
		}
	}
}
</style>

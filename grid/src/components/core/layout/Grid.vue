<template>
	<div
		:class="[
			'grid',
			columns ? 'c' + columns : '',
			alignRight ? 'align-right' : '',
			wrap ? 'wrap' : '',
			center ? 'center-content' : '',
			noGutter ? 'no-gutter' : '',
			noGrow ? 'no-grow' : ''
		]"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		// If true, right-aligns the columns in this grid
		alignRight: Boolean,
		// If columns should wrap to new line if content cannot fit
		wrap: Boolean,
		// Number of fixed columns that this grid should layout columns in
		columns: Number,
		// If we should center the columns
		// (so fixed width columns that don't take up all the space center)
		center: Boolean,
		// To remove gutters between columns
		noGutter: Boolean,
		// If no grow then columns don't size to fill the width evenly
		// and instead just take up as much room as they need
		// Use in combination with columns fill property
		noGrow: Boolean
	}
};
</script>

<style lang="scss">
// The size of grid gutter
$grid-gutter: 1em;
$grid-gutter-small: 0.8em;

.grid {
	// Flex grid
	display: flex;

	// Wrap columns only if content cannot fit
	flex-wrap: wrap;

	// Alignment for all cells
	&.align-top {
		align-items: flex-start;
	}
	&.align-middle {
		align-items: center;
	}
	&.align-bottom {
		align-items: flex-end;
	}

	// Horizontal alignment
	&.align-center {
		justify-content: center;
	}
	&.align-right {
		justify-content: flex-end;
	}

	// Gutters (and bottom margin so stacked grids space with gutters on bottom)
	// NOTE: This value must match column padding gutter value
	margin-right: 0;
	margin-left: -#{$grid-gutter};
	margin-top: -#{$grid-gutter};

	&:not(:last-child) {
		margin-bottom: #{$grid-gutter};
	}

	@include media($breakpoint-below-laptop) {
		margin-right: 0;
		margin-left: -#{$grid-gutter-small};
		margin-top: -#{$grid-gutter-small};

		&:not(:last-child) {
			margin-bottom: #{$grid-gutter-small};
		}
	}

	&.no-gutter {
		margin: 0;

		> .col {
			padding: 0;
		}
	}

	&.wrap > .col {
		overflow: initial;
	}

	&:not(.no-grow) > .col,
	> .col.fill {
		// Default to all columns split equal width
		flex: 1;
	}

	> .col {
		// Hide content that overflows by default
		// (so columns don't wrap to new lines)
		overflow: hidden;

		// Gutters
		padding: #{$grid-gutter} 0 0 #{$grid-gutter};

		@include media($breakpoint-below-laptop) {
			padding: #{$grid-gutter-small} 0 0 #{$grid-gutter-small};
		}

		// Alignment per cell
		&.align-top {
			align-self: flex-start;
		}
		&.align-middle {
			align-self: center;
		}
		&.align-bottom {
			align-self: flex-end;
		}
	}

	// If we want to force columns to always stay on same line if content cannot fit
	&.no-wrap > .col {
		overflow: hidden;
	}
}

// Some set width sizes for simplicity
@mixin grid-columns($prefix: "c") {
	.grid.#{$prefix}1 > .col {
		flex: 0 0 100%;
	}
	.grid.#{$prefix}2 > .col {
		flex: 0 0 50%;
	}
	.grid.#{$prefix}3 > .col {
		flex: 0 0 calc(100% / 3);
	}
	.grid.#{$prefix}4 > .col {
		flex: 0 0 25%;
	}
	.grid.#{$prefix}5 > .col {
		flex: 0 0 20%;
	}
	.grid.#{$prefix}6 > .col {
		flex: 0 0 calc(100% / 6);
	}
	.grid.#{$prefix}7 > .col {
		flex: 0 0 calc(100% / 7);
	}
	.grid.#{$prefix}8 > .col {
		flex: 0 0 12.5%;
	}
	.grid.#{$prefix}9 > .col {
		flex: 0 0 calc(100% / 9);
	}
	.grid.#{$prefix}10 > .col {
		flex: 0 0 10%;
	}
	.grid.#{$prefix}11 > .col {
		flex: 0 0 calc(100% / 11);
	}
	.grid.#{$prefix}12 > .col {
		flex: 0 0 calc(100% / 12);
	}
}

// Some set width sizes for simplicity
@mixin grid-widths($prefix: "w") {
	.grid > .col.#{$prefix}100 {
		flex: 0 0 100%;
	}
	.grid > .col.#{$prefix}90 {
		flex: 0 0 90%;
	}
	.grid > .col.#{$prefix}80 {
		flex: 0 0 80%;
	}
	.grid > .col.#{$prefix}75 {
		flex: 0 0 75%;
	}
	.grid > .col.#{$prefix}70 {
		flex: 0 0 70%;
	}
	.grid > .col.#{$prefix}66 {
		flex: 0 0 66%;
	}
	.grid > .col.#{$prefix}60 {
		flex: 0 0 60%;
	}
	.grid > .col.#{$prefix}50 {
		flex: 0 0 50%;
	}
	.grid > .col.#{$prefix}40 {
		flex: 0 0 40%;
	}
	.grid > .col.#{$prefix}33 {
		flex: 0 0 33%;
	}
	.grid > .col.#{$prefix}30 {
		flex: 0 0 30%;
	}
	.grid > .col.#{$prefix}25 {
		flex: 0 0 25%;
	}
	.grid > .col.#{$prefix}20 {
		flex: 0 0 20%;
	}
	.grid > .col.#{$prefix}10 {
		flex: 0 0 10%;
	}
}

// Include non-responsive grid widths
@include grid-columns();
@include grid-widths();

// For each breakpoint...
@each $breakpoint in $breakpoints {
	// Get name of each breakpoint
	$name: nth($breakpoint, 1);

	// Add media query wrapper for each breakpoint
	@include media($name) {
		@include grid-widths("#{$name}-");
		@include grid-columns("#{$name}-");
	}
}
</style>

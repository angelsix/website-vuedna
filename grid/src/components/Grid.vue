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
  name: "Grid",
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

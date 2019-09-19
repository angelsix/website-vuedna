<template>
  <div
    :class="[
      'col',
      {
        'desk-hidden': desktopHidden,
        'lap-hidden': laptopHidden,
        'tab-hidden': tabletHidden,
        'mob-hidden': mobileHidden,
      },
      columnWidth ? 'w' + columnWidth : '',
      desktop ? 'lap-hidden tab-hidden mob-hidden' : '',
      laptop ? 'desk-hidden tab-hidden mob-hidden' : '',
      tablet ? 'desk-hidden lap-hidden mob-hidden' : '',
      mobile ? 'desk-hidden lap-hidden tab-hidden' : '',
      belowDesktopWidth ? 'below-desk-' + belowDesktopWidth : '',
      belowLaptopWidth ? 'below-lap-' + belowLaptopWidth : ''
    ]"
  >
    <div class="demo-col">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Column",
  props: {
    desktopHidden: Boolean,
    laptopHidden: Boolean,
    tabletHidden: Boolean,
    mobileHidden: Boolean,

    // Visible only on these breakpoints
    desktop: Boolean,
    laptop: Boolean,
    tablet: Boolean,
    mobile: Boolean,

    // Below a certain breakpoint, set the width
    belowDesktopWidth: Number,
    belowLaptopWidth: Number,

    // Set column width directly to any set size
    // 10 20 25 30 33 40 50 60 66 70 75 80 90 100
    columnWidth: String
  }
};
</script>

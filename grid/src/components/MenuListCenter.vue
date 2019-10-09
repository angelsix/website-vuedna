<template>
  <!-- Add expanded class when top menu is clicked -->
  <div class="menu" data-topmenu-class="expanded">
    <Grid class="center-content" no-gutter no-grow>
      <Column fill :below-laptop-width="100">
        <Grid no-gutter no-grow align-right>
          <slot name="left"></slot>
        </Grid>
      </Column>

      <Column class="below-lap-hidden" style="width: 3em;"></Column>

      <Column fill :below-laptop-width="100">
        <Grid no-gutter no-grow>
          <slot name="right"></slot>
        </Grid>
      </Column>
    </Grid>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "MenuListCenter",
  props: {},
  components: { Grid, Column, MenuListItem }
};
</script>

<style lang="scss">
// Menu items
.menu {
  // Transition slide-in smoothly
  transition: left $transition-normal, opacity $transition-normal;

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
    background: $color-background;

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

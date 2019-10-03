<template>
  <!-- Add expanded class when top menu is clicked -->
  <div class="menu" data-topmenu-class="expanded">
    <Grid no-gutter no-grow>
      <slot>
        <MenuListItem url="/">Home</MenuListItem>
      </slot>
    </Grid>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "MenuList",
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
    min-width: 100%;

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
}
</style>

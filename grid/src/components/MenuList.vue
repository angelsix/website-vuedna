<template>
  <!-- Add expanded class when top menu is clicked -->
  <ul class="menu" data-topmenu-class="expanded">
    <slot>
      <MenuListItem url="/">Home</MenuListItem>
    </slot>
  </ul>
</template>

<script>
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "MenuList",
  components: [MenuListItem]
};
</script>

<style lang="scss">
// Menu items
ul.menu {
  // Transition slide-in smoothly
  transition: left $transition-normal, opacity $transition-normal;

  // Make horizontal menu
  @extend .horizontal-menu;

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

  // For each menu item
  > li {
    // Display as list item
    display: list-item;

    // Float left
    float: left;

    // Set font size
    > a {
      // Smooth transition
      transition: padding $transition-normal, font-size $transition-normal,
        color $transition-normal;

      // Item padding
      padding: 0.5em 1em;

      // Set font size
      font-size: 1.5em;
    }

    // When menu is across top
    @include media($breakpoint-above-tablet) {
      // Remove right padding
      &:last-child > a {
        padding-right: 0;
      }
    }

    // Hide below laptop
    @include media($breakpoint-below-laptop) {
      float: none;
      text-align: center;
    }
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

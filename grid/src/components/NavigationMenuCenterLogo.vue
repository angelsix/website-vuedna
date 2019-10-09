<template>
  <nav class="navigation-menu-center-logo" data-scrolldown-class="reduced">
    <Section wrap>
      <div class="menu-logo" data-topmenu-class="expanded">
        <router-link to="/">
          <img :src="imagePath" />
        </router-link>
      </div>

      <Grid no-gutter no-grow>
        <Column class="menu-slot" fill>
          <MenuListCenter>
            <slot name="left" slot="left"></slot>
            <slot name="right" slot="right"></slot>
          </MenuListCenter>
        </Column>

        <Column class="menu-icon">
          <a ref="expand" href="#" data-toggle-class="expanded">
            <svg
              height="32px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 32 32"
              width="32px"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <path
                d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"
              />
            </svg>
          </a>
        </Column>
      </Grid>
    </Section>
  </nav>
</template>

<script>
import DnaCore from "@/modules/dna.core.js";
import DnaScroll from "@/modules/dna.scroll.core.js";

import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import Section from "@/components/Section.vue";
import MenuListCenter from "@/components/MenuListCenter.vue";

export default {
  name: "NavigationMenuCenterLogo",
  components: {
    Grid,
    Column,
    Section,
    MenuListCenter
  },
  props: {
    imagePath: String
  },
  mounted: function() {
    window.$closeMenu = () => {
      // Add the desired class to all top menus
      var topMenus = this.$el.querySelectorAll("[data-topmenu-class]");

      // For each menu...
      ForEach(topMenus, function(menu) {
        // Get the value of the data-topmenu-class attribute
        var menuClass = menu.getAttribute("data-topmenu-class");

        // Add/remove class
        menu.classList.remove(menuClass);
      });
    };

    // Listen on the click event
    this.$refs.expand.addEventListener("click", e => {
      // Cancel navigation
      e.preventDefault();

      // Add the desired class to all top menus
      var topMenus = this.$el.querySelectorAll("[data-topmenu-class]");

      // For each menu...
      ForEach(topMenus, function(menu) {
        // Get the value of the data-topmenu-class attribute
        var menuClass = menu.getAttribute("data-topmenu-class");

        // Add/remove class
        menu.classList.toggle(menuClass);
      });
    });
  }
};
</script>

<style lang="scss" scoped>
$menu-height: 4em;
$menu-height-small: 3em;
$image-height: 10em;
$image-height-small: 2.5em;

.navigation-menu-center-logo {
  background: $color-royal-sky;

  // Keep above everything
  z-index: 1000;

  // Padding
  padding: 1em 2em;

  // Fixed position
  position: sticky;
  top: 0;

  // Width 100% due to fixed removing it
  width: 100%;

  // Smooth animations
  transition: padding $transition-normal, background-color $transition-normal,
    color $transition-normal, font-size $transition-normal;

  // Reduce size of menu logo when scrolled or slide out menu
  &.reduced .menu-logo a,
  .menu-logo.expanded a {
    transform: scale(0.35, 0.35);
  }

  .menu-icon {
    // Hide by default
    @extend .hidden;

    // Show when below laptop
    @extend .#{$breakpoint-below-laptop}-show-block;

    // Make sure SVG don't sit on text-baseline leaving extra space below
    svg {
      display: block;
    }

    // Link
    a {
      // Smooth transitions
      transition: fill $transition-normal, transform $transition-normal;

      // Padding for clickable area
      padding: 0.5em;

      // Icon color
      fill: $color-foreground;

      // Block so its scalable
      display: block;

      // When expanded go main bright color
      // On hover go main bright color
      &.expanded,
      &:hover {
        // Main bright color
        fill: $color-highlight;

        // Grow a bit
        // NOTE: Won't work on opera but its only a nice to have
        //       effect so doesn't matter
        transform-origin: 50% 50%;
        transform: scale(1.3, 1.3);
      }
    }
  }

  // Menu logo
  .menu-logo {
    // Float menu logo outside of flow so it can hang out
    position: absolute;

    // Stay at top
    top: 0;
    left: 0;
    right: 0;
    height: 1px;

    // Center logo
    text-align: center;

    a {
      // Padd logo all around
      padding: 1em;
      display: inline-block;

      // Smooth transitions
      transition: transform $transition-normal;

      // Scale from top
      transform-origin: 50% 1em;

      // Big image that overflows
      height: $image-height;

      img {
        height: 100%;
        width: auto;
      }
    }
  }

  // Make menu text items smaller
  .menu-slot {
    font-size: 0.7em;
  }
}
</style>

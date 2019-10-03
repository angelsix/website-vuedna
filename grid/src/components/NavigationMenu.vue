<template>
  <nav class="navigation-menu" data-scrolldown-class="reduced">
    <Section wrap>
      <Grid no-gutter center no-grow>
        <Column class="menu-logo">
          <router-link to="/">
            <img :src="imagePath" />
          </router-link>
        </Column>

        <Column fill>
          <slot></slot>
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

export default {
  name: "NavigationMenu",
  components: {
    Grid,
    Column,
    Section
  },
  props: {
    imagePath: String
  },
  mounted: function() {
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

.navigation-menu {
  // Keep above everything
  z-index: 1000;

  // Padding
  padding: 0 2em;

  // Fixed position
  position: sticky;
  top: 0;

  // Width 100% due to fixed removing it
  width: 100%;

  // Smooth animations
  transition: padding $transition-normal, background-color $transition-normal,
    color $transition-normal, font-size $transition-normal;

  // Reduce size of menu
  &.reduced {
    // Main background color
    background: $color-background;

    // Smaller font
    //font-size: 0.9em;

    padding: 0em 2em;

    .menu-logo {
      img {
        height: $menu-height-small;
      }
    }
  }

  // Smaller when screen gets smaller padding
  @include media($breakpoint-mobile) {
    padding: 0.8em 1em;
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

  .spacer {
    // Fill remaining menu space to push menu items to right
    flex-grow: 1;
  }

  // Menu logo
  .menu-logo {
    a {
      // Pad nothing on left (already margin from section)
      padding: 1em;
      padding-left: 0;
      display: block;

      img {
        // Smooth transitions
        transition: height $transition-normal;

        // Nice image size about 4 times that of text
        height: $menu-height;
        width: auto;
      }
    }
  }
}
</style>

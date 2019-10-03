<template>
  <nav class="navigation-menu" data-scrolldown-class="reduced">
    <Section wrap>
      <div class="navigation-content">
        <div class="menu-logo">
          <img src="/assets/images/logo.png" />
        </div>

        <div class="menu-icon">
          <a href="#topmenu" data-toggle-class="expanded">
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
        </div>

        <!-- Add expanded class when top menu is clicked -->
        <ul data-topmenu-class="expanded">
          <li>
            <router-link to="/">Home</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </div>

      <slot></slot>
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
    rows: Number
  },
  mounted: function() {
    // Find all elements that have a href of #topmenu
    var menuExpanders = document.querySelectorAll("[href='#topmenu']");

    // Loop each menu expander
    ForEach(menuExpanders, item => {
      // Listen on the click event
      item.addEventListener("click", e => {
        // Cancel navigation
        e.preventDefault();

        // Add the desired class to all top menus
        var topMenus = document.querySelectorAll("[data-topmenu-class]");

        // For each menu...
        ForEach(topMenus, function(menu) {
          // Get the value of the data-topmenu-class attribute
          var menuClass = menu.getAttribute("data-topmenu-class");

          // Add/remove class
          menu.classList.toggle(menuClass);
        });
      });
    });
  }
};
</script>

<style lang="scss" scoped>
$menu-height: 4em;

.navigation-menu {
  // Keep above everything
  z-index: 1000;

  // Padding
  padding-top: 1em;
  padding-bottom: 1em;

  background: rgba(0, 0, 0, 0.2);

  // Smooth animations
  transition: padding $transition-normal, color $transition-normal,
    background-color $transition-normal;

  // Fixed position
  position: sticky;
  top: 0;

  // Width 100% due to fixed removing it
  width: 100%;

  // Navigation content
  .navigation-content {
    // Flex grid
    display: flex;

    // Allow overflowing to new rows
    // so our mobile menu can go to new lines
    flex-wrap: wrap;

    // Stack items horizontally
    flex-direction: row;

    // Vertical align center
    align-items: center;

    // Pad the sides
    padding: 0 2em;

    // Menu logo
    .menu-logo {
      // Smooth transitions
      transition: padding $transition-normal;

      // Fill remaining menu space to push menu items to right
      flex-grow: 1;

      // Vertical align inner content
      display: flex;
      align-items: center;

      img {
        // Smooth transitions
        transition: height $transition-normal;

        // Make image inline (as it can be inside an anchor) and vertical aligned
        // to remove the baseline offset and correctly align vertically
        display: inline-block;
        vertical-align: middle;

        // Nice image size about 4 times that of text
        height: $menu-height;
        width: auto;
      }
    }

    // Menu Icon when < laptop
    > .menu-icon {
      // Hide by default
      @extend .hidden;

      // Alternative link color
      > a {
        // Smooth transitions
        transition: padding $transition-normal, transform $transition-normal,
          fill $transition-normal;

        fill: $color-foreground;

        // Inline block so its scalable
        display: inline-block;

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

      // Show when below laptop
      @extend .#{$breakpoint-below-laptop}-show-block;

      // Nice big font
      font-size: $font-larger;
    }

    // Menu items
    > ul {
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
        padding-top: $menu-height + 2em;

        // Show behind logo and hamburger
        z-index: -1;

        // Color background
        background: $color1;

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

        &:last-child > a {
          padding-right: 0;
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
  }

  // Reduce size of menu
  &.reduced {
    // Main background color
    background: $color1;

    // Reduce padding
    //padding: 0 0.8em;

    // Smaller font
    font-size: 0.9em;

    > div {
      // The logo
      > .menu-logo {
        // Add item padding just left/right for icon
        padding: 0 0.8em;

        // Image
        img {
          // Make image smaller
          height: 3em;
        }
      }
    }

    @include media($breakpoint-above-tablet) {
      > div {
        > .menu-icon > a {
          // Reduced item padding
          padding: 0.5em;
        }

        > ul > li > a {
          // Reduced font size
          font-size: 1.2em;

          // Reduced item padding
          padding: 0.8em;
        }
      }
    }
  }
}
</style>

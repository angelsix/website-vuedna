<template>
  <div id="app" data-theme="default">
    <Navigation :content="navigation">
      <template v-slot:left>
        <p class="logo-text">A Chimney Sweep</p>
      </template>
      <template v-slot:right>
        test
      </template>
    </Navigation>

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationMenu.vue";
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "app",
  components: {
    Navigation,
    MenuListItem
  },
  data() {
    return {
      navigation: {
        backgroundColor: "white",
        image: "./assets/images/logo-chimney.png",
        links: [
          { name: "Home", url: "/" },
          { name: "About", url: "/about", /* secondary: true */ },
          { name: "FAQ", url: "/faq" },
          { name: "Testimonials", url: "/testimonials" },
        ]
      }
    }
  },
  mounted: function() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
}

.logo-text
{
  font-family: 'Dancing Script', cursive;
  margin: 0;
  color: var(--color-primary);
  font-size: 2em;
  display: inline-block;
}

</style>
 
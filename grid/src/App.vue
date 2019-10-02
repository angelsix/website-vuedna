<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view />
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationMenu.vue";

export default {
  name: "app",
  components: { Navigation },
  mounted: function() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
}
</style>
 
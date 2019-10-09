<template>
  <div id="app">
    <Navigation image-path="/assets/images/royal-logo.png">
      <template v-slot:left>
        <MenuListItem url="/">Home</MenuListItem>
        <MenuListItem url="/about">About</MenuListItem>
        <MenuListItem url="/jimmy">Jimmys</MenuListItem>
        <MenuListItem url="/events">Events</MenuListItem>
      </template>
      <template v-slot:right>
        <MenuListItem url="/gallery">Gallery</MenuListItem>
        <MenuListItem url="/association">Association Standard</MenuListItem>
        <MenuListItem url="/contact">Contact</MenuListItem>
      </template>
    </Navigation>

    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationMenuCenterLogo.vue";
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "app",
  components: {
    Navigation,
    MenuListItem
  },
  mounted: function() {}
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600,700&display=swap");

body {
  font-family: "Quicksand", sans-serif;
}
</style>
 
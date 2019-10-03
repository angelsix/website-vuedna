<template>
  <div id="app">
    <Navigation image-path="/assets/images/logo.png">
      <MenuList>
        <MenuListItem url="/">Home</MenuListItem>
        <MenuListItem url="/">About</MenuListItem>
        <MenuListItem url="/">Services</MenuListItem>
        <MenuListItem spacer></MenuListItem>
        <MenuListItem url="/">Contact</MenuListItem>
      </MenuList>
    </Navigation>
    <router-view />
  </div>
</template>

<script>
import Navigation from "@/components/NavigationMenu.vue";
import MenuList from "@/components/MenuList.vue";
import MenuListItem from "@/components/MenuListItem.vue";

export default {
  name: "app",
  components: {
    Navigation,
    MenuList,
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
 
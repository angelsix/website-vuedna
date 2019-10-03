<template>
  <div id="app">
    <Navigation image-path="/assets/images/logo.png">
      <MenuList>
        <MenuListItem url="/">Home</MenuListItem>
        <MenuListItem url="/nav">Nav</MenuListItem>
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
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";

export default {
  name: "app",
  components: {
    Navigation,
    MenuList,
    MenuListItem,
    Grid,
    Column
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
 
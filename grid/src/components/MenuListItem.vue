<template>
  <li>
    <router-link :to="url">
      <slot></slot>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "MenuListItem",
  props: {
    url: String
  }
};
</script>

<template>
  <div v-if="pad" class="container">
    <div v-if="wrap" class="wrapper">
      <slot></slot>
    </div>
  </div>
  <div v-else-if="wrap" class="wrapper">
    <slot></slot>
  </div>
  <div v-else>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    wrap: Boolean,
    pad: Boolean
  }
};
</script>

<style lang="scss" scoped>
</style>

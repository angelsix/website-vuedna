<template>
  <div :class="[
      'grid',
      rows ? 'r' + rows : ''
    ]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    rows: Number
  }
};
</script>

<style lang="scss" scoped>
</style>

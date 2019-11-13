<template>
  <div :class="[ center ? 'center-text' : '' ]">
    <div v-if="pad" class="container">
      <div v-if="wrap" class="wrapper">
        <slot></slot>
      </div>
      <slot v-else></slot>
    </div>
    <div v-else-if="wrap" class="wrapper">
      <slot></slot>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    wrap: Boolean,
    pad: Boolean,
    center: Boolean
  }
};
</script>

<style lang="scss">

//
//   Container
//
.container {
  // Large padding on large screens
  padding: 2em;
  
  // Smaller when screen gets smaller
  @include media($breakpoint-mobile) {
    padding: 1.5em 1em;
  }
}

.wrapper {
  max-width: var(--site-max-width);
  margin-left: auto;
  margin-right: auto;
}

</style>

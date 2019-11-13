<template>
    <div class="box"><slot></slot></div>
</template>

<script>
export default {
  name: "ShadowBox",
  components: {
  },
  props: {
  }
};
</script>

<style lang="scss" scoped>

.box
{
  margin: 1em;
    box-shadow: 0 0.1em 1em -0.1em #ccc;
}

</style>

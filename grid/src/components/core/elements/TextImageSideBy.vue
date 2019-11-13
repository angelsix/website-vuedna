<template>
    <Grid no-gutter>
      <Column :column-width="66" :below-laptop-width="100">
        <div  class="text">
            <slot></slot>
        </div>
      </Column>

      <Column :column-width="33" :below-laptop-width="100">
        <img :src="imagePath" />
      </Column>

    </Grid>
</template>

<script>
import Grid from "@/components/core/layout/Grid.vue";
import Column from "@/components/core/layout/Column.vue";
import Section from "@/components/core/blocks/Section.vue";

export default {
  name: "TextImageSideBy",
  components: {
      Grid,
      Column,
      Section
  },
  props: {
      imagePath: String
  }
};
</script>

<style lang="scss" scoped>

.text
{
    margin-right: 2em;
}

</style>

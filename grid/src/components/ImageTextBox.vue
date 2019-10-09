<template>
  <div>
    <Grid center no-grow>
      <Column>
        <img :src="{ imagePath }" />
      </Column>
      <Column fill>
        <slot></slot>
      </Column>
    </Grid>
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";

export default {
  name: "ImageTextBox",
  props: {
    imagePath: String
  },
  components: { Grid, Column }
};
</script>

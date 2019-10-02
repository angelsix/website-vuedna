<template>
  <div class="home">
    <h1>Dna Fabric Grid</h1>
    <p>
      By default, a grid with columns will have all column widths split
      equally. If content cannot fit in a column it will overflow to
      another line.
    </p>

    <p>
      This grid has
      <code>&lt;Grid rows=5&gt;</code>
    </p>
    <Grid :rows="5">
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column>Column</Column>
    </Grid>

    <p>Here are some basic usage examples</p>

    <Grid>
      <Column>Column</Column>
      <Column>Column</Column>
      <Column desktop-hidden>desktop-hidden</Column>
      <Column desktop-hidden>desktop-hidden</Column>
    </Grid>

    <Grid>
      <Column :below-desktop-width="100">below-desktop-width=100</Column>
      <Column :below-desktop-width="100">below-desktop-width=100</Column>
      <Column :below-laptop-width="100">below-desktop-width=100</Column>
      <Column :below-laptop-width="100">below-desktop-width=100</Column>
    </Grid>

    <Grid>
      <Column desktop>Desktop only</Column>
      <Column desktop>Desktop only</Column>
      <Column laptop>Laptop only</Column>
      <Column laptop>Laptop only</Column>
      <Column tablet>Tablet only</Column>
      <Column tablet>Tablet only</Column>
      <Column mobile>Mobile only</Column>
      <Column mobile>Mobile only</Column>
    </Grid>

    <h1>Basic Grid</h1>
    <p>
      Showing off the available grid column sizes, with forced no-wrap so
      content inside will hide if too long
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";

export default {
  name: "home",
  components: {
    Grid,
    Column
  }
};
</script>

<style lang="scss" scoped>
.home {
  padding: 2em;
}

.home > img {
  width: auto;
}

// Demo column styles
.demo-col,
.demo-col-medium,
.demo-col-big {
  border: 1px dashed purple;
  text-align: center;
  padding: $spacing-normal;
  display: block;
}

.demo-col-medium {
  padding: $spacing-large $spacing-normal;
  border-color: orange;
}
.demo-col-big {
  padding: $spacing-largest $spacing-normal;
  border-color: yellow;
}
</style>

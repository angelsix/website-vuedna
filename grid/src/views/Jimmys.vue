<template>
  <Section wrap pad class="about debug">
    <h1>58 Signal Squadron Association</h1>

    <Grid>
      <Column :columnWidth="50" :belowLaptopWidth="100">
        <span class="box">
          Welcome to Jimmys Bar. Named after the well known nickname for the Royal Signals cap badge 'Jimmy'.
          Here is where our members come to sit and relax and enjoy a drink and retell stories of our time together.
        </span>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/Jimmys1.jpg"></ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/Jimmys2.jpg"></ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/Jimmys3.jpg"></ImageTextBox>
      </Column>
    </Grid>
  </Section>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import Section from "@/components/Section.vue";
import ImageTextBox from "@/components/ImageTextBox.vue";

import DnaScrollDown from "@/modules/dna.scrolldown.js";

export default {
  name: "about",
  components: {
    Grid,
    Column,
    Section,
    ImageTextBox
  },
  mounted: () => {
    DnaScrollDown.Hook(50);
  },
  beforeDestroy: () => {
    DnaScrollDown.Unhook();
  }
};
</script>

<style lang="scss" scoped>
.box {
  border: 1px solid black;
  padding: 1em;
}
</style>

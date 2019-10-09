<template>
  <Section wrap pad class="about">
    <h1>58 Signal Squadron Association</h1>

    <Grid id="links">
      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox
          class="box"
          imagePath="/assets/images/scroll-logo.png"
        >Our Constitution and Bye-Laws</ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/seal.png">Our Mission Statement</ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/members-logo.png">Our Committee Members</ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/new-member-logo.png">Become a Member</ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox
          class="box"
          imagePath="/assets/images/AGM-logo.png"
        >Our next Annual General Meeting (AGM)</ImageTextBox>
      </Column>

      <Column :columnWidth="50" :belowLaptopWidth="100">
        <ImageTextBox class="box" imagePath="/assets/images/shopping-cart.png">Association Shop</ImageTextBox>
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

<style lang="scss">
#links {
  img {
    width: auto;
    height: 6em;
    padding-right: 1em;
  }
}
</style>
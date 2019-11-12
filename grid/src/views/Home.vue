
<template>
  <Section class="home">
    <BlockCentered :background-image="whichBackgroundUrl" height="90vh">
      <div class="which">
        <img :src="whichLogoUrl" />
        <h1>{{ whichBlurb }}</h1>
      </div>
    </BlockCentered>

    <iframe class="whichWidget" :src="whichReviewsUrl"></iframe>

  </Section>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import Section from "@/components/Section.vue";
import BlockCentered from "@/components/blocks/BlockCentered.vue";
import DnaScrollDown from "@/modules/dna.scrolldown.js";

export default {
  name: "home",
  components: {
    Grid,
    Column,
    Section,
    BlockCentered
  },
  data() {
    return {
      whichBackgroundUrl: "assets/images/chimney-smoke.jpg",
      whichLogoUrl: "assets/images/which.png",
      whichReviewsUrl: "https://trustedtraders.which.co.uk/widgets/businesses/a-chimney-sweep/reviews",
      whichBlurb: "An award winning, professional and comprehensive chimney sweeper covering the Midlands and Cheshire.",

    }
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
.which
{
  color: white;

  img { width: 15em;}
}

.whichWidget
{
  border: 0;
  height: 600px; 
  width: 100%;

  @media only screen and (max-width: 789px)
  {
    height: 1000px;
  }
}
</style>
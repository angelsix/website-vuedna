
<template>
  <Section class="home">
    <BlockCentered :background-image="whichBackgroundUrl" height="90vh">
      <div class="which">
        <img :src="whichLogoUrl" />
        <h1>{{ whichBlurb }}</h1>
      </div>
    </BlockCentered>

    <Section wrap pad center>

      <GradientUnderline>
        <h1>{{servicesHeader}}</h1>
      </GradientUnderline>

      <Grid  no-gutter>
        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox :image-path="guildImage" :image-url="guildUrl" :title="guildTitle" button-text="Read More">
            <p>{{guildText}}</p>
          </ImageTextButtonBox>
        </Column>

      </Grid>

    </Section>

    <iframe class="whichWidget" :src="whichReviewsUrl"></iframe>

  </Section>
</template>

<script>
// @ is an alias to /src
import DnaScrollDown from "@/modules/dna.scrolldown.js";

import Grid from "@/components/core/layout/Grid.vue";
import Column from "@/components/core/layout/Column.vue";
import Section from "@/components/core/blocks/Section.vue";
import BlockCentered from "@/components/core/blocks/BlockCentered.vue";
import GradientUnderline from "@/components/core/elements/GradientUnderline.vue";
import ShadowBox from "@/components/core/elements/ShadowBox.vue";
import ImageTextButtonBox from "@/components/ImageTextButtonBox.vue";

export default {
  name: "home",
  components: {
    Grid,
    Column,
    Section,
    BlockCentered,
    GradientUnderline,
    ShadowBox,
    ImageTextButtonBox
  },
  data() {
    return {
      whichBackgroundUrl: "assets/images/chimney-smoke.jpg",
      whichLogoUrl: "assets/images/which.png",
      whichReviewsUrl: "https://trustedtraders.which.co.uk/widgets/businesses/a-chimney-sweep/reviews",
      whichBlurb: "An award winning, professional and comprehensive chimney sweeper covering the Midlands and Cheshire.",
      
      servicesHeader: "Our Services",
      
      guildImage: "/assets/images/home-guild-logo.png",
      guildUrl: "https://www.guildofmasterchimneysweeps.co.uk/",
      guildTitle: "Friendly and Professional Staff",
      guildText: "Modern chimney sweeping is a clean process utlising specialist equipment, this helps to keep your flue and home tidy whilst keeping you safe from the dangers of Carbon Monoxide and uncontrolled fires.",

      
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

<style lang="scss">
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
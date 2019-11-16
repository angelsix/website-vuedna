
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
          <ImageTextButtonBox fullHeight :image-path="guildImage" :image-url="guildUrl" :title="guildTitle" button-text="Read More">
            <p>{{guildText}}</p>
          </ImageTextButtonBox>
        </Column>

        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox fullHeight :image-path="hetasImage" :image-url="hetasUrl" :title="hetasTitle" button-text="Read More">
            <p>{{hetasText}}</p>
          </ImageTextButtonBox>
        </Column>

        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox fullHeight :image-path="sweepImage" :title="sweepTitle">
            <p>{{sweepText}}</p>
          </ImageTextButtonBox>
        </Column>

        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox fullHeight :image-path="birdImage" :title="birdTitle">
            <p>{{birdText}}</p>
          </ImageTextButtonBox>
        </Column>

        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox fullHeight :image-path="cogImage" :image-url="cogUrl" :title="cogTitle">
            <p>{{cogText}}</p>
          </ImageTextButtonBox>
        </Column>

        <Column :column-width="33" :below-laptop-width="100">
          <ImageTextButtonBox fullHeight :image-path="questionImage" :title="questionTitle" button-text="Read More">
            <p>{{questionText}}</p>
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

      hetasImage: "/assets/images/home-hetas-logo.png",
      hetasUrl: "https://www.hetas.co.uk//",
      hetasTitle: "HETAS Approved",
      hetasText: "To become a HETAS Approved Sweep Simon completed the H003 Course. This is the same course that the installers complete. Having inspected thousands of installations I can say I probably know the regulations and standards better than most installers!",

      sweepImage: "/assets/images/home-chimney-logo.png",
      sweepTitle: "Traditional and Power Sweeping",
      sweepText: "We offer a wide range of sweeping services to suit your appliances and systems utilising traditional sweeping methods and power systems.",

      birdImage: "/assets/images/home-bird-logo.png",
      birdTitle: "Bird Nest and Creosote Removal",
      birdText: "Many things can restrict your chimney and flue birds nests and creosote are two of the typical things we find. Failure to properly remove obstructions can be dangerous for you and your property. If you suspect a bird has nested in your chimney please call us and we will safely remove it for you.",

      cogImage: "/assets/images/home-cog-logo.png",
      cogTitle: "Reliable Servicing of multi-fuel stoves and ranges",
      cogText: "We inspect, service and test multi-fuel stoves and ranges. We are able to identify many faults and offer the best course in order to get your appliances back into safe working order.",

      questionImage: "/assets/images/home-question-logo.png",
      questionTitle: "Which Trusted Trader",
      questionText: "As a Which? Trusted trader, our business has been through a rigorous application process so you can be confident you are hiring a reputable trader.",

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
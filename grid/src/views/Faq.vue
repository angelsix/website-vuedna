
<template>
  <Section wrap pad center class="faq">
    <GradientUnderline>
      <h1>{{faqHeaderText}}</h1>
    </GradientUnderline>

    <Spacer double />

  </Section>
</template>

<script>
// @ is an alias to /src
import DnaScrollDown from "@/modules/dna.scrolldown.js";

import Grid from "@/components/core/layout/Grid.vue";
import Column from "@/components/core/layout/Column.vue";
import Section from "@/components/core/blocks/Section.vue";
import GradientUnderline from "@/components/core/elements/GradientUnderline.vue";
import Spacer from "@/components/core/elements/Spacer.vue";

export default {
  name: "home",
  components: {
    Grid,
    Column,
    Section,
    GradientUnderline,
    Spacer
  },
  data() {
    return {      
      faqHeaderText: "Frequently Asked Questions",      
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

</style>
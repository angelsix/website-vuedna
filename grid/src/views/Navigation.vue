<template>
  <Section wrap pad class="navigation">
    <h1>Navigation Menu Styles</h1>

    <Navigation style="background: black" image-path="/assets/images/logo.png"></Navigation>

    <div style="height: 2000px;"></div>
  </Section>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/Section.vue";
import DnaScrollDown from "@/modules/dna.scrolldown.js";
import Navigation from "@/components/NavigationMenu.vue";

export default {
  name: "navigation",
  components: {
    Section,
    Navigation
  },
  mounted: () => {
    DnaScrollDown.Hook(50);
  },
  beforeDestroy: () => {
    DnaScrollDown.Unhook();
  }
};
</script>

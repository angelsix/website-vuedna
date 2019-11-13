<template>
  <ShadowBox>
      <Section wrap pad class="center-content">
           <a :href="imageUrl"><img class="image" :src="imagePath" /></a>
 
          <h1>{{title}}</h1>
          <slot></slot>
          <a href="#">{{buttonText}}</a>
      </Section>
  </ShadowBox>
</template>

<script>
import Section from "@/components/core/blocks/Section.vue";
import ShadowBox from "@/components/core/elements/ShadowBox.vue";

export default {
  name: "ImageTextButtonBox",
  components: {
    Section,
    ShadowBox
  },
  props: {
    imagePath: String,
    imageUrl: String,
    imageWidth: String,
    title: String,
    buttonText: String,
  }
};
</script>

<style lang="scss" scoped>

.image
{
    width: 6em;
}

</style>

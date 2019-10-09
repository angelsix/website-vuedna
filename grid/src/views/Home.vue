
<template>
  <Section wrap pad class="home demo">
    <h1>Welcome to 58 Signal Squadron Association</h1>

    <Grid>
      <Column>
        <p>
          Are you a current or ex-serving member of the Royal Signals? Want to meet other like minded members who have shared the same cap badge as you?
          <br />
          <br />Why not come to one of our monthly meetings and share a drink and fond memories.
          <br />
          <br />We meet on th first Friday of every month at the Tri-Services and Veterans Support Centre, Veteran's House, Hassell St, Newcastle-under-Lyme, Newcastle ST5 1AR.
          <br />
          <br />Meetings start at 8pm.
        </p>
      </Column>
    </Grid>
  </Section>
</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";
import Column from "@/components/Column.vue";
import Section from "@/components/Section.vue";
import DnaScrollDown from "@/modules/dna.scrolldown.js";

export default {
  name: "home",
  components: {
    Grid,
    Column,
    Section
  },
  mounted: () => {
    DnaScrollDown.Hook(50);
  },
  beforeDestroy: () => {
    DnaScrollDown.Unhook();
  }
};
</script>

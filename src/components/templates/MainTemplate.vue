<template>
<div class="main-template">
  <Main class="main">
    <Lista :data="dados" />
  </Main>
  <CardContainer class="card-container">
    <Card class="card" text="Pensar em uma informação" />
    <Card
      class="card"
      text="Último lead adicionado foi Fulano de tal, no dia 14/06/2020"
    />
    <Card class="card" :text="totalLeads" />
  </CardContainer>

</div>
</template>

<script>
import { mapActions } from "vuex";
import { Main, Card } from "@/components/organisms";
import { Lista } from "@/components/molecules";
import { CardContainer } from "@/components/bosons";
export default {
  components: {
    Main,
    Card,
    CardContainer,
    Lista
  },

  created() {
    this.start();
  },
  methods: {
    ...mapActions(["fetchLeads"]),
    start() {
      this.$store.dispatch("fetchLeads");
    },
  },
  computed: {
    dados() {
      return this.$store.getters.$allLeads;
    },
    totalLeads() {
      let msg = `Você tem um total de ${this.$store.getters.$totalLeads} leads.`;
      return msg;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-template{
    padding: .1rem;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1rem;

    grid-template-areas: 
    'main'
    'card-container'
    ;
}

.main {
  // border: 1px solid;
  grid-area: main;
  border-radius: 5px;
}
.card-container {
  // border: 1px solid;
  grid-area: card-container;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  .card {
    //    border: 1px solid black;
    flex: 1 1 200px;
    margin: 0.1rem;
    border-radius: 5px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 0.8rem;
  }
}
</style>
<template>
  <div class="home-template">
    <SideNav class="aside" @click-value="alteraView" />

    <div class="component">
      <component :is="currentView" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import { SideNav } from "@/components/organisms";
//import { CardContainer } from "@/components/bosons";
// import { Lista } from "@/components/molecules";
// import { EditarTemplate } from "@/components/templates";
import MainTemplate from "@/components/templates/MainTemplate.vue";
import EditarTemplate from "@/components/templates/EditarTemplate.vue";
export default {
  components: {
    SideNav,
    MainTemplate,
    EditarTemplate,
  },
  data() {
    return {
      currentView: "MainTemplate",
    };
  },
  created() {
    this.start();
  },
  methods: {
    ...mapActions(["fetchLeads"]),
    start() {
      this.$store.dispatch("fetchLeads");
    },
    alteraView(e) {
      this.currentView = e;
      console.log(this.currentView);
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
.component {
  // border: 5px solid red;
  grid-area: component;
  // border: 1px solid red;
  z-index: 1;
}
.home-template {
  padding: 1rem;
  display: grid;
  height: 100%;
  grid-template-columns: 150px 1fr;
  grid-template-rows: 3fr 1fr;
  grid-gap: 1rem;
  //   grid-template-areas:
  //     "aside main"
  //     "aside card-container";
  grid-template-areas:
    "aside component"
    "aside component";
}
.aside {
  grid-area: aside;
  // border: 1px solid red;
  border-radius: 5px;
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

@media screen and (max-width: 680px) {
  .aside {
    display: none;
  }
  .home-template {
    // border: 2px solid;
    padding-bottom: 1rem;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas:
      "main"
      "card-container";
  }
}
</style>
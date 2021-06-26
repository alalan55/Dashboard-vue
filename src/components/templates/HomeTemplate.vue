<template>
    <div class="home-template">
        <SideNav class="aside"/>
        <Main class="main">
            <Lista :data=dados  />
        </Main>
        <CardContainer class="card-container">
            <Card class="card" text="Você tem 30 leads" />
            <Card class="card" text="Último lead adicionado foi Fulano de tal, no dia 14/06/2020" />
            <Card class="card" :text=numLeads />
        </CardContainer>
    </div>
</template>

<script>
import {mapActions} from  'vuex'

import {SideNav, Main, Card} from '@/components/organisms'
import {CardContainer} from '@/components/bosons'
import{ Lista} from '@/components/molecules'
    export default {
        components:{
            SideNav,
            Main,
            Card,
            CardContainer,
            Lista
        },
        data(){
            return{
                numLeads: `Você tem um total de ${this.totalLeads}`
            }
        },
        created(){
            this.start()
        },
        methods:{
            ...mapActions([
                "fetchLeads"
            ]),
            start(){
                this.$store.dispatch("fetchLeads");
            }
        },
        computed:{
            dados(){
                return this.$store.getters.$allLeads
            },
            totalLeads(){
                return this.$store.getters.$totalLeads
            }
        }
    }
</script>

<style lang="scss" scoped>
.home-template{
    padding: 1rem;
    display: grid;
    height: 100%;
    grid-template-columns: 150px  1fr;
    grid-template-rows: 3fr 1fr;
    grid-gap: 1rem;
    grid-template-areas: 
    'aside main'
    'aside card-container'
    ;
}
.aside{
  grid-area: aside;
    border: 1px solid;
    border-radius: 5px;
}
.main{
    border: 1px solid;
    grid-area: main;
   border-radius: 5px;
}
.card-container{
   // border: 1px solid;
  grid-area: card-container;
   border-radius: 5px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;

   .card{
       border: 1px solid black;
       flex: 1 1 200px;
        margin: .1rem;
       border-radius: 5px;
       height: 100%;
       display: flex;
       align-items: center;
       justify-content: center;
       text-align: center;
       padding: .8rem;
   }
}

@media screen and (max-width:680px){
    .aside{
        display: none;
    }
    .home-template{
        // border: 2px solid;
    padding-bottom: 1rem;
    display: grid;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-areas: 
    'main'
    'card-container'
    ;
}
}
</style>
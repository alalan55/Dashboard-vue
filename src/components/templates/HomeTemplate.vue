<template>
    <div class="home-template">
        <SideNav class="aside"/>
        <Main class="main"/>
        <CardContainer class="card-container">
            <Card class="card"/>
            <Card class="card"/>
            <Card class="card"/>
        </CardContainer>
    </div>
</template>

<script>

import {SideNav, Main, Card} from '@/components/organisms'
import {CardContainer} from '@/components/bosons'
    export default {
        components:{
            SideNav,
            Main,
            Card,
            CardContainer
        }
    }
</script>

<style lang="scss" scoped>
.home-template{
    padding: 1rem;
    display: grid;
    height: 100%;
    grid-template-columns: 150px  1fr;
    grid-template-rows: 2fr 1fr;
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
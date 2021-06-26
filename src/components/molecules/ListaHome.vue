<template>
  <ul class="lista">
    <li v-for="element in data" :key="element.id" class="item">
      <span>{{ element.nome }} {{element.sobrenome}}</span>
      <span>#{{ element.id }}</span>
    </li>
  </ul>
</template>

<script>
    export default {
        props: {
            data:{type: Object},
         // fullName:{type: String}
        },
        computed:{
            fullName(){
                let nomeCompleto = `${this.data.nome} ${this.data.sobrenome}`
                return  nomeCompleto
            }
        }
    }
</script>

<style lang="scss" scoped>
.lista{
    //border: 1px solid;
    overflow-y:scroll;
    height: 24rem;
    .item{
        list-style: none;
        padding: .7rem .7rem;
        border: 1px solid;
        border-radius: 5px;
        margin: .5rem 0;
        display: flex;
        justify-content: space-between;

        span{
            display: block;
        }
    }
}
</style>
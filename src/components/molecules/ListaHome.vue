<template>
  <ul class="lista">
    <li v-for="element in data" :key="element.id" class="item" @click="$emit('lead', element)">
      <span>{{ element.nome }} {{ element.sobrenome }}</span>
      <span>#{{ element.id}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: { type: Object },
    // fullName:{type: String}
  },
  computed: {
    fullName() {
      let nomeCompleto = `${this.data.nome} ${this.data.sobrenome}`;
      return nomeCompleto;
    },
  },
};
</script>

<style lang="scss" scoped>
.lista {
  //border: 1px solid;
  overflow-y: scroll;
  height: 24rem;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
    background: rgb(119, 118, 118);
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 20px;
  }
  .item {
    list-style: none;
    padding: 0.7rem 0.7rem;
    // border: 1px solid;
    border-radius: 5px;
    margin: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(5px);

    span {
      display: block;
      color: white;
    }
  }
}
</style>
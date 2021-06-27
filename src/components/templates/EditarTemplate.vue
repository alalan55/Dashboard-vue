<template>
  <div class="editar-template">
    <div class="adicionar-lead">
      <h3>Adicione ou remova um lead</h3>

      <div class="modal">
        <span @click="foiClidado">Adicionar Lead</span>
        <div class="modal-element" v-show="clidado">
           
          <div class="inputs">
               <div class="enviado" v-if="adicionado">
                <span>Lead Cadastrado com sucesso</span>
            </div>
            <form>
              <input type="text" placeholder="Nome" v-model="nome" />
              <input type="text" placeholder="Sobrenome" v-model="sobrenome" />
              <input type="text" placeholder="Cargo" v-model="cargo" />
              <input type="text" placeholder="Setor" v-model="setor" />
              <input
                type="text"
                placeholder="Tempo de empresa"
                v-model="tempoEmpresa"
              />
              <input
                type="button"
                value="Adicionar"
                class="btn"
                @click="adicionar"
              />
            </form>
            <!-- <button>Adicionar</button> -->
          </div>
        </div>
      </div>
    </div>

    <div class="lista">
     <div class="texto-remocao">
         <span>Remover Lead</span>
         <span class="sub-info">Clique em algum Lead para remover da lista</span>
     </div>
      <Lista :data="dados" class="dados-lista" @lead="removerLead" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v4 } from 'uuid';
import { Lista } from "@/components/molecules";
export default {
  components: {
    Lista,
  },
  data() {
    return {
      clidado: false,
      nome: "",
      sobrenome: "",
      cargo: "",
      setor: "",
      tempoEmpresa: 0,
      adicionado: false
    };
  },
  created() {
    this.start();
  },
  methods: {
    ...mapActions(["fetchLeads","addLead", "removeLead"]),
    start() {
      this.$store.dispatch("fetchLeads");
    },
    foiClidado() {
      console.log("teste");
      this.clidado = !this.clidado;
    },
    formatarHoras(){
        let newDate = new Date();
        let dia = newDate.getDate().toString();
        let diaF = (dia.length == 1) ? '0'+dia :dia;
        let mes = (newDate.getMonth()+1).toString();
        let mesF = (mes.length == 1) ? '0'+mes : mes;
        let anoF = newDate.getFullYear();

        let now = `${diaF}/${mesF}/${anoF}`
        return now
    },
    adicionar() {
        const uuId = v4()
      let obj = {
        nome: this.nome,
        sobrenome: this.sobrenome,
        cargo: this.cargo,
        setor: this.setor,
        tempoEmPresaAnos: this.tempoEmpresa,
        id: uuId,
        date: this.formatarHoras()
      };

      this.addLead(obj)
      this.limparCampos()
      this.popupAdicionado()
    },
    limparCampos(){
        this.nome = ''
        this.sobrenome = ''
        this.cargo = ''
        this.setor = ''
        this.tempoEmpresa = 0
    },
    popupAdicionado(){
        this.adicionado = true
        setTimeout(()=>{
            this.adicionado = false
        }, 4000)
    },
    removerLead(e){
        this.removeLead(e)
    }
  },
  computed: {
    dados() {
      return this.$store.getters.$allLeads;
    },
  },
};
</script>

<style lang="scss" scoped>
.editar-template {
  padding: 0.5rem;
  border-radius: 5px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  overflow: hidden;

  .adicionar-lead {
    color: white;
    margin-bottom: 3rem;

    h3 {
      font-weight: 200;
    }
    .modal {
      margin-top: 0.5rem;
      span {
        font-weight: 300;
        border-radius: 5px;
        padding: 0.5rem;
        display: block;
        margin-bottom: 0.5rem;
        background: rgb(97, 197, 97);
        transition: 0.3s ease-in;
        cursor: pointer;

        &:hover {
          background: rgb(88, 179, 88);
        }
      }

      .modal-element {
        margin-top: 0.5rem;
      }
    }

    .inputs {
      //   border: 1px solid;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-top: 1px solid rgba(255, 255, 255, 0.5);
      border-left: 1px solid rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(5px);
      border-radius: 5px;
      margin-top: 0.5rem;
      .enviado{
          padding: .2rem .5rem;
          span{
              padding: .3rem 1.5rem;
          }
      }

      form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;

        input {
          padding: 1rem 0.6rem;
          border: none;
          outline: none;
          border-radius: 5px;
          flex: 1 1 250px;
          margin: 1rem;
        }
        .btn {
          cursor: pointer;
          background: rgb(112, 230, 112);
          color: white;
          transition: 0.2s ease-in;
          &:hover {
            background: rgb(94, 194, 94);
          }
        }
      }
      button {
        width: 20%;
        padding: 1rem 0.5rem;
        margin-top: 0.5rem;
      }
    }
  }
  .dados-lista {
    margin-top: 0.5rem;
    //   border: 1px solid;
    //   height: 1%;
  }
}

.texto-remocao{
     background: rgb(197, 165, 97);
        border-radius: 5px;
        color: white;
        padding:  0.2rem;
    span{
     
         font-weight: 300;
        padding: 0 0.5rem;
        display: block;
        margin-bottom: 0.5rem;
  
    }
    .sub-info{
        font-size: .8rem;
    }
}
</style>
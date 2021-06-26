import { createStore } from "vuex";
import Leads from '../../mock_leads'

export default createStore({
  state: {
    leads: []
  },
  mutations: {
    SET_LEADS(state, leads){
      state.leads = leads
    }
  },
  actions: {
    fetchLeads(context){
      const leads = Leads
      context.commit('SET_LEADS', leads)
    }

  },
  getters:{
    $allLeads(state){
      return state.leads
    },
    $leadsMaiorUmAno(state){
      return state.leads.filter(lead => lead.tempoEmPresaAnos > 1)
    },
    $totalLeads(state){
      // console.log(state.leads.length)
      return state.leads.length
    }
  }
});

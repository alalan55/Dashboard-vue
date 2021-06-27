import { createStore } from "vuex";
import Leads from '../../mock_leads'

export default createStore({
  state: {
    leads: []
  },
  mutations: {
    SET_LEADS(state, leads){
      state.leads = leads
    },
    ADD_LEAD(state, lead){
      state.leads.unshift(lead)
    },
    REMOVE_LEAD(state, lead){
      state.leads.splice(state.leads.indexOf(lead), 1)
    }
  },
  actions: {
    fetchLeads(context){
      const leads = Leads
      context.commit('SET_LEADS', leads)
    },
    addLead(context,lead){
        context.commit('ADD_LEAD', lead)
    },
    removeLead({commit}, lead){
      commit('REMOVE_LEAD', lead)
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
      return state.leads.length
    },
    $ultimaAdd(state){
     return state.leads[0]
    }
  }
});

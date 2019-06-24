export const state = () => ({
  open: false,
  component: {}
})

export const mutations = {
  SET_OPEN: function(state, open){
    state.open = open
  },
  TOGGLE_MENU: function(state){
    state.open = !state.open
  },
  SET_COMPONENT: function(state, component){
    state.component = component
  }
}

export const actions = {
  setOpen: function({ commit }, open){
    commit('SET_OPEN', open)
  },
  toggleMenu: function({ commit }){
    commit('TOGGLE_MENU')
  },
  setComponent: function({ commit }, component){
    commit('SET_COMPONENT', component)
  }
}

export const getters = {
  getOpen: function(state){
    return state.open
  },
  getComponent: function(){
    return state.component
  }
}

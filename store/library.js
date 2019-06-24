export const state = () => ({
  components: []
})

export const mutations = {
  SET_COMPONENTS: function(state, components){
    state.components = components
  }
}

export const actions = {
  setComponents: function({ commit }, components){
    commit('SET_COMPONENTS', components)
  }
}

export const getters = {
  getComponents: function(state){
    return state.components
  }
}

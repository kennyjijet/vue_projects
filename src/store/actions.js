export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  },
  initialActionMovie: ({ commit }, payload) => {
    console.log(payload);
    commit('initialMovie', payload)
  },
  initialLOPA: ({ commit }, payload) => {
    console.log(payload);
    commit('initialLOPA', payload)
  }
}

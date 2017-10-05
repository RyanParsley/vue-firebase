export const mutations = {
  setUser (state, payload) {
    state.user = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setItems (state, payload) {
    state.items = Object.keys(payload).map(function (key) {
      return [Number(key), payload[key]]
    })
  },
  pushItem (state, payload) {
    state.items.push(payload)
  }
}

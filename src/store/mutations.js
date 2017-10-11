export const mutations = {
  setUser (state, payload) {
    state.user = payload
    this.dispatch('getFirebaseData')
  },
  setFirebase (state, payload) {
    state.firebase = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setItems (state, payload) {
    state.items = Object.keys(payload).map(function (key) {
      return {key: payload[key].key, value: payload[key].value}
    })
  },
  removeItem (state, payload) {
    state.firebase.database().ref('/items').child(payload.key).remove()
  },
  pushItem (state, payload) {
    state.firebase.database().ref('/items').push(payload)
  }
}

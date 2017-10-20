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
  setPantryItems (state, payload) {
    state.pantry = Object.keys(payload).map(function (key) {
      return {key: payload[key].key, value: payload[key].value}
    })
  },
  removePantryItem (state, payload) {
    state.firebase.database().ref('/pantry').child(payload.key).remove()
  },
  pushPantryItem (state, payload) {
    state.firebase.database().ref('/pantry').push(payload)
  },
  removeItem (state, payload) {
    state.firebase.database().ref('/items').child(payload.key).remove()
  },
  pushItem (state, payload) {
    state.firebase.database().ref('/items').push(payload)
  }
}

export const getters = {
  appTitle (state) {
    return state.appTitle
  },
  getItems (state) {
    return state.items
  },
  getPantryItems (state) {
    return state.pantry
  },
  getUser (state) {
    return state.user
  },
  getError (state) {
    return state.error
  },
  getLoading (state) {
    return state.loading
  }
}

import firebase from 'firebase'
import router from '@/router'

export const actions = {
  userSignUp ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(firebaseUser => {
      commit('setUser', firebaseUser)
      commit('setLoading', false)
      commit('setError', null)
      router.push('/home')
    })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
    })
  },
  addItem: function ({commit}, payload) {
    commit('pushItem', payload)
  },
  // Remove child based on key - firebase function
  removeItem: function (key) {
    this.items.child(key).remove()
  },
  userSignIn ({commit}, payload) {
    commit('setLoading', true)
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(firebaseUser => {
      commit('setUser', firebaseUser)
      commit('setLoading', false)
      commit('setError', null)
      router.push('/home')
    })
    .catch(error => {
      commit('setError', error.message)
      commit('setLoading', false)
    })
  },
  autoSignIn ({commit}, payload) {
    commit('setUser', payload)
  },
  userSignOut ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
    router.push('/')
  },
  getFirebaseData: function ({commit}, payload) {
    console.log('payload: ', payload)
    payload.database().ref('items').on('value', function (snapshot) {
      console.log('snapshot had: ', snapshot.val())
      commit('setItems', snapshot.val())
    })
  }
}

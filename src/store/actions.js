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
  removeItem: function ({commit}, key) {
    commit('removeItem', key)
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
    return new Promise((resolve, reject) => {
      commit('setUser', payload)
      resolve()
    })
  },
  userSignOut ({commit}) {
    firebase.auth().signOut()
    commit('setUser', null)
    router.push('/')
  },
  getFirebaseData: function ({commit}, payload) {
    firebase.database().ref('/items').on('value', (snapshot) => {
      const data = Object.entries(snapshot.val())
                         .map(([ key, value ]) => ({ key, value }))
      commit('setFirebase', firebase)
      commit('setItems', data)
    })
  }
}

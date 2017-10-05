<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Your list</h3>
      <form v-on:submit.prevent="addItem">
        <input type="text" v-model="newItem.text" placeholder="Add new item"/>
      </form>
      <ul class="item-list">
        <li v-for="item in items">{{item.text}} <button v-on:click="removeItem($key)">Remove</button></li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      newItem: this.newItem || {text: ''}
    }
  },
  methods: {
    // Push new post in to Todos
    addItem: function () {
      console.log('addItem was registered: ', this.newItem.text)
      this.$store.dispatch('addItem', this.newItem.text)
    },
    // Remove child based on key - firebase function
    removeItem: function (key) {
      this.$store.dispatch('removeItem', key)
    }
  }
}
</script>

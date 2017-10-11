<template>
  <v-layout column>
    <v-flex xs12 class="text-xs-center" mt-5>
      <h3>Your list</h3>
      <form v-on:submit.prevent="addItem">
        <input type="text" v-model="newItem" placeholder="Add new item"/>
      </form>
      <ul class="item-list">
        <li v-for="item in items">{{item.value}} <button v-on:click="removeItem(item)">Remove</button></li>
      </ul>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      newItem: this.newItem
    }
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    // Push new post in to Todos
    addItem: function () {
      this.$store.dispatch('addItem', this.newItem)
    },
    // Remove child based on key - firebase function
    removeItem: function (item) {
      this.$store.dispatch('removeItem', item)
    }
  }
}
</script>

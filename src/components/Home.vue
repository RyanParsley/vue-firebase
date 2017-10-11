<template>
  <v-layout column>
    <v-flex xs12 md4 offset-md4 class="text-xs-center" mt-5>
      <h3>Your list</h3>
      <v-form v-on:submit.prevent="addItem">
        <v-text-field type="text" v-model="newItem" placeholder="Add new item"></v-text-field>
      </v-form>
      <v-list class="item-list">
        <v-list-tile v-for="item in items" :key="item.key">
          <v-list-tile-content>
            {{item.value}}
          </v-list-tile-content>
          <v-list-tile-action>
            <button v-on:click="removeItem(item)">Remove</button>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
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

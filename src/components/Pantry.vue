<template>
  <v-layout column>
    <v-flex xs12 md4 offset-md4 class="text-xs-center" mt-5>
      <h3>Your Pantry</h3>
      <v-form v-on:submit.prevent="addItem">
        <v-text-field type="text" v-model="newItem.text" placeholder="Add new item"></v-text-field>
      </v-form>
      <v-list class="item-list">
        <v-list-tile v-for="item in items" :key="item.key">
          <v-list-tile-content>
            <v-list-tile-title v-html="item.value.text"></v-list-tile-title>
            <v-list-tile-sub-title>
              {{item.value.status}} / 100
            </v-list-tile-sub-title>
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
      newItem: {
        text: '',
        status: 100
      }
    }
  },
  computed: {
    items () {
      return this.$store.state.pantry
    }
  },
  methods: {
    // Push new post in to Todos
    addItem: function () {
      this.$store.dispatch('addToPantry', this.newItem)
    },
    // Remove child based on key - firebase function
    removeItem: function (item) {
      this.$store.dispatch('removeFromPantry', item)
    }
  }
}
</script>

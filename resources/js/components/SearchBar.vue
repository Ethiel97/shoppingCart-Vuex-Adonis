<template>
  <b-field expanded position="is-centered">
    <b-input v-model="query" size="is-large"
             @keyup.enter="filterProducts" placeholder="Search..."
             type="search"
             icon="magnify">
    </b-input>
    <p class="control">
      <button class="button is-primary is-large" @click="filterProducts">Search</button>
    </p>
  </b-field>

</template>
<script>

  import _ from 'lodash'

  export default {
    name: "SearchBar",
    data() {
      return {
        query: ''
      }
    },
    watch: {
      query: {
        handler: _.debounce(function () {
          this.filterProducts()
        }, 100)
      }
    },
    methods: {
      filterProducts() {
        this.$store.dispatch('FILTER_PRODUCTS', this.query)
      }
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="container">
    <div v-if="!isEmpty" class="columns" v-for="products in groupedProducts">
      <div class="column is-3-desktop is-6-mobile" v-for="product in products">
        <product class="fadeIn" :product="product"></product>
      </div>
      <!--<div class="col w-100"></div>-->
    </div>
    <div v-if="isEmpty">
      <figure class="image is-2by1 is-centered">
        <img src="../../img/add_to_cart.png" alt="">
      </figure>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import product from '../components/Product'

  export default {
    name: "Products",
    components: {
      product
    },
    mounted() {
      this.$store.dispatch('FETCH_PRODUCTS')
    },
    computed: {
      isEmpty() {
        return this.products.length === 0
      },
      groupedProducts() {
        return _.chunk(this.products, 4);
      },
      ...mapGetters([
        'products'
      ])
    }
  }
</script>

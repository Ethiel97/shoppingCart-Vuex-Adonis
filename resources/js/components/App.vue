<template>
  <div class="">
    <Banner/>
    <br>
    <br>
    <SearchBar/>
    <br>
    <br>
    <Products/>
    <CartButton @showCart="showCart" />
    <Cart :is-visible="isModalActive" @close="hideCart"/>

  </div>
</template>

<script>
  import Banner from '../components/Banner'
  import SearchBar from '../components/SearchBar'
  import Products from '../components/Products'
  import CartButton from '../components/CartButton'
  import Cart from '../components/Cart'

  export default {
    name: "App",
    components: {
      Banner,
      SearchBar,
      Products,
      CartButton,
      Cart
    },
    data() {
      return {
        isModalActive: false
      }
    },
    methods: {
      showCart() {
        this.isModalActive = true
      },
      hideCart() {
        this.isModalActive = false;
      }
    }
  }
</script>

<style scoped>

</style>

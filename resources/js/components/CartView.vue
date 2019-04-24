<template>
  <div>
    <Banner/>
    <br>
    <br>
    <Cart/>
  </div>

</template>

<script>


  import Banner from '../components/Banner'
  import Cart from '../components/Cart'

  export default {
    name: "CartView",
    components: {
      Banner,
      Cart
    }
  }
</script>

<style scoped>

</style>

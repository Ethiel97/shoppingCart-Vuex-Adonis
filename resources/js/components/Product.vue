<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img class="card-image" :src="product.image" :alt="product.name">
      </figure>
    </div>
    <div class="card-content">
      <h5 class="title is-4">{{product.name}}</h5>
      <p class="subtitle">{{product.description}}</p>
      <span class="text is-2 has-text-weight-bold has-text-info">${{product.price}}</span>
      <span></span><span></span>
      <button class="button is-primary has-shadow cartButton" @click.stop="addToCart(product)">
        <b-icon icon="cart-plus" pack="fas" type="is-white"></b-icon>
      </button>
      <button class="button is-danger has-shadow cartButton" @click.stop="removeFromCart(product)">
        <b-icon icon="minus" pack="fas" type="is-white"></b-icon>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: ['product'],
    methods: {
      addToCart(product) {
        this.$store.commit('ADD_TO_CART', product)
      },
      removeFromCart(product) {
        this.$store.commit('REMOVE_FROM_CART', product)
      }
    }
  }
</script>

<style scoped>
  .card {
    cursor: pointer;
    margin-bottom: 8px;
  }
</style>

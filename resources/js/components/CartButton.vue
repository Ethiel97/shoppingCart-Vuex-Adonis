<template>
  <a class="goTop" id="goTop" @click="showCart" :data-cart-size="cart_size">
    <b-icon icon="cart-plus" pack="fas" size="is-medium" type="is-white"></b-icon>
  </a>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "CartButton",
    methods: {
      showCart() {
        this.$emit('showCart')
      }
    },
    computed: {
      ...mapGetters([
        'cart_size'
      ])
    }
  }
</script>

<style lang="css">
  .goTop {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #714dd2;
    position: fixed;
    width: 100px;
    height: 100px;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
    -webkit-transition: all .3s ease-in;
    -moz-transition: all .3s ease-in;
    -o-transition: all .3s ease-in;
    transition: all .3s ease-in;
    right: 30px;
    bottom: 30px;
    border: none;
    opacity: 1;
    z-index: 5;
  }

  .goTop:hover {
    opacity: 1;
    background-color: rgba(254, 168, 55, 0.9);
    -webkit-transform: scale(1.05) rotate(360deg);
    -moz-transform: scale(1.05) rotate(360deg);
    -ms-transform: scale(1.05) rotate(360deg);
    -o-transform: scale(1.05) rotate(360deg);
    transform: scale(1.05) rotate(360deg);
  }

  .goTop::after {
    text-align: center;
    font-weight: bold;
    margin: 0 0;
    position: absolute;
    right: 68%;
    background: #00d1b2;
    background-clip: border-box;
    border-radius: 50%;
    color: #fff;
    content: attr(data-cart-size);
    display: inline-block;
    bottom: 3%;
    width: 45px;
    line-height: 45px;
    height: 45px;
    border: none;
    font-size: 1.2rem;
  }
</style>

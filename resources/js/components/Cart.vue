<template>

  <!--<b-modal :active.sync="isModalActive">

    <div class="box has-shadow is-centered">
      <h3 class="title has-text-weight-semibold is-4">Your shopping cart</h3>

      <table class="table is-hoverable is-striped">
        <thead>
        <tr>
          <th><abbr title="Name">Name</abbr></th>
          <th><abbr title="Image">Picture</abbr></th>
          <th><abbr title="Price">Price</abbr></th>
          <th><abbr title="Qty">Quantity</abbr></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in cart">
          <td>
            {{item.details.name}}
          </td>
          <td>
            <figure class="image is-48x48"><img :src="item.details.image" alt="">
            </figure>
          </td>
          <td><b>${{item.details.price}}</b></td>
          <td>{{item.quantity}}</td>
          <td>
            <button class="button is-small is-primary" @click="addToCart(item.details)">
              <i
                class="fa fa-plus"></i></button>
            <button class="button is-small is-danger" @click="removeFromCart(item.details)">
              <i class="fa fa-minus"></i>
            </button>
          </td>
        </tr>
        <tr>
          <td colspan="3">Total</td>
          <td colspan="2"><b class="has-text-danger">${{totalCost}}</b>
            &lt;!&ndash;<button class="button is-primary">Commander</button>&ndash;&gt;
          </td>
        </tr>
        </tbody>
      </table>

    </div>

  </b-modal>-->
  <div class="modal" :class="{'is-active': isVisible}" id="cartModal">
    <div class="modal-background" @click.stop="closeModal"></div>

    <div class="modal-content">
      <div class="box has-shadow">
        <h3 class="title has-text-weight-semibold is-5 has-text-centered has-text-primary">Your shopping cart</h3>

        <table class="table is-hoverable is-striped" style="margin: 0 auto;">
          <thead>
          <tr>
            <th><abbr title="Name">Name</abbr></th>
            <th><abbr title="Image">Picture</abbr></th>
            <th><abbr title="Price">Price</abbr></th>
            <th><abbr title="Qty">Quantity</abbr></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in cart">
            <td>
              {{item.details.name}}
            </td>
            <td>
              <figure class="image is-48x48"><img :src="item.details.image" alt="">
              </figure>
            </td>
            <td><b>${{item.details.price}}</b></td>
            <td>{{item.quantity}}</td>
            <td>
              <button class="button is-small is-primary" @click="addToCart(item.details)">
                <i
                  class="fa fa-plus"></i></button>
              <button class="button is-small is-danger" @click="removeFromCart(item.details)">
                <i class="fa fa-minus"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td colspan="3">Total</td>
            <td colspan="2"><b class="has-text-danger is-size-4">${{totalCost}}</b>
              <!--<button class="button is-primary">Commander</button>-->
            </td>
          </tr>
          </tbody>
        </table>

      </div>

    </div>
    <button class="modal-close is-large" @click="closeModal" aria-label="close"></button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    props: {
      isVisible: {
        type: Boolean,
        required: true,
        default: false,
      }
    },
    name: "Cart",
    methods: {
      closeModal() {
        this.$emit('close')
      },
      addToCart(product) {
        this.$store.commit('ADD_TO_CART', product)
      },
      removeFromCart(product,) {
        this.$store.commit('REMOVE_FROM_CART', product)
      }
    },
    computed: {
      /*isModalActive: {
        get: function () {
          return this.isVisible
        },
        set: function (newValue) {
          // this.isModalActive = newValue
          this.isVisible = newValue
        }
      },*/
      ...mapGetters(
        ['cart']
      ),
      totalCost() {
        return this.cart.reduce((accum, product) => {
          return accum + product.quantity * product.details.price
        }, 0)
      }
    }
  }
</script>

<style scoped>
  .modal-content {
    width: 740px;
  }
</style>

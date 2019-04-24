let getters = {
  products: state => {
    return state.products
  },
  cart: state => {
    return state.cart
  },
  cart_size: state => {
    return state.cart.reduce((accum, product) => {
      return accum + product.quantity
    }, 0)
  }
}

export default getters;

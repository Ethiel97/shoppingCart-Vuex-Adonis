let mutations = {

  SET_PRODUCTS(state, products) {
    state.products = products
  },

  ADD_TO_CART(state, product) {
    const position = state.cart.findIndex(p => {
      return p.details.id === product.id
    });
    if (position === -1) {
      state.cart.push({
        details: product,
        quantity: 1
      });
    } else {
      state.cart[position].quantity++
    }

    localStorage.removeItem('cart');
    localStorage.setItem('cart', JSON.stringify(state.cart))
    /* this.$notify({
         group: 'cart',
         type: 'success',
         title: 'Notification',
         text: ` ${product.name}! ajoute a votre panier!`
     });*/
  },

  RESET_CART(state) {
    state.cart = [];
  },

  REMOVE_FROM_CART(state, product) {
    const position = state.cart.findIndex(p => {
      return p.details.id === product.id
    });
    if (state.cart[position].quantity <= 1) {
      state.cart.splice(position, 1);
    } else {
      state.cart[position].quantity--
    }
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(state.cart))
    /* this.$notify({
         group: 'cart',
         type: 'success',
         title: 'Notification',
         text: ` ${product.name}! retire de votre panier!`
     });*/
  },
}

export default  mutations

let actions = {
  FETCH_PRODUCTS({commit}) {
    axios.get('/products').then(res => {
      commit('SET_PRODUCTS', res.data)
    }).catch(err => {
        console.log(err)
      }
    )
  },

  FILTER_PRODUCTS({commit}, query) {
    let params = {
      query
    };
    axios.get('/search', {params}).then(res => {
      commit('SET_PRODUCTS', res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default actions

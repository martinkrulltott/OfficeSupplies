export const state = () => ({
  price: 0,
  products: []
})

export const mutations = {
  ADD_TO_CART(state, product) {
    state.price += parseInt(product.price)
    state.products.push(product)
  }
}

export const actions = {
  add(context, product) {
    context.commit('ADD_TO_CART', product)
  }
}

<template>
  <v-card tile flat>
    <v-card-title primary-title class="py-0">
      <h2 class="fn display-1 mb-0">{{ product.title }}</h2>
    </v-card-title>
    <v-card-text class="pb-1">
      <v-layout row wrap>
        <v-flex xs6 sm4 md4>
          <h3 class="price headline mb-0 accent--text font-weight-bold">
            {{ product.price }} kr
          </h3>
          <span class="old-price accent--text">{{ product.oldPrice }} kr</span>
        </v-flex>
        <v-flex xs6 sm4 md4>
          <v-select
            :items="product.variants"
            label="Select"
            dense
            solo
            flat
            background-color="grey lighten-3"
          />
        </v-flex>
        <v-flex xs12 sm4 text-sm-right>
          <v-btn depressed color="primary" class="ma-0" @click="addToCart()">
            Buy
          </v-btn>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Header',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    addToCart() {
      this.$store.dispatch('cart/add', this.product)
    }
  }
}
</script>

<style lang="scss" scoped>
.old-price {
  position: relative;
  top: -10px;
  font-size: 13px;
  text-decoration: line-through;
}
</style>

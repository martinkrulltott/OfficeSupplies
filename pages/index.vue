<template>
  <v-container fluid class="hproduct">
    <v-layout row>
      <v-flex md2 row class="hidden-sm-and-down">
        <ProductMenu />
      </v-flex>
      <v-flex md10 row>
        <v-layout row wrap>
          <v-flex class="hidden-sm-and-up">
            <ProductTitle :product="product" />
          </v-flex>
          <v-flex d-flex xs12 sm4 child-flex>
            <ProductImages :product="product" />
          </v-flex>
          <v-flex d-flex xs12 sm8>
            <v-layout row wrap align-content-start>
              <v-flex class="hidden-xs-only">
                <ProductTitle :product="product" />
              </v-flex>
              <v-flex d-flex>
                <ProductDescription :product="product" />
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex
            v-for="(item, index) in product.inspiration"
            :key="`inspiration-${index}`"
            d-flex
            md4
            pa-2
          >
            <ProductInspiration :inspiration="item" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ProductMenu from '~/components/ProductMenu'
import ProductTitle from '~/components/ProductTitle'
import ProductDescription from '~/components/ProductDescription'
import ProductImages from '~/components/ProductImages'
import ProductInspiration from '~/components/ProductInspiration'
export default {
  components: {
    ProductMenu,
    ProductTitle,
    ProductDescription,
    ProductImages,
    ProductInspiration
  },
  computed: {
    product() {
      return this.$store.state.product.selected
    }
  },
  head() {
    return {
      title: this.product.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.product.description
        }
      ]
    }
  }
}
</script>

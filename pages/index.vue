<template>
  <v-container fluid class="hproduct">
    <v-layout row>
      <v-flex md2 row class="hidden-sm-and-down">
        <Menu />
      </v-flex>
      <v-flex md10 row>
        <v-layout row wrap>
          <v-flex class="hidden-sm-and-up">
            <Header :product="product" />
          </v-flex>
          <v-flex d-flex xs12 sm4 child-flex>
            <Images :product="product" />
          </v-flex>
          <v-flex d-flex xs12 sm8>
            <v-layout row wrap align-content-start>
              <v-flex class="hidden-xs-only">
                <Header :product="product" />
              </v-flex>
              <v-flex d-flex>
                <Description :product="product" />
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
            <Inspiration :inspiration="item" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Menu from '~/components/product/Menu'
import Header from '~/components/product/Header'
import Description from '~/components/product/Description'
import Images from '~/components/product/Images'
import Inspiration from '~/components/product/Inspiration'
export default {
  components: {
    Menu,
    Header,
    Description,
    Images,
    Inspiration
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

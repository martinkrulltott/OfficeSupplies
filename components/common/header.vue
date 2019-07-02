<template>
  <v-toolbar fixed app flat extension-height="40" class="accent--text pt-2">
    <v-btn flat icon color="primary" class="mr-3 hidden-md-and-up">
      <v-icon>menu</v-icon>
    </v-btn>
    <v-spacer class="hidden-md-and-up" />
    <v-img
      src="OfficeSupplies.png"
      alt="OfficeSupplies logo"
      height="40"
      contain
      position="left center"
    />
    <v-spacer />
    <v-text-field
      label="Search"
      append-outer-icon="search"
      class="mt-2 mr-5 hidden-sm-and-down search-field"
      @click:append-outer="search()"
    />
    <v-badge
      v-model="cartHasItems"
      right
      overlap
      color="accent"
      class="mt-2 mr-2"
    >
      <template v-slot:badge>
        <span class="caption">{{ cartSize }}</span>
      </template>
      <v-icon large color="grey lighten-1">
        shopping_cart
      </v-icon>
    </v-badge>
    <h3
      v-if="cartHasItems && cartPrice"
      class="headline ml-3 hidden-sm-and-down"
    >
      {{ cartPrice }} kr
    </h3>
    <v-btn depressed small color="primary" class="ml-5 hidden-sm-and-down">
      Check out
    </v-btn>
    <template v-slot:extension class="hidden-sm-and-down">
      <Navigation v-if="extendToolbar" />
    </template>
  </v-toolbar>
</template>

<script>
import Navigation from '@/components/common/Navigation'
export default {
  name: 'Header',
  components: {
    Navigation
  },
  computed: {
    cartSize() {
      return this.$store.state.cart.products.length
    },
    cartPrice() {
      return this.$store.state.cart.price
    },
    cartHasItems() {
      return this.cartSize > 0
    },
    extendToolbar() {
      return (
        this.$vuetify.breakpoint.name !== 'sm' &&
        this.$vuetify.breakpoint.name !== 'xs'
      )
    }
  },
  methods: {
    search() {}
  }
}
</script>

<style lang="scss" scoped>
.search-field {
  max-width: 220px;
}
</style>

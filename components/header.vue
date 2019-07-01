<template>
  <v-toolbar fixed app flat extended class="primary--text pt-2">
    <v-btn flat icon color="accent" class="mr-3 hidden-md-and-up">
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
    <v-btn depressed small color="accent" class="ml-5 hidden-sm-and-down">
      Check out
    </v-btn>
    <template v-slot:extension>
      <Navigation />
    </template>
  </v-toolbar>
</template>

<script>
import Navigation from '@/components/Navigation'
export default {
  name: 'Header',
  components: {
    Navigation
  },
  data() {
    return {
      cartSize: 5, // TODO: Fetch from store
      cartPrice: 536
    }
  },
  computed: {
    cartHasItems() {
      return this.cartSize > 0
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

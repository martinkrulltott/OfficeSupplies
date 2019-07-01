<template>
  <v-toolbar fixed app flat extended class="primary--text pt-2">
    <v-img
      src="OfficeSupplies.png"
      alt="OfficeSupplies logo"
      height="40"
      contain
    />
    <v-spacer></v-spacer>
    <v-text-field
      label="Search"
      append-outer-icon="search"
      @click:append-outer="search()"
      class="mt-2 mr-5 hidden-sm-and-down"
    ></v-text-field>
    <v-badge overlap right class="mt-2" v-model="showCartBadge">
      <template v-slot:badge>
        <span class="caption">{{ cartSize }}</span>
      </template>
      <v-icon large color="grey lighten-1">
        shopping_cart
      </v-icon>
    </v-badge>

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
  methods: {
    search() {}
  },
  data() {
    return {
      cartSize: 5
    }
  },
  computed: {
    showCartBadge() {
      return this.cartSize > 0
    }
  }
}
</script>

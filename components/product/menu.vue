<template>
  <v-navigation-drawer class="primary--text" permanent>
    <v-list dense>
      <!-- eslint-disable-next-line -->
      <v-list-tile v-for="(item, index) in menuItems" :key="`menuItem-${index}`" @click="">
        <v-list-tile-content>
          <v-list-tile-title class="primary--text">
            {{ item }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      menuItems: [
        'Paper clips',
        'Post-it notes',
        'Staples',
        'Hole punches',
        'Binders',
        'Staplers',
        'Laminators',
        'Writing utensils',
        'Paper',
        'Computers',
        'Printers',
        'Fax machines',
        'Photocopiers',
        'Cash registers',
        'Office furniture',
        'Chairs',
        'Cubicles',
        'Filing cabinet',
        'Armoire desks'
      ]
    }
  }
}
</script>

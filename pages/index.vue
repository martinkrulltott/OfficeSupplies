<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md3 row class="hidden-sm-and-down">
        <v-navigation-drawer class="primary--text" permanent>
          <v-list dense>
            <!-- eslint-disable-next-line -->
            <v-list-tile v-for="item in menuItems" :key="item" @click="">
              <v-list-tile-content>
                <v-list-tile-title class="primary--text">
                  {{ item }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex md3 row style="border:1px solid black">
        Hello world
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
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

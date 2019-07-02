<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md3 row class="hidden-sm-and-down">
        <Menu />
      </v-flex>
      <v-flex md9 row>
        <v-layout row wrap>
          <v-flex class="hidden-md-and-up">
            <Header />
          </v-flex>
          <v-flex d-flex xs12 md5 child-flex>
            <v-card color="orange lighten-2" tile flat>
              <v-card-text>Images {{ lorem }} {{ lorem }}</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md7>
            <v-layout row wrap>
              <v-flex class="hidden-sm-and-down">
                <Header />
              </v-flex>
              <v-flex d-flex>
                <v-layout row>
                  <v-flex d-flex>
                    <v-card color="amber lighten-2" tile flat>
                      <v-card-text>
                        Text {{ lorem }} {{ lorem }} {{ lorem }}
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Menu from '@/components/product/Menu'
import Header from '@/components/product/Header'
export default {
  components: {
    Menu,
    Header
  }
}
</script>

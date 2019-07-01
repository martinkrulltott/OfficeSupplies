<template>
  <v-app light>
    <v-toolbar fixed app>
      <Header />
      <Navigation />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>Footer</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
export default {
  components: {
    Header,
    Navigation
  }
}
</script>

<template>
  <v-app class="white">
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

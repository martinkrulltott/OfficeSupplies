<template>
  <v-app class="white">
    <Header />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer fixed app>
      <span>Footer</span>
    </v-footer>
  </v-app>
</template>

<script>
import Header from '@/components/common/Header'
export default {
  components: {
    Header
  }
}
</script>

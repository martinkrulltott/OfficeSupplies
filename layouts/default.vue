<template>
  <v-app class="white">
    <PageHeader />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer height="auto">
      <PageFooter />
    </v-footer>
  </v-app>
</template>

<script>
import PageHeader from '~/components/PageHeader'
import PageFooter from '~/components/PageFooter'
export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

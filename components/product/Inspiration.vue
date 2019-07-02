<template>
  <v-card tile flat dark color="accent">
    <v-card-title primary-title class="pb-0">
      <h4 class="title mb-0">{{ inspiration.title }}</h4>
    </v-card-title>
    <v-card-text class="review">
      {{ inspiration.copy }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Inspiration',
  props: {
    inspiration: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.truncated {
  max-height: 130px;
  overflow: hidden;
}
</style>

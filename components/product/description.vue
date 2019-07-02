<template>
  <v-layout column>
    <v-flex d-flex>
      <v-card tile flat>
        <v-card-text class="pt-1" :class="{ truncated: truncated }">
          {{ product.description }}
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex d-flex xs4>
      <v-btn
        depressed
        small
        outline
        color="primary"
        class="mx-3"
        @click="toggleTextTruncation()"
      >
        <span v-if="truncated">Read more</span>
        <span v-else>Read less</span>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Description',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      truncated: true
    }
  },
  methods: {
    toggleTextTruncation() {
      this.truncated = !this.truncated
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

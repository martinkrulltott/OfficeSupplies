<template>
  <v-layout row wrap align-start align-content-start ma-2>
    <v-flex d-flex xs12 pa-1>
      <v-img
        :src="selectedImage.src"
        alt="selectedImage.alt"
        aspect-ratio="1"
        contain
      />
    </v-flex>
    <v-flex
      v-for="(image, index) in product.images"
      :key="index"
      d-flex
      xs4
      pa-1
    >
      <v-img
        :src="image.src"
        alt="image.alt"
        aspect-ratio="1"
        contain
        @click="selectImage(index)"
        class="image-thumbnail"
      />
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Images',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      selectedImage: {
        src: '',
        alt: ''
      }
    }
  },
  mounted() {
    this.selectedImage = this.product.images[0]
  },
  methods: {
    selectImage(index) {
      this.selectedImage = this.product.images[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.truncated {
  max-height: 130px;
  overflow: hidden;
}
.image-thumbnail {
  cursor: pointer;
}
</style>

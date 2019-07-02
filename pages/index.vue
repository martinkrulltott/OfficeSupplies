<template>
  <v-container fluid>
    <v-layout row>
      <v-flex md2 row class="hidden-sm-and-down">
        <Menu />
      </v-flex>
      <v-flex md10 row>
        <v-layout row wrap>
          <v-flex class="hidden-md-and-up">
            <Header :product="product" />
          </v-flex>
          <v-flex d-flex xs12 md4 child-flex>
            <v-card color="accent" tile flat>
              <v-card-text>Images</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex xs12 md8>
            <v-layout row wrap>
              <v-flex class="hidden-sm-and-down">
                <Header :product="product" />
              </v-flex>
              <v-flex d-flex>
                <Description :product="product" />
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
import Description from '@/components/product/Description'
export default {
  components: {
    Menu,
    Header,
    Description
  },
  data() {
    return {
      product: {
        title: 'Paper',
        price: '565',
        oldPrice: '670',
        variants: ['White', 'Blue', 'Red', 'Pink'],
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor velit eget nisi hendrerit sollicitudin. Nam rutrum tortor ut imperdiet ultrices. Phasellus nibh leo, cursus nec mi faucibus, posuere iaculis odio. Aliquam varius luctus neque eleifend auctor. Etiam tempus lobortis nunc quis lobortis. Aliquam nec erat in dui vestibulum viverra. Integer at faucibus ex. In hac habitasse platea dictumst. Quisque condimentum orci vel sodales aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed euismod sapien, id luctus ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer eu augue pulvinar, consequat leo viverra, porttitor eros. Aenean sodales, nisi at lacinia malesuada, quam est euismod metus, et consequat leo urna in neque. In lobortis euismod ex, a aliquam nisi sagittis nec. Curabitur lobortis nisi vitae ante consequat, at iaculis tortor tincidunt. Morbi ipsum velit, maximus at leo non, rutrum rhoncus nunc. Nunc faucibus bibendum nisl eget finibus. Vivamus dignissim nulla ultricies tempus mollis. Nullam quam sapien, dapibus vel urna nec, euismod maximus nulla. Vestibulum a pellentesque odio, vel imperdiet felis. Donec in risus ex. Integer a pulvinar ipsum. Duis eu dictum lorem. Curabitur non ante quis magna porta consectetur at eget tellus. Aenean tellus lorem, tristique viverra consequat vel, vulputate sit amet eros. Proin a vestibulum elit, vitae rutrum arcu. Aenean ut facilisis erat. Curabitur viverra a lectus a gravida. Proin hendrerit libero ante, eu tincidunt nunc sagittis quis. Quisque commodo sapien sed eleifend semper. Vivamus ullamcorper justo a ante condimentum, et sodales tellus viverra. Mauris turpis eros, interdum sed porta nec, vehicula in ipsum. Duis ut felis ut massa finibus semper hendrerit ut ligula. Aenean mattis diam sed enim finibus lobortis. Cras nisi nibh, dignissim sit amet ornare ac, efficitur ut turpis. Quisque aliquam ex at risus vulputate cursus. Donec cursus fermentum sollicitudin.'
      }
    }
  }
}
</script>

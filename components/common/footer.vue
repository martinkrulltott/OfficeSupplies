<template>
  <v-layout row wrap pa-4>
    <v-flex xs12 mb-2>
      <v-img
        src="OfficeSupplies.png"
        alt="OfficeSupplies logo"
        height="40"
        contain
        position="left center"
      />
    </v-flex>
    <v-flex md6 sm12 xs12 pr-2>
      <p class="caption ma-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus sapien nunc eget odio.
      </p>
    </v-flex>
    <v-flex md3 sm6 xs12>
      <h4 class="body-2">Bestsellers</h4>
      <v-layout row wrap>
        <v-flex xs6>
          <ul>
            <li
              v-for="(product, index) in bestsellers.slice(0, 4)"
              :key="`product-${index}`"
            >
              <a href="#" class="primary--text">{{ product }}</a>
            </li>
          </ul>
        </v-flex>
        <v-flex xs6>
          <ul>
            <li
              v-for="(product, index) in bestsellers.slice(4, 8)"
              :key="`product-${index}`"
            >
              <a href="#" class="primary--text">{{ product }}</a>
            </li>
          </ul>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md3 sm6 xs12>
      <h4 class="body-2">We're social!</h4>
      <v-btn
        v-for="(social, index) in socials"
        :key="`social-${index}`"
        color="primary"
        class="ma-1"
        small
        outline
        @click="true"
      >
        <v-icon left>{{ social.icon }}</v-icon>
        {{ social.name }}
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      bestsellers: [
        'A4',
        'A5',
        'Pens',
        'Staplers',
        'Tape',
        'Pencils',
        'Envelopes',
        'Paper'
      ],
      socials: [
        {
          icon: 'fa-facebook',
          name: 'Facebook'
        },
        {
          icon: 'fa-linkedin',
          name: 'Linkedin'
        },
        {
          icon: 'fa-instagram',
          name: 'Instagram'
        }
      ]
    }
  }
}
</script>

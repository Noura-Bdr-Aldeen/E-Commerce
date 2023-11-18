<template>
  <v-card class="mx-auto" max-width="344">

    <router-link :to="'/PageDetail/' + furniture.id">
  <v-img :src="furniture.image" height="250" cover></v-img>
</router-link>

    <v-card-title>
      <slot name="name"></slot>
    </v-card-title>

    <v-card-subtitle>
      <slot name="username"></slot>
    </v-card-subtitle>

    <v-card-title>
      <slot name="action2"></slot>
    </v-card-title>

    <v-divider color="blue-darken-1"></v-divider>

    <v-card-actions class="d-flex justify-end">

      <v-btn  v-if="$route.path != '/fav'" icon="mdi-cart" @click="cart.addItem(furniture)" color="blue-darken-1"></v-btn>

      <v-icon  v-if="$route.path ==  '/ProductPage'" icon="mdi-heart" color="orange-darken-1" @click="fav.addItem(furniture)"></v-icon>

      <slot name="action"></slot>
      
      </v-card-actions>

  </v-card>
</template>

<script>

import { useCartStore } from "@/store/cart"
import { useFavStore } from "@/store/fav"


export default {
  data() {
    return {
      cart: useCartStore(),
      fav: useFavStore()
    }
  },
  props: {
    furniture: {
      type: Object,
      required: true
    }
  }
}

</script>
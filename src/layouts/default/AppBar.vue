<template>
  <v-app-bar image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIkVJ5nSDXSecwQBnA9RcuPW-Q918KWJi4_frftScXLmp69dyBsGgWczxEuAmNP3J4p8E&usqp=CAU">
    
      <v-app-bar-title class="text-h4 pa-16 text-grey">
        Furni<span class="text-blue-darken-1 text-h3">.</span>
      </v-app-bar-title>
      <v-btn @click="toggleTheme" class="text-capitalize text-grey-darken-1"><v-icon  icon="mdi-lightbulb-on">
      </v-icon></v-btn>
      <v-btn><router-link class="text-decoration-none text-grey-darken-1 text-capitalize" to="/">Home</router-link></v-btn>
      <v-btn><router-link class="text-decoration-none text-grey-darken-1 text-capitalize"
          to="/AboutBage">About</router-link></v-btn>
      <v-btn><router-link class="text-decoration-none text-grey-darken-1 text-capitalize"
          to="/ProductPage">products</router-link></v-btn>
      <v-btn to="/fav" icon="mdi-heart" class="text-orange-darken-2"></v-btn>
      <v-btn to="/cart" icon="mdi-cart" class="text-blue-darken-1"></v-btn>
      </v-app-bar>
</template>

<script setup>

import { useTheme } from 'vuetify'
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
  // const elements = document.querySelectorAll('.background-common');
  //     elements.forEach((element) => {
  //       element.classList.remove('background-common');
  //     });
}
</script>
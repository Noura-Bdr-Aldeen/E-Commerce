<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12" lg="3" sm="3">
        <v-img src="../../../images/palastin.png" width="300"></v-img>
      </v-col>
      <v-col class="mt-16" cols="12" lg="6" sm="8">
        <v-img class="mt-6" src="../../../images/quran.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
  <v-footer class="">
       <v-container>
      <h1 class="text-h4 text-grey">furni<span class="text-blue-darken-1 text-h3">.</span></h1>
      <v-row>
          <v-col cols="12" sm="4" lg="4">
                    <p class="text-left text-grey-1 pb-5 pt-5">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
          <a href="#">
            <v-btn v-for="icon in icons" :key="icon"  :icon="icon" variant="text" color="blue-darken-1"></v-btn>
          </a>
        </v-col>
      
        <v-col cols="12" lg="2" sm="2">
          <a href="" class="text-decoration-none text-black">
            <v-list :items="items1"></v-list>
          </a>
        </v-col>
        <v-col  cols="12" lg="2" sm="2">
          <a href="" class="text-decoration-none text-black">
          <v-list :items="items2"></v-list>
        </a>
        </v-col>

     
        <v-col  cols="12" lg="2" sm="2">
          <a href="" class="text-decoration-none text-black">
          <v-list :items="items3"></v-list></a>
        </v-col>
      
        <v-col  cols="12" lg="2" sm="2">
          <a href="" class="text-decoration-none text-black">
          <v-list :items="items4"></v-list></a>
        </v-col>

      </v-row>
      <v-divider :thickness="2" color="blue-darken-4" class="mt-14"></v-divider>
      <v-row class="pt-8 ">
        <v-col cols="8" lg="8" sm="8">
          <p>Copyright ©2023. All Rights Reserved. — Designed with love by Untree.co</p>
        </v-col>
       
          <v-col cols="12" lg="2" sm="2"><a class="text-decoration-none text-black" href="">Terms&Conditions</a></v-col>
          <v-col cols="12" lg="2" sm="2"><a class="text-decoration-none text-black" href="">Privacy Policy</a></v-col>
       
      </v-row>
    </v-container>
  </v-footer>
  </template>

<script>

export default {
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],

    items1: [
      {title: 'About us' },{title: 'Services' },{title: 'Blog' },{title: 'Contact us' },
      ],

      items2: [
      {title: 'Support' },{title: 'Knowledge base' },{title: 'Live chat' }
      ],
   
      items3: [
      {title: 'Jobs' },{title: 'Our team' },{title: 'Leadership' }
      ],
      items4: [
      {title: 'Nordic Chair' },{title: 'Kruzo Aero' },{title: 'Ergonomic Chair' }
      ],
  }),
}
</script>



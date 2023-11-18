<template>
  <section class="background-common pa-16">

    <v-container class="d-flex">
      <v-row>
        <v-col cols="12" sm="4" lg="4">
          <v-img :src="furnitures2.image"></v-img>
        </v-col>
        <v-col cols="12" sm="5" lg="4">
          <h6 class="text-h6 text-grey-darken-2">
            <span class="text-blue-darken-1">Name: </span>
            {{ furnitures2.name }}
          </h6>
          <h6 class="text-h6 text-grey-darken-2"> <span class="text-blue-darken-1">Price: 

          </span>{{ furnitures2.price }}
          </h6>
          <h6 class="text-h6 text-grey-darken-2"><span class="text-blue-darken-1">Description:</span>
           {{
            furnitures2.description }}</h6>
          <h6 class="text-h6 text-grey-darken-2"><span class="text-blue-darken-1">Style:</span> 
            {{ furnitures2.styles }}
          </h6>


        </v-col>
        <v-col cols="12" sm="3" lg="3"><v-img src="../../images/palastin2.png"></v-img></v-col>
      </v-row>


    </v-container>

  </section>
</template>
<script >

import { ref } from "vue";

export default {

  created() {
    this.id = ref(this.$route.params.id)
    // Now you can use the id to fetch the furniture from your API
  },
  data() {
    return {
      furnitures2: [],
      id: null
    }
  },
  methods: {
    getFurnitureById() {
      fetch('../product.json')
        .then(response => response.json())
        .then(data => {
          this.furnitures2 = data.find(furniture => furniture.id == this.id)
        });
    }
  }


  ,
  mounted() {
    this.getFurnitureById()
  }
}

</script>
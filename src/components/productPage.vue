<template>
  <section class="background-common pa-16">

    <v-container class="d-flex">
      <v-row class="d-flex justify-center">
        <v-col cols="12" lg="3"  sm="4" xs="3" v-for="furniture in paginatedFurnitures" :key="furniture.id">
          <CardProducts :furniture="furniture">
            <template v-slot:name>{{ furniture.name }}</template>
            <template v-slot:username>{{ furniture.price }}</template>
          </CardProducts>
        </v-col>
        <v-col cols="3" lg="9" sm="9" xs="3">
            <v-pagination  v-model="currentPage" :length="Math.ceil(furnitures.length / itemsPerPage)"
            rounded="circle"></v-pagination>
        </v-col>
      </v-row>
    </v-container>


  </section>
</template>

<script >
import CardProducts from '../components/CardProducts.vue'
export default {
  components: {
    CardProducts
  },
  data() {
    return {
      furnitures: [],
      cart: [],
      currentPage: 1,
      itemsPerPage: 8 // Number of items per page
    }
  },
  methods: {
    getfurnitures() {
      fetch('./product.json')
        .then(response => response.json())
        .then(data => this.furnitures = data)
    }
  },
  computed: {
  paginatedFurnitures() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.furnitures.slice(startIndex, endIndex);
  }
},
  mounted() {
    this.getfurnitures()
  }
}

</script>
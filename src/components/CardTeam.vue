<template>
    <v-card 
      class="mx-auto"
      width="216px"
      
     
    
    >
      <v-img
        :src="user.image"
        contain
      >
    </v-img>
  
      <v-card-title class="text-decoration-underline text-blue-darken-1" >
        <slot name="fullName"></slot>
      </v-card-title>
  
      <p  class=" text-grey-1 pl-4 pb-4">
        <slot name="role"></slot>
      </p>

    
        <p class=" text-grey pl-4 text-xsm-left">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
     

      <v-card-actions>
       <a href="#"  class=" text-blue-darken-1 pl-2 font-weight-black pa-3">learn more</a>
      </v-card-actions>
  
 
    </v-card>
  </template>

  <script>
export default{
  props:{
    user:{
      type:Object,
      required:true
    }
  }
}
  </script>
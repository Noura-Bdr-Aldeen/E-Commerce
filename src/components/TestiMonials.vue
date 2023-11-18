<script setup>
//
</script>

<template>
  <section class="background-common pa-16">
    <h1 class="text-center">Testimonials</h1>
    <v-container class="pb-16"> 
            <v-row class="d-flex justify-center">
              <v-col cols="12" lg="8">
                <v-carousel class="background-carousel">
                  <v-carousel-item v-for="n in 4" :key="n">
                    <div class="">
                      <p class="text-center text-grey-darken-1 font-weight-black mb-16 pt-16">“Donec facilisis quam ut purus rutrum
                        lobortis. Donec vitae odio quis nisl dapibus<br> malesuada. Nullam ac aliquet velit. Aliquam vulputate
                        velit
                        imperdiet dolor tempor tristique.<br> Pellentesque habitant morbi tristique senectus et netus et
                        malesuada
                        fames ac turpis<br>egestas. Integer convallis volutpat dui quis scelerisque.”</p>
                      <v-img class="rounded-circle ma-auto " width="90" cover src="../../images/person-1.png"></v-img>
                      <p class="text-center font-weight-black">Maria Jones</p>
                      <p class="text-center text-grey-darken-3">CEO, Co-Founder, XYZ Inc.
                      </p>
                    </div>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
             </v-container>




  </section>
</template>



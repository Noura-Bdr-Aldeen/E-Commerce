<template>
    <section class="background-common pt-16">
        <v-container class="pa-16">
            <v-row>
                <v-col cols="12" lg="3" sm="3" >
                    <h4 class="text-h4 mb-4">Crafted with excellent material.</h4>
                    <p class="mb-4 text-grey">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                        vulputate velit imperdiet dolor tempor tristique. </p>
                    <v-btn rounded="xl" size="large"
                        class="mb-2 text-capitalize  bg-blue-darken-1 "><router-link class="text-decoration-none text-white" to="/ProductPage">load more</router-link></v-btn>
                </v-col>
                <v-col cols="12"  lg="3" sm="3">
                    <v-img class="hover-product" src="../../images/product-1.png"></v-img>
                    <h6 class="text-h6 text-center">Nordic Chair</h6>
                    <p class="text-center font-weight-bold">$50.00</p>
                </v-col>
                <v-col cols="12"  lg="3" sm="3">
                    <v-img class="hover-product" src="../../images/product-2.png"></v-img>
                    <h6 class="text-h6 text-center">Kruzo Aero Chair</h6>
                    <p class="text-center font-weight-bold">$78.00</p>
                </v-col>
                <v-col cols="12"  lg="3" sm="3">
                    <v-img class="hover-product" src="../../images/product-3.png"></v-img>
                    <h6 class="text-h6 text-center">Ergonomic Chair</h6>
                    <p class="text-center font-weight-bold">$43.00</p>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>


<script>

</script>
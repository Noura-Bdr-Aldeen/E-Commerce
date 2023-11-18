<template>
    <section class="background-common">
        <v-container class="pb-16">
            <v-row class="justify-center">
                <v-col lg="7" sm="7">
                    <v-carousel>
                        <v-carousel-item src=  "../../images/image10.jpg"
                           cover ></v-carousel-item>
                        <v-carousel-item src="../../images/image1.jpg" cover></v-carousel-item>
                        <v-carousel-item src="../../images/image3.jpg" cover></v-carousel-item>
                        <v-carousel-item src="https://i.pinimg.com/736x/19/d9/ef/19d9ef1b51cb4b3591ecf4bd1f2ac98b.jpg"
                        cover  ></v-carousel-item>
                    </v-carousel>
                </v-col>
            </v-row>
        </v-container>

        <v-container class="pt-16 pb-16">

            <v-row class="d-flex justify-center">
                <v-col cols="12" lg="5" sm="5">
                    <p class="text-h5 font-weight-bold pb-3 pt-4">Why Choose Us</p>
                    <p class=" pa-1 mb-10">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                        vulputate velit imperdiet dolor tempor tristique
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                        imperdiet dolor tempor tristique.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                        velit Aliquam vulputate velit imperdiet dolor tempor tristique.
                        Donec vitae odio quis nisl dapibus malesuada Nullam ac aliquet velit Aliquam vulputate velit
                        imperdiet dolor tempor tristique </p>
                    <v-btn rounded="xl" size="large" class="button-explore-about mb-2 text-capitalize"><router-link
                            class="text-decoration-none text-white" to="/ProductPage">Explore</router-link></v-btn>


                </v-col>
                <v-col cols="12" lg="5" sm="6" class="d-flex justify-end">
                    <v-img class="zindex" src="../../images/circle (6).png" width="300" height="250"></v-img>
                    <v-img src="../../images/why-choose-us-img.jpg" width="375" height="430"
                        class="rounded-t-xl rounded-b-xl"></v-img>
                </v-col>
            </v-row>

            <v-container class="pt-16 ">
                <v-row class="d-flex justify-center">
                    <v-col cols="12" lg="6">
                        <v-img src="../../images/image.png"></v-img>
                    </v-col>
                    <v-col cols="12" lg="6">
                        <p class="text-h4 pb-3 pt-16 text-left">We Help You Make Modern Interior Design</p>
                        <p class=" pa-1 ">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                            vulputate velit imperdiet dolor tempor tristique
                            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit
                            imperdiet dolor tempor tristique.Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                            velit Aliquam Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                            vulputate velit imperdiet dolor tempor tristique.Donec vitae odio quis nisl dapibus malesuada.
                            Nullam ac aliquet velit Aliquam </p>
                        <!-- <v-img class="rounded-t-xl  rounded-b-xl" src="../../images/post-2.jpg" height="250" ></v-img> -->

                    </v-col>

                </v-row>
            </v-container>

        </v-container>

        <v-container>
            <h1 class="text-center pb-10">Services</h1>

            <v-row class="justify-center">
                <v-col cols="12" lg="3" sm="3" xs="3">
                    <v-card class="pa-2" max-width="200" height="240">

                        <v-icon icon="mdi-truck-fast" color="orange-darken-1"></v-icon>
                        <p class="text-h6 font-weight-bold text-blue-darken-1  pb-3 pt-4   text-no-wrap">Fast & Free
                            Shipping</p>
                        <p class="text-p  text-left">Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                            aliquet
                            velit. Aliquam vulputate.</p>

                    </v-card>
                </v-col>
                <v-col cols="12" lg="3" sm="3" xs="3">
                    <v-card class="pa-2" max-width="200" height="240">
                        <v-icon icon="mdi-store-24-hour" color="orange-darken-1"></v-icon>
                        <p class="text-h6 font-weight-bold text-blue-darken-1 pb-3 pt-4   text-no-wrap">24/7 Support</p>
                        <p class="text-p  text-left">Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                            aliquet
                            velit. Aliquam vulputate.</p>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="3" sm="3" xs="3">
                    <v-card class="pa-2" max-width="200" height="240">
                        <v-icon icon="mdi-shopping-outline" color="orange-darken-1"></v-icon>
                        <p class="text-h6 font-weight-bold text-blue-darken-1 pb-3 pt-4   text-no-wrap">Easy to Shop</p>
                        <p class="text-p  text-left">Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                            aliquet
                            velit. Aliquam vulputate.</p>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="3" sm="3" xs="3">
                <v-card class="pa-2" max-width="200" height="240">
                    <v-icon icon="mdi-repeat" color="orange-darken-1"></v-icon>
                    <p class="text-h6 font-weight-bold text-blue-darken-1 pb-3 pt-4  text-no-wrap">Hassle Free Returns
                    </p>
                    <p class="text-p text-left">Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet
                        velit. Aliquam vulputate.</p>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</section></template>

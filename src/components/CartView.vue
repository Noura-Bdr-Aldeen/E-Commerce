<script setup>
import { useCartStore } from "@/store/cart";
import { computed } from "vue";
import CardProducts from "@/components/CardProducts.vue";
const cart = useCartStore();
const furnitures = computed(() => cart.items);

</script>

<template>
    <section class="background-common">
        <v-container>
            <h1 class="text-h3 text-center pa-10 text-blue-grey">cart</h1>
            <v-row class="d-flex justify-space-between">
                <v-col cols="12" sm="4" lg="3" v-for="furniture in furnitures" :key="furniture.id" >
                    <CardProducts :furniture="furniture">
                        <template v-slot:name>{{ furniture.name }}</template>
                        <template v-slot:username>{{ furniture.price }}</template>
                        <template #action>
                            <v-btn icon="mdi-delete" color="error" @click="cart.removeItem(furniture)">
                            </v-btn>
                        </template>
                        <template #action2>
                            <span class="text-subtitle-1 text-blue-darken-1">Quantity:
                                <span class="text-subtitle-1 text-red">{{ furniture.quantity || 0 }}</span></span>
                        </template>
                    </CardProducts>
                </v-col>
                <v-col cols="12" sm="3" lg="3"><v-img src="../../images/palastin2.png"></v-img></v-col>

               

            </v-row>
        </v-container>
    </section>
</template>
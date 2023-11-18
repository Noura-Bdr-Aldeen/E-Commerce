<template>
  <section class="background-hero pt-16">
    <v-container class="pb-16">
      <v-row>
        <v-col cols="12" lg="4" sm="5">
          <p class="text-h3 text-shades-white mt-10">
            <span class="word active">Modern</span>
            <span class="word text-orange-darken-2">Modern</span>
            Interior Design Studio
          </p>
          <p class="text-grey-1 pt-6">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique.</p>
        </v-col>
        <v-col cols="12" lg="8" sm="7"><v-img src="../../images/hero.png"></v-img></v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';

let wordElements = ref(null);
let currentIndex = ref(0);

const flipWords = () => {
  wordElements.value[currentIndex.value].classList.remove('active');
  currentIndex.value = (currentIndex.value + 1) % wordElements.value.length;
  wordElements.value[currentIndex.value].classList.add('active');
}

onMounted(() => {
  wordElements.value = document.querySelectorAll('.word');
  setInterval(flipWords, 1000);
});
</script>

<style scoped>
.word {
  display: none;
}

.word.active {
  display: inline;
}

</style>

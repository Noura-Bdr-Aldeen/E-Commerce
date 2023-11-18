<template>
<HeroSection></HeroSection>
<ProductSection></ProductSection>
<OurTeam></OurTeam>
<TestiMonials></TestiMonials>
<CountactUs></CountactUs>

</template>

<script>
import HeroSection from "./HeroSection.vue"
import TestiMonials from "./TestiMonials.vue"
import OurTeam from "./OurTeam.vue";
import CountactUs from "./ContactUs.vue"
import ProductSection from "./ProductSection.vue";


export default {
  components: {
  HeroSection,TestiMonials,OurTeam,CountactUs,ProductSection
  }
  , 
}
</script>

<template>
  <section class="background-common pb-16">
    <h1 class="text-center pt-16 pb-4">Countact Us</h1>
    <v-container>
          <v-row>
            <v-col  cols="12" lg="8" sm="8">
              <v-form v-model="valid">
                  <v-row>
              <v-col cols="12" lg="4" sm="4">
                <v-label class="text-black">First name</v-label>
                <v-text-field v-model="firstname" :rules="nameRules" :counter="10" required hide-details variant="outlined"
                  class="bg-white"></v-text-field>
              </v-col>
              <v-col cols="12" lg="4" sm="4">
                <v-label class="text-black ">Last name</v-label>
                <v-text-field v-model="lastname" :rules="nameRules" :counter="10" hide-details required variant="outlined"
                  class="bg-white"></v-text-field>
              </v-col>
       
              <v-col cols="12"  lg="8" sm="8">
                <v-label class="text-black ">Email</v-label>
                <v-text-field v-model="email" :rules="emailRules" hide-details required variant="outlined"
                  class="bg-white"></v-text-field>
              </v-col>
              <v-col cols="12" lg="8" sm="8">
                <v-label class="text-black ">Message</v-label>
                <v-textarea hide-details variant="outlined" class="bg-white"></v-textarea>
                <v-btn type="submit" rounded="xl" size="large" class="mt-6 text-capitalize" color="blue-darken-1">Send
                  Message</v-btn>
              </v-col>
            </v-row>
            </v-form>
          </v-col>





           <v-col  cols="12" lg="4" sm="4">
                 <v-icon  color="blue-darken-1" icon="mdi-map-marker" size="x-large" class="pb-10 pt-16"></v-icon>
                <p class="pb-8 ">43 Raymouth Rd. Baltemoer,London3910</p>
                <v-icon color="blue-darken-1" icon="mdi-email" size="x-large" class="pb-2 "></v-icon>
                    <p class="pb-10 ">info@yourdomain.com</p>
                    <v-icon color="blue-darken-1" icon="mdi-phone" size="x-large" class="pb-2 "></v-icon>
             <p >+1 294 3925 3939</p>
           </v-col>

          
          </v-row>
            </v-container>
     
     

  </section>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: '',
    lastname: '',
    nameRules: [
      value => {
        if (value) return true

        return 'Name is required.'
      },
      value => {
        if (value?.length <= 10) return true

        return 'Name must be less than 10 characters.'
      },
    ],
    email: '',
    emailRules: [
      value => {
        if (value) return true

        return 'E-mail is requred.'
      },
      value => {
        if (/.+@.+\..+/.test(value)) return true

        return 'E-mail must be valid.'
      },
    ],
  }),
}
</script>

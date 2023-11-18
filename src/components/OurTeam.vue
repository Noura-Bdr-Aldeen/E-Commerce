<template>
      <section class="background-common pa-16">
    <h1 class="text-center pt-10 pb-4">Our Team</h1>
    <v-container class="d-flex" >
          <v-row>
            <v-col cols="12" sm="6" lg="3" v-for="user in users" :key="user.id">
              <CardTeam :user="user">
                <template v-slot:fullName>{{ user.name }}</template>
                <template v-slot:role>{{ user.Jobposition }}</template>
                        </CardTeam>
            </v-col>
          </v-row>

    </v-container>

  </section>
</template>

<script >
import CardTeam from "./CardTeam.vue"
export default {

    components:{
        CardTeam
    },
    data() {
    return {
      users: [],
       }
  },
  methods: {
    getUsers() {
      fetch('./usersfromapi.json')
        .then(response => response.json())
        .then(data => this.users = data.filter(t => t.id <= 4))
    }
  }


,
  mounted() {
    this.getUsers()
  }
}
</script>
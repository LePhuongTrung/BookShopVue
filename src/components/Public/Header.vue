<template>
    <nav>
        <v-app-bar align-center app color="#d1d2d4" dark style="height:66px">
            <v-spacer></v-spacer>
            <v-btn text class="ml-auto" color="black" to="/">Home</v-btn>
            <v-btn text class="ml-auto" color="black" to="/Shop">Shop</v-btn>
            <v-btn text class="ml-auto" color="black" to="/Cart">Cart</v-btn>
            <v-btn text class="ml-auto" color="black" to="/Contact">Contact</v-btn>
            <v-spacer></v-spacer>

            <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10">
                <v-avatar size="40">
                    <v-img @click="auth" src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                </v-avatar>
            </v-badge>
        </v-app-bar>
    </nav>
  </template>
  
  <script>
// import auth from '../../store/modules/auth';

  export default {
      name:'Header',
      data:()=>({
          drawer:null,
          model:'',
          search:null,
          movies: []
      }),
      methods: {
        auth(){
            if (this.$store.getters.isAuthenticated){
                this.$router.push({name: 'Login'})
            } else {
                console.log("No login")
            }
        }
      }
  }
  </script>
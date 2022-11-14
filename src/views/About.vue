<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer="drawer" />
    <v-container>
      <v-toolbar flat color="rgba(0,0,0,0)">
        <v-btn
          icon
          dark
          class="d-lg-none d-xl-flex"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          label="Search on title"
          color="#bfbfbf"
          class="pt-5 d-none d-sm-flex"
          dark
          filled
          prepend-inner-icon="mdi-magnify"
          solo
          flat
          background-color="#bfbfbf"
          rounded
          outlined
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-btn dark class="mr-2" color="#000000">
          <v-icon left>fas fa-filter</v-icon>
          Filtre
        </v-btn>
        <v-btn dark class="mr-2" color="#000000">
          <v-icon left>fas fa-upload</v-icon>
          Export
        </v-btn>
      </v-toolbar>
      <h1 class="#d0d0d0--text" >SALES</h1>
      <p class="#d0d0d0--text">
        Book 1 blessing of the Creator, why don't we accept it.
      </p>
      <v-app-bar dark color="#bfbfbf" flat class="">
        <v-tabs color="#6F0DFF">
          <v-tabs-slider color="#6F0DFF" ></v-tabs-slider>

          <v-tab class="withoutupercase">Biographies</v-tab>
          <v-tab class="withoutupercase">Business</v-tab>
          <v-tab class="withoutupercase">comics</v-tab>
          <v-tab class="withoutupercase">Tech</v-tab>
          <v-tab class="withoutupercase">Cooking</v-tab>
          <v-tab class="withoutupercase">History</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-btn dark text class="d-none d-sm-flex">
          <v-icon left>mdi-magnify</v-icon>
          SEARCH
        </v-btn>
        <v-btn rounded color="white" class="black--text">
          List
          <v-icon right>mdi-format-list-bulleted</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-app-bar>
      <v-divider color="grey"></v-divider>
      <v-toolbar flat color="rgba(0,0,0,0)">
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn dark class="mr-2 withoutupercase d-none d-sm-flex">
          See All (10)
        </v-btn>
        <v-btn color="black" class="mr-2" outlined>
          <v-icon left color="black" >mdi-chevron-left</v-icon>
          <v-icon right color="black">mdi-chevron-right</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row class="mt-n14">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="4"
          lg="3"
          v-for="book in books"
          :key="book.i"
        >
          <v-card
            class="mx-auto my-12 rounded-xl"
            max-width="374"
            color="#151515"
          >
            <v-img height="170" :src="book.imgUrl"></v-img>
            <v-toolbar color="transparent" class="mt-n7" flat>
              <v-spacer></v-spacer>
              <v-avatar color="black" rounded class="mr-2" dark>
                <div class="three">
                  <div class="four">
                    <span class="white--text caption">{{ book.price }}</span>
                  </div>
                  <div class="five">
                    <span class="green--text caption">Get</span>
                  </div>
                </div>
              </v-avatar>
            </v-toolbar>
            <v-card-text class="white--text text-grey-darken-1 mt-n2 text-center">{{
              book.title
            }}</v-card-text>
            <v-card-title class="grey--text caption">{{
              book.category
            }}</v-card-title>
            <v-card-title class="grey--text text-grey-darken-1 caption mt-n6">{{
              book.author
            }}</v-card-title>
            <v-card-text class="mt-n4">
              <v-chip-group
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip label dark>{{ book.shop }}</v-chip>
                <v-spacer></v-spacer>
              </v-chip-group>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-toolbar flat color="rgba(0,0,0,0) " class="mt-n14">
        <v-toolbar-title class="black--text ml-4"
          >Recent Orders</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-btn dark class="mr-2 withoutupercase d-none d-sm-flex">
          See All (129)
        </v-btn>
        <v-btn color="black" class="mr-2" outlined>
          <v-icon left color="black">mdi-chevron-left</v-icon>
          <v-icon right color="black">mdi-chevron-right</v-icon>
        </v-btn>
      </v-toolbar>
      <v-row class="mt-n10">
        <v-col
          cols="12"
          xs="12"
          sm="6"
          md="3"
          v-for="(order, i) in orders"
          :key="i"
        >
          <v-card
            class="mx-auto my-12 rounded-lg"
            max-width="374"
            color="#bfbfbf"
          >
            <v-toolbar color="transparent" class="mt-n6" flat>
              <v-avatar color="white" rounded class="mr-2">
                <v-img :src="order.pic" contain></v-img>
              </v-avatar>
              <v-spacer></v-spacer>
              <span class="white--text">{{ order.title }}</span>
              <v-spacer></v-spacer>
              <v-avatar rounded class="mr-2" dark>
                <div class="three">
                  <div class="four">
                    <span class="white--text">{{ order.price }}</span>
                  </div>
                  <div class="six">
                    <span class="orange--text caption">Buy</span>
                  </div>
                </div>
              </v-avatar>
            </v-toolbar>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../components/Public/SideBar.vue";
import axios from "axios";
export default {
  name: "About",
  mounted(){
    axios.get('http://localhost:3002/bookapi/books/1/5').then((response) =>{
      this.books = response.data.docs
      console.log(response.data.docs);
    })

  },
  data: () => ({
    books:undefined,
    selection: 1,
    drawer: true,
    orders: [
      {
        pic: "5.png",
        price: "$465",
        title: "Nike Air MAx",
      },
      {
        pic: "6.png",
        price: "$714",
        title: "Nike Air MAx",
      },
      {
        pic: "7.png",
        price: "$982",
        title: "Nike Air MAx",
      },
      {
        pic: "8.png",
        price: "$394",
        title: "Nike Air MAx",
      },
    ],
  }),
  components: {
    SideBar,
  },
  methods: {},
};
</script>
<style scoped>
.v-tab.withoutupercase {
  text-transform: none !important;
}
.v-tabs {
  width: 50% !important;
}
.v-btn.withoutupercase {
  text-transform: none !important;
}
/*div{
  display:inline-block;
  float:left;
  color:#fff;
  font-size:10px;
}*/

.three {
  width: 50px;
  height: 50px;
}

.four {
  width: 50px;
  height: 25px;
  background: black;
}
.five {
  width: 50px;
  height: 25px;
  background: #042a0f;
}
.six {
  width: 50px;
  height: 25px;
  background: #2c2107;
}
</style>

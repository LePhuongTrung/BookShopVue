<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Login in to Your Account</h4>
                    <h6 class="text-center  grey--text ">Log in to your account so you can continue builiding <br>and
                      editing your onboarding flows</h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field label="Email" outlined dense color="blue" autocomplete="false"
                          v-model="formLogin.email" class="mt-16" />
                        <v-text-field label="Password" outlined dense color="blue" autocomplete="false"
                          v-model="formLogin.password" type="password" />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="Remember Me" class="mt-n1" color="blue"> </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text">Forgot password</span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="LogIn">Log in</v-btn>

                        <h5 class="text-center  grey--text mt-4 mb-3">Or Log in using</h5>
                        <div class="d-flex  justify-space-between align-center mx-10 mb-16">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="blue rounded-bl-xl">
                  <div style="  text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center ">Don't Have an Account Yet?</h3>
                      <h6 class="text-center">Let's get you all set up so you can start creating your your first<br>
                        onboarding experience</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">SIGN UP</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="blue rounded-br-xl">
                  <div style="  text-align: center; padding: 180px 0;">
                    <v-card-text class="white--text">
                      <h3 class="text-center ">Alredy Signed up?</h3>
                      <h6 class="text-center">Log in to your account so you can continue building and<br> editing your
                        onboarding flows</h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">Log in</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Sign Up for an Account</h4>
                    <h6 class="text-center  grey--text ">Let's get you all set up so you can start creatin your <br>
                      first onboarding experiance</h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-text-field label="Name" outlined dense color="blue" autocomplete="false" class="mt-4"
                              v-model="formRegister.fullName" />
                          </v-col>
                          <v-col cols="12" sm="6">
                            <v-select :items="items" label="Role" outlined color="blue" class="mt-4"
                              v-model="formRegister.role"></v-select>
                          </v-col>
                        </v-row>
                        <v-text-field label="Email" outlined dense color="blue" autocomplete="false"
                          v-model="formRegister.email" />
                        <v-text-field label="Password" outlined dense color="blue" autocomplete="false" type="password"
                          v-model="formRegister.password" />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox label="I Accept AAE" class="mt-n1" color="blue"> </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4">Terms &Conditions</span>
                          </v-col>
                        </v-row>
                        <v-btn color="blue" dark block tile @click="Register">Sign up</v-btn>

                        <h5 class="text-center  grey--text mt-4 mb-3">Or Sign up using</h5>
                        <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="blue">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
    <Dialog :show="showDialog" :cancel="cancel" :confirm="confirm" title="Sign up successfully"
      description="Do you want to sign in?" />
  </v-container>
</template>

<script>
import axios from "axios";


export default {
  data: () => ({
    step: 1,
    formLogin: {
      email: '',
      password: '',
    },
    formRegister: {
      fullName: '',
      email: '',
      password: '',
      role: '',
    },
    items: ['user', 'seller'],
    showDialog: false,
  }),
  props: {
    source: String
  },
  methods: {
    async LogIn() {
      // try {
      //   const formLogin = new FormData();
      //   formLogin.append("email", this.formLogin.email);
      //   formLogin.append("password", this.formLogin.password);
      //     console.log("🚀 ~ file: Home.vue ~ line 166 ~ LogIn ~ formLogin", formLogin)
      //     await this.LogIn(formLogin);
      // } catch (error) {
      // console.log("🚀 ~ file: Home.vue ~ line 168 ~ Login ~ error", error)
      // }
      let result = await axios.post('http://localhost:3002/users/login', {
        email: this.formLogin.email,
        password: this.formLogin.password
      })
      if (result.status == 200) {
        localStorage.setItem('token', result.data.token);
        const check = localStorage.getItem('token');
        console.log("🚀 ~ file: Home.vue ~ line 220 ~ Login ~ check", check)
        this.$router.push({ name: 'About' })
      }
    },
    // async Register() {
    //   try {
    //     await this.Register(this.formRegister);
    //     this.showDialog = true;
    //   } catch (error) {
    //   console.log("🚀 ~ file: Home.vue ~ line 177 ~ Register ~ error", error)
    //   }
    // },
    async Register() {
      let result = await axios.post('http://localhost:3002/users/register', {
        email: this.formRegister.email,
        password: this.formRegister.password,
        fullname: this.formRegister.fullName,
        role: this.formRegister.role
      })
      console.log("🚀 ~ file: Home.vue ~ line 238 ~ Register ~ result", result)
      if (result.status == 200) {
        this.showDialog = true;
      }
    },
    cancel() {
      this.showDialog = false;
    },
    confirm() {
      this.showDialog = false;
      this.step--;
    }
  }


}
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}
</style>

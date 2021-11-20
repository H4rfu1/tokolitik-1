<template>
<div class="min-h-screen px-16 py-16 mx-auto flex flex-wrap items-center justify-center bg-theme1">
    <div class="lg:w-3/5 lg:pr-0 pr-0">
      <h1 class="title-font font-bold text-5xl ">Touta</h1>
      <p class="leading-relaxed mt-4 fon">Situs Kosmetik Halal Terlengkap & Terpercaya #1 di Indonesia.</p>
    </div>
    <div class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
        <h1 class="font-sans text-xl font-extrabold">Login</h1>
        <form @submit.prevent="login" class="pt-8 text-sm font-sans">
            <div class="pt-3 px-4 ">
                <label class="float-left" for="username">Username/Email/Phone Number</label>
                <input v-model="post.user_login" type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Enter username/email/phone number" required>
            </div>
            <div class="px-4 pt-5">
                <label class="float-left" for="password">Password</label>
                <input v-model="post.user_password" type="password" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Enter password">
            </div>
            <div class="px-4 py-3">
                <label class="float-left inline-flex items-center">
                    <input type="checkbox" class="float-left rounded border-gray-300 text-blue-600 shadow-sm focus:border-theme1 focus:ring focus:ring-offset-0 focus:ring-theme1 focus:ring-opacity-50" checked="">
                    <span class="ml-2">Ingat saya</span>
                </label>
                <a class="float-right text-blue-800 underline" href="http://">Lupa password?</a>
            </div>
            <div class="pt-12">
                <button type="submit" class="text-white font-bold bg-theme1 rounded-lg py-2 px-8 hover:bg-blue-500">
                    Login
                </button>
            </div>
        </form>
        <div class="pt-14 text-sm">
            <span>Tidak punya akun?</span>
            <router-link to="/daftar">
            <a class="text-blue-500" href="">Daftar disini</a>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'

const apiKey = process.env.VUE_APP_API_AUTH

// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.common.Authorization = 'Bearer' + localStorage.getItem('jwtToken')

export default {
  data: () => {
    return {
      post: { }
    //   username: '',
    //   password: ''
    }
  },
  methods: {
    login () {
      axios.post(apiKey + '/public/login/', this.post)
        .then((response) => {
        // axios.defaults.headers.common.Authorization = 'Bearer' + localStorage.getItem('jwtToken')
        //   console.log(response.data.token)
          const token = response.data.token
          localStorage.setItem('jwt-token', token)
          console.log(localStorage.getItem('jwt-token'))
          this.$router.push({
            name: 'Produk'
          })
          console.log('res', response.data.data)
        }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request)
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
}
</script>

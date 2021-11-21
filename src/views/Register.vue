<template>
<div class="min-h-screen px-16 py-16 mx-auto flex flex-wrap items-center justify-center bg-theme1">
    <div class="lg:w-3/5 lg:pr-0 pr-0">
      <h1 class="title-font font-bold text-5xl ">Tokolitik</h1>
      <p class="leading-relaxed mt-4 fon">Growth together with UMKM</p>
    </div>
    <div class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
        <h1 class="font-sans text-xl font-extrabold">Daftar</h1>
        <form @submit.prevent="daftar" class="pt-8 text-sm font-sans">
          <div class="pt-3 px-4 ">
              <label class="float-left" for="username">Username</label>
              <input v-model="post.username" type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Enter username">
              <small v-if="v$.post.username.$error" class="float-left text-red-600">Tidak boleh kosong</small>
          </div>
          <div class="pt-3 px-4">
              <label class="float-left" for="username">Email</label>
              <input v-model="post.email" type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Enter email">
              <small v-if="v$.post.email.$error" class="float-left text-red-600">Tidak boleh kosong</small>
          </div>
          <div class="px-4 pt-5">
              <label class="float-left" for="password">Password</label>
              <input v-model="post.password" type="password" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm" placeholder="Enter password">
              <small v-if="v$.post.password.$error" class="float-left text-red-600">Tidak boleh kosong</small>
          </div>
          <div class="pt-3 px-4">
            <label class="float-left" for="role">Role</label>
            <small v-if="v$.post.role.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            <div class="grid grid-cols-6 gap-6 pt-6">
              <div class="col-span-6 sm:col-span-3 mb-5">
                <div class="flex items-center">
                  <input
                  id="male"
                  value="seller"
                  v-model="post.role"
                  type="radio"
                  class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                  <label for="male" class="ml-3 block text-sm font-medium text-gray-700">
                    Seller
                  </label>
                </div>
              </div>
              <div class="col-span-6 sm:col-span-3 mb-5">
                <div class="flex items-center">
                  <input
                  id="female"
                  value="user"
                  v-model="post.role"
                  type="radio"
                  class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                  <label for="female" class="ml-3 block text-sm font-medium text-gray-700">
                    User
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="pt-12">
            <button type="submit" class="text-white font-bold bg-blue-500 rounded-lg py-2 px-8 hover:bg-blue-500">
                Daftar
            </button>
          </div>
        </form>
        <div class="pt-14 text-sm">
            <span>Sudah punya akun?</span>
            <router-link to="/login">
            <span class="text-blue-500">Login disini</span>
            </router-link>
        </div>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const apiKey = process.env.VUE_APP_API

// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.headers.common.Authorization = 'Bearer' + localStorage.getItem('jwtToken')

export default {
  data: () => {
    return {
      post: { }
    }
  },
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  validations () {
    return {
      post: {
        email: { required, email },
        username: { required },
        password: { required },
        role: { required }
      }
    }
  },
  methods: {
    async daftar () {
      const isFormCorrect = await this.v$.$validate()
      console.log(this.post)

      if (!isFormCorrect) return

      axios.post(apiKey + '/users/register/', this.post)
        .then((response) => {
          this.$router.push({
            name: 'Login'
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

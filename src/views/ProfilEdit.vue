<style>
/* .page {
  padding-top: 80px;
} */
.top {
  top: 4.5em;
}
.top2 {
  top: 128px;
}
</style>

<template>
  <BaseView>
    <template v-slot:main>
      <!-- header edit Profil -->
      <form @submit.prevent="UserStore" method="post">
        <div class="sticky top rounded-b-3xl bg-bg z-10">
          <div class="bg-themeWhite rounded-2xl py-3.5 px-4 flex">
            <div class="flex w-full">
              <router-link to="/profil">
              <svg xmlns="http://www.w3.org/2000/svg" class="cursor-pointer h-4 w-4 mt-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              </router-link>
              <h1 class="font-semibold text-lg ml-4">Edit Profil</h1>
            </div>
             <div class="text-right sm:px-6 float-right w-full">
              <button type="submit" class="text-blue-600 hover:text-blue-400 font-semibold">
                Simpan
              </button>
            </div>
          </div>
        </div>
        <div class="sticky top2 mb-2 border-t-0 border-b border-bg">
        </div>
        <!-- form profil -->
        <div class=" bg-themeWhite rounded-2xl my-2">
          <div class="py-8 px-12">
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                Username
                </label>
                <input
                  v-model="post.username"
                  type="text"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.username.$touch"
                  :class="{ 'border-red-600': v$.post.username.$error }"
                >
                <small v-if="v$.post.username.$error" class="text-red-600">Username tidak boleh kosong</small>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Email
                <!-- <span v-if="required" class="text-xs font-semibold">*</span> -->
                </label>
                <input
                  v-model="post.email"
                  type="email"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.email.$touch"
                  :class="{ 'border-red-600': v$.post.email.$error }"
                >
                <small v-if="v$.post.email.$error" class="text-red-600">Email tidak boleh kosong</small>
                <small v-if="v$.post.email.$error" class="text-red-600">Email tidak valid</small>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Password
                </label>
                <input
                  v-model="post.password"
                  type="password"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.password.$touch"
                  :class="{ 'border-red-600': v$.post.password.$error }"
                >
                <small v-if="v$.post.password.$error" class="text-red-600">Password tidak boleh kosong</small>
              </div>
            </div>
          </div>
        </div>
      </form>
    </template>
  </BaseView>
</template>

<script>
// @ is an alias to /src
import BaseView from '@/components/BaseView.vue'

// validate
import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import axios from 'axios'

const apiKey = process.env.VUE_APP_API

export default {
  name: 'ProfilEdit',
  components: {
    BaseView
  },
  data () {
    return {
      post: {},
      validation: []
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      post: {
        username: { required },
        password: { required },
        email: { required, email }
      }
    }
  },
  created () {
    const jwt = localStorage.getItem('jwt-token')
    console.log(jwt)
    axios.get(apiKey + '/users/profile/', {
      headers: {
        'auth-token': jwt
      }
    }).then((response) => {
      // if response.data.data
      this.post = response.data.data
      console.log(this.post)
    })
  },
  methods: {
    async UserStore () {
      console.log('aga')
      const isFormCorrect = await this.v$.$validate()
      console.log(this.post)

      if (!isFormCorrect) return

      this.loading = true

      axios.put(apiKey + '/users/profile/', this.post, {
        headers: {
          Authorization: localStorage.getItem('jwt-token')
        }
      })
        .then((response) => {
          this.loading = false
          this.$router.push({
            name: 'Profil'
          })
          this.$swal({
            icon: 'success',
            title: 'Data Berhasil Diubah',
            showConfirmButton: false,
            timer: 1500
          })
          console.log(response.data.data)
        }).catch(error => {
          this.loading = false
          this.validation = error.response.data.data
        })
    }
  }
}
</script>

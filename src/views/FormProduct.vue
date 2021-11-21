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
              <h1 class="font-semibold text-lg ml-4">Tambah Produk</h1>
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
                Nama Produk
                </label>
                <input
                  v-model="post.productName"
                  type="text"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.productName.$touch"
                  :class="{ 'border-red-600': v$.post.productName.$error }"
                >
                <small v-if="v$.post.productName.$error" class="text-red-600">Nama produk tidak boleh kosong</small>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Harga
                <!-- <span v-if="required" class="text-xs font-semibold">*</span> -->
                </label>
                <input
                  v-model="post.price"
                  type="number"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.price.$touch"
                  :class="{ 'border-red-600': v$.post.price.$error }"
                >
                <small v-if="v$.post.price.$error" class="text-red-600">Harga tidak boleh kosong</small>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Gambar ?
                </label>
                <label class="cursor-pointer flex flex-col w-32 h-32 border-2 rounded-md hover:bg-gray-100 hover:border-gray-300">
                  <img v-if="post.photo !== ''" class="w-32 h-32 rounded-full" :src="post.photo" alt="">
                  <svg v-if="post.photo === ''" xmlns="http://www.w3.org/2000/svg" class="mt-4 h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                    <input
                    type="file" class="opacity-0" @change="handleImageLogo"/>
                </label>
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
import { required } from '@vuelidate/validators'

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
        productName: { required },
        price: { required }
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

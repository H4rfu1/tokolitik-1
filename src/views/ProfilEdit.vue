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
            <div class="flex items-center justify-center w-full">
              <label class="cursor-pointer flex flex-col w-32 h-32 border-2 rounded-full hover:bg-gray-100 hover:border-gray-300">
                <img v-if="post.photo !== ''" class="w-32 h-32 rounded-full" :src="post.photo" alt="">
                <svg v-if="post.photo === ''" xmlns="http://www.w3.org/2000/svg" class="mt-4 h-32 w-32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  <input
                  type="file" class="opacity-0" @change="handleImageLogo"/>
              </label>
            </div>
            <div class="w-full pb-8">
              <span class="flex items-center justify-center">Ubah Foto</span>
            </div>
            <div class="grid grid-cols-6 gap-6 py-2">
              <div class="col-span-6 sm:col-span-3">
                <label for="first_name" class="block font-medium text-gray-700">
                  Nama Depan
                </label>
                <input
                  v-model="post.first_name"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  type="text"
                  placeholder="Masukkan nama depan"
                  @blur="v$.post.first_name.$touch"
                  :class="{ 'border-red-600': v$.post.first_name.$error }"
                >
                <small v-if="v$.post.first_name.$error" class="text-red-600">Nama depan tidak boleh kosong</small>
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="last_name" class="block font-medium text-gray-700">
                  Nama Belakang
                </label>
                <input
                  v-model="post.last_name"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  type="text"
                  placeholder="Masukkan nama belakang"
                  @blur="v$.post.last_name.$touch"
                  :class="{ 'border-red-600': v$.post.last_name.$error }"
                >
                <small v-if="v$.post.last_name.$error" class="text-red-600">Nama belakang tidak boleh kosong</small>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-6 pt-2 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <div class="flex item-center">
                  <label for="gender" class="block font-medium text-gray-700 mr-4">
                    Jenis Kelamin
                  </label>
                  <small v-if="v$.post.gender.$error" class="float-left text-red-600">Tidak boleh kosong</small>
                </div>
                <div class="grid grid-cols-6 gap-6 ">
                  <div class="col-span-6 sm:col-span-3">
                    <div class="flex items-center">
                      <input
                      id="male"
                      value="male"
                      v-model="post.gender"
                      type="radio"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                      <label for="male" class="ml-3 block text-sm font-medium text-gray-700">
                        Laki-laki
                      </label>
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <div class="flex items-center">
                      <input
                      id="female"
                      value="female"
                      v-model="post.gender"
                      type="radio"
                      class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                      <label for="female" class="ml-3 block text-sm font-medium text-gray-700">
                        Perempuan
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Tanggal Lahir
                </label>
                <input
                  v-model="post.birth_date"
                  type="date"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  :class="{ 'border-red-600': v$.post.birth_date.$error }"
                  @blur="v$.post.birth_date.$touch"
                >
                <small v-if="v$.post.birth_date.$error" class="float-left text-red-600">Tidak boleh kosong</small>
              </div>
            </div>
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
                  Password
                </label>
                <input
                  v-model="post.user_password"
                  type="password"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.user_password.$touch"
                  :class="{ 'border-red-600': v$.post.user_password.$error }"
                >
                <small v-if="v$.post.user_password.$error" class="text-red-600">Password tidak boleh kosong</small>
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Email
                <!-- <span v-if="required" class="text-xs font-semibold">*</span> -->
                </label>
                <input
                  v-model="post.user_email"
                  type="email"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.user_email.$touch"
                  :class="{ 'border-red-600': v$.post.user_email.$error }"
                >
                <small v-if="v$.post.user_email.$error" class="text-red-600">Email tidak boleh kosong</small>
                <small v-if="v$.post.user_email.$error" class="text-red-600">Email tidak valid</small>
              </div>
            </div>
             <div class="grid grid-cols-1 gap-6 py-2">
              <div class="col-span-3 sm:col-span-2 text-left">
                <label for="birth_date" class="block font-medium text-gray-700">
                  Nomor Handphone
                </label>
                <input
                  v-model="post.user_phone"
                  type="tel"
                  class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
                  @blur="v$.post.user_phone.$touch"
                  :class="{ 'border-red-600': v$.post.user_phone.$error }"
                >
                <small v-if="v$.post.user_phone.$error" class="text-red-600">No handpone tidak boleh kosong</small>
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

const apiKey = process.env.VUE_APP_API_USER

export default {
  name: 'ProfilEdit',
  components: {
    BaseView
  },
  data () {
    return {
      post: {
        first_name: '',
        last_name: '',
        gender: '',
        birth_date: '',
        username: '',
        user_password: '',
        user_email: '',
        user_phone: '',
        photo: ''
      },
      validation: []
    }
  },
  setup () {
    return { v$: useVuelidate() }
  },
  validations () {
    return {
      post: {
        first_name: { required },
        last_name: { required },
        gender: { required },
        birth_date: { required },
        username: { required },
        user_password: { required },
        user_email: { required, email },
        user_phone: { required },
        photo: { required }
      }
    }
  },
  methods: {
    async UserStore () {
      console.log('aga')
      const isFormCorrect = await this.v$.$validate()
      console.log(this.post)

      if (!isFormCorrect) return

      this.loading = true

      axios.patch(apiKey + `/setting/${this.$route.params.id}`, this.post, {
        headers: {
          Authorization: localStorage.getItem('jwt-token'),
          param: true
        }
      })
        .then((response) => {
          this.loading = false
          this.$router.push({
            name: 'KustomDataSetting'
          })
          this.$swal({
            icon: 'success',
            title: 'Data Berhasil Disimpan',
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

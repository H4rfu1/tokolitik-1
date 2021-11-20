<template>
  <div class="min-h-screen px-16 py-24 mx-auto flex flex-wrap items-center justify-center bg-theme1">
    <div class="lg:w-3/5 lg:pr-0 pr-0">
      <h1 class="title-font font-bold text-5xl">Touta</h1>
      <p class="leading-relaxed mt-4">Situs Kosmetik Halal Terlengkap & Terpercaya #1 di Indonesia.</p>
    </div>

    <!-- step 1 -->
    <div v-show="step === 1" class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
      <!-- <div class="w-1/3 h-3/4 float-right rounded-lg m-auto pt-6 p-4 shadow-lg bg-white"> -->
        <h1 class="font-sans text-xl font-extrabold">Daftar</h1>
      <!-- </div> -->
      <form class="pt-8 text-sm font-sans">
        <div class="pt-3 px-4 ">
            <label class="float-left" for="username">Email</label>
            <input
            v-model="post.email"
            type="email"
            :class="{ 'border-red-600': v$.post.email.$error }"
            @blur="v$.post.email.$touch"
            class="mt-0 block w-full px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
            placeholder="Enter email">
        </div>
        <small v-if="v$.post.email.$error" class="text-red-600">Email tidak boleh kosong</small>
        <div class="pt-12">
            <button type="button" class="text-white font-bold bg-theme1 rounded-lg py-2 px-8 hover:bg-blue-500" @click="openModal">
                Daftar
            </button>
        </div>
      </form>
      <div class="pt-14 text-sm">
        <span>Sudah punya akun?</span>
        <router-link to="/login">
        <a class="text-blue-500 font-semibold" href="">Masuk disini</a>
        </router-link>
      </div>
    </div>

    <!-- step 2 -->
    <div v-show="step === 2" class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
      <a @click.prevent="prev()" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </a>
      <h1 class="font-sans text-xl font-extrabold">Masukkan Kode Verifikasi (OTP)</h1>
      <form class="pt-8 text-sm font-sans">
        <div class="pt-3 px-4 grid place-items-center ">
            <label for="otp">Kode verifikasi telah dikirim melalui e-mail ke <span class="font-semibold">{{ post.email }}</span></label>
            <input
            v-model="post.otp"
            @blur="v$.post.otp.$touch"
            type="text"
            :class="{ 'border-red-600': v$.post.otp.$error }"
            class="mt-4 block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
            placeholder="">
        </div>
        <small v-if="v$.post.otp.$error" class="text-red-600">Otp tidak boleh kosong</small>
        <div class="pt-12">
          <button
          type="button"
          class="text-white font-bold bg-theme1 rounded-lg py-2 px-8 hover:bg-blue-500"
          @click.prevent="verify()">
              Verifikasi
          </button>
        </div>
      </form>
      <div class="pt-14 text-sm">
        <span>Tidak menerima kode?</span>
        <router-link to="/login">
        <a class="text-blue-500 font-semibold" href="">Kirim Ulang</a>
        </router-link>
      </div>
    </div>

    <!-- step 3 -->
    <div v-show="step === 3" class="text-center lg:w-2/6 xl:w-2/5 md:w-2/3 bg-white rounded-lg p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 shadow-xl">
      <a @click.prevent="prev()" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </a>
      <h1 class="font-sans text-xl font-extrabold">Daftar Dengan Email</h1>
      <span class="font-sans text-sm font-semibold">{{ post.email }}</span>
      <form class="pt-8 text-sm font-sans">
        <div class="pt-3 px-4">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3 mb-5">
              <label class="float-left" for="first_name">Nama Depan</label>
              <input
              v-model="post.first_name"
              type="text"
              :class="{ 'border-red-600': v$.post.first_name.$error }"
              @blur="v$.post.first_name.$touch"
              class="mt-4 block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
              placeholder="Masukkan nama depan">
              <small v-if="v$.post.first_name.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="float-left" for="last_name">Nama Belakang</label>
              <input
              v-model="post.last_name"
              type="text"
              :class="{ 'border-red-600': v$.post.last_name.$error }"
              @blur="v$.post.last_name.$touch"
              class="mt-4 block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
              placeholder="Masukkan nama belakang">
              <small v-if="v$.post.last_name.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            </div>
          </div>

          <label class="float-left" for="username">Username</label>
          <input
          v-model="post.username"
          type="text"
          :class="{ 'border-red-600': v$.post.username.$error }"
          @blur="v$.post.username.$touch"
          class="mt-4 w-full block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
          placeholder="Masukkan username">
          <small v-if="v$.post.username.$error" class="float-left text-red-600">Tidak boleh kosong</small>
          <div class="my-5">
            <label class="float-left" for="gender">Jenis kelamin</label>
            <small v-if="v$.post.gender.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            <div class="grid grid-cols-6 gap-6 pt-6">
              <div class="col-span-6 sm:col-span-3 mb-5">
                <div class="flex items-center">
                  <input
                  id="male"
                  value="laki-laki"
                  v-model="post.gender"
                  type="radio"
                  class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300">
                  <label for="male" class="ml-3 block text-sm font-medium text-gray-700">
                    Laki-laki
                  </label>
                </div>
              </div>
              <div class="col-span-6 sm:col-span-3 mb-5">
                <div class="flex items-center">
                  <input
                  id="female"
                  value="perempuan"
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

          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-3 mb-5">
              <label class="float-left" for="user_phone">No. Handphone</label>
              <input
              v-model="post.user_phone"
              type="tel"
              :class="{ 'border-red-600': v$.post.user_phone.$error }"
              @blur="v$.post.user_phone.$touch"
              class="mt-4 block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
              placeholder="Masukkan no. handphone">
              <small v-if="v$.post.user_phone.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            </div>
            <div class="col-span-6 sm:col-span-3">
              <label class="float-left" for="birth_date">Tanggal Lahir</label>
              <input
              v-model="post.birth_date"
              type="date"
              :class="{ 'border-red-600': v$.post.birth_date.$error }"
              @blur="v$.post.birth_date.$touch"
              class="w-full mt-4 block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
              >
              <small v-if="v$.post.birth_date.$error" class="float-left text-red-600">Tidak boleh kosong</small>
            </div>
          </div>

          <label class="float-left" for="password">Password</label>
          <input
          v-model="post.password"
          type="password"
          :class="{ 'border-red-600': v$.post.password.$error }"
          @blur="v$.post.password.$touch"
          class="mt-4 w-full block px-0.5 border-0 border-b-2 border-theme1 focus:ring-0 focus:border-blue-500 text-sm"
          placeholder="Masukkan password">
          <small v-if="v$.post.password.$error" class="float-left text-red-600">Tidak boleh kosong</small>
        </div>

        <div class="px-4 py-3">
          <label class="py-1 float-left inline-flex items-center">
              <input
              type="checkbox"
              class="float-left rounded border-gray-300 text-blue-600 shadow-sm focus:border-theme1 focus:ring focus:ring-offset-0 focus:ring-theme1 focus:ring-opacity-50"
              >
              <span class="ml-2">Mengikuti newslater</span>
          </label>
          <label class="py-1 float-left inline-flex items-center">
              <input
              type="checkbox"
              class="float-left rounded border-gray-300 text-blue-600 shadow-sm focus:border-theme1 focus:ring focus:ring-offset-0 focus:ring-theme1 focus:ring-opacity-50"
              checked="">
              <span class="ml-2">Saya menyetujui syarat dan ketentuan</span>
          </label>

        </div>

        <div class="pt-16">
          <button @click="register" type="button" class="text-white font-bold bg-theme1 rounded-lg py-2 px-8 hover:bg-blue-500">
              Daftar
          </button>
        </div>
      </form>
    </div>
   </div>
<!--<TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal">
      <div class="fixed inset-0 z-10 overflow-y-auto bg-gray-500 bg-opacity-50">
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-semibold leading-6 text-gray-900 py-4"
              >
                {{ post.email }}
              </DialogTitle>
              <div class="py-4">
                <p class="text-sm text-gray-500">
                  Apakah email yang Anda masukkan sudah benar?
                </p>
              </div>

              <div class="p-4 items-center">
                <button
                  type="button"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-white border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                >
                  Ubah
                </button>
                <button
                  type="submit"
                  class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-theme1 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  @click="closeModal"
                  @click.prevent="nextOTP()"
                  >
                  Ya, benar
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot> -->
</template>

<script>
import { ref } from 'vue'
// import {
//   TransitionRoot,
//   TransitionChild,
//   Dialog,
//   DialogOverlay,
//   DialogTitle
// } from '@headlessui/vue'

import useVuelidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import axios from 'axios'

const apiKey = process.env.VUE_APP_API_USER

export default {
  components: {
    // TransitionRoot,
    // TransitionChild,
    // Dialog,
    // DialogOverlay,
    // DialogTitle
  },
  data () {
    return {
      step: 1,
      post: {},
      validation: []
    }
  },
  setup () {
    const isOpen = ref(false)
    return {
      v$: useVuelidate(),
      isOpen,

      closeModal () {
        isOpen.value = false
      },
      openModal () {
        const isFormCorrect = this.v$.$validate()
        console.log(this.post)

        if (!isFormCorrect) return
        isOpen.value = true
      }
    }
  },
  validations () {
    return {
      post: {
        email: { required, email },
        otp: { required },
        username: { required },
        password: { required },
        user_phone: { required },
        first_name: { required },
        last_name: { required },
        gender: { required },
        birth_date: { required }
      }
    }
  },
  methods: {
    prev () {
      this.step--
    },
    nextOTP () {
      axios.post(apiKey + '/public/email_otp_token/', {
        otp_used_for: 'verify',
        email_address: this.post.email
      }).then((response) => {
        this.step++
        console.log(response.data.data)
      }).catch(error => {
        this.validation = error.response.data.data
      })
    },
    verify () {
      axios.post(apiKey + '/public/email_otp_token/check/', {
        otp_token: this.post.otp,
        email_address: this.post.email
      }).then((response) => {
        this.step++
        console.log(response.data.data)
      }).catch(error => {
        this.validation = error.response.data.data
      })
    },
    async register () {
      const isFormCorrect = await this.v$.$validate()
      console.log(this.post)

      if (!isFormCorrect) return
      axios.post(apiKey + '/public/user/', {
        username: this.post.username,
        user_password: this.post.password,
        user_email: this.post.email,
        user_phone: this.post.user_phone,
        otp_token: this.post.otp,
        first_name: this.post.first_name,
        last_name: this.post.last_name,
        gender: this.post.gender,
        birth_date: this.post.birth_date
      })
        .then((response) => {
          this.$router.push({
            name: 'Login'
          })
          console.log(response.data.data)
        }).catch(error => {
          this.validation = error.response.data.data
        })
    }
  }
}
</script>

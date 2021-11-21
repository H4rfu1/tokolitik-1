<style>
  /* since nested groupes are not supported we have to use
     regular css for the nested dropdowns
  */
  li>ul                 { transform: translatex(100%) scale(0) }
  li:hover>ul           { transform: translatex(101%) scale(1) }
  li > button svg       { transform: rotate(-90deg) }
  li:hover > button svg { transform: rotate(-270deg) }

  /* Below styles fake what can be achieved with the tailwind config
     you need to add the group-hover variant to scale and define your custom
     min width style.
   See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
   for implementation with config file
  */
  .group:hover .group-hover\:scale-100 { transform: scale(1) }
  .group:hover .group-hover\:-rotate-180 { transform: rotate(180deg) }
  .scale-0 { transform: scale(0) }
  .min-w-32 { min-width: 8rem }
  .bg {
    background-color: #f5f6fb;
  }
</style>

<template>

<nav class="pb-2 fixed top-0 w-full z-10 bg">
  <div class="bg-themeWhite">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <!-- name or logo -->
          <div class="flex-shrink-0 flex items-center">
            <p class="font-semibold text-3xl pl-4 block lg:hidden h-8 w-auto">Tokolitik</p>
            <p class="font-semibold text-3xl pl-4 hidden lg:block h-8 w-auto">Tokolitik</p>
          </div>
          <div class="flex mx-28">
            <!-- search -->
            <div class="relative text-gray-600">
              <input type="search" name="serch" placeholder="Search" class="bg-gray-100 h-8 px-5 pl-10 rounded-full text-sm focus:outline-none">
              <button type="submit" class="absolute left-0 top-0 mt-2 ml-4">
                <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <!-- <div class="ml-3 relative" @click="openCart()">
            <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <div
            v-if="isCart" @close="closeCart()"
            class="z-20 py-1 px-4 origin-top-right absolute right-0 mt-4 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              Active: "bg-gray-100", Not Active: ""
              <svg class="block fill-current text-themeWhite w-4 h-4 absolute right-0 top-0 mr-3 -mt-3 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path></svg>
              <div class="grid grid-cols-3 rounded-md p-1 hover:bg-gray-100">
                <img class="h-14 w-14 rounded-md" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div class="grid grid-flow-row auto-rows-max text-xs my-4">
                  <p>Nama Barang</p>
                </div>
                <div class="my-4 text-xs">
                  <p class="float-right">
                    Rp 00000
                  </p>
                </div>
              </div>
              <div class="m-1 w-full border-b-2"></div>
              <router-link to="keranjang" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Keranjang Saya
                </div>
              </router-link>
            </div>
          </div> -->
          <!-- Profile dropdown -->
          <div class="ml-3 relative">
            <div @click="openProfil()">
              <button type="button" class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </button>
            </div>

            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div
            v-if="isProfil" @close="closeProfil()"
            class="z-20 py-1 px-4 origin-top-right absolute right-0 mt-4 w-64 rounded-md shadow-2xl border border-t-2 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none " role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <div class=" my-2 grid grid-cols-3 shadow-lg rounded-md p-2 hover:bg-gray-100">
                <img class="h-14 w-14 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                <div class="grid grid-flow-row auto-rows-max">
                  <a href="#" class="hover:text-themeBlack block text-xs mt-0.5 text-gray-700">Username</a>
                  <a href="#" class="hover:text-themeBlack block text-xs mt-0.5 text-gray-700">Poin</a>
                  <a href="#" class="hover:text-themeBlack block text-xs mt-0.5 text-gray-700">Saldo</a>
                </div>
              </div>
              <div class="m-1 w-full border-b-2"></div>
              <a href="#" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Pesanan Saya
                </div>
              </a>
              <a href="#" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Alamat Pengiriman
                </div>
              </a>
              <a href="#" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Review
                </div>
              </a>
              <a href="#" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Wishlist
                </div>
              </a>
              <a href="#" class="hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Voucher
                </div>
              </a>
              <div class="m-1 w-full border-b-2"></div>
              <a @click="logout" class="cursor-pointer hover:text-themeBlack block text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">
                <div class="py-2 hover:bg-gray-100 rounded-md p-2">
                  Logout
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
// @ is an alias to /src
import axios from 'axios'
const apiKey = process.env.VUE_APP_API
// const apiKey = process.env.VUE_APP_API_PRODUCT

export default {

  data () {
    return {
      isProfil: false,
      isCart: false,
      brands: [],
      category: []
    }
  },
  created () {
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
    // axios.get(apiKey + '/public/brand/all', {
    //   headers: {
    //     Authorization: localStorage.getItem('jwt-token')
    //   }
    // }).then(response => {
    //   this.brands = response.data.data
    //   console.log(this.brands)
    // })
    // axios.get(apiKey + '/public/product-category/formated', {
    //   headers: {
    //     Authorization: localStorage.getItem('jwt-token')
    //   }
    // }).then(response => {
    //   this.category = response.data.data
    //   console.log(this.category)
    // })
  },
  methods: {
    logout () {
      axios.post(apiKey + '/users/logout/', this.post)
        .then((response) => {
          localStorage.removeItem('jwt-token')
          console.log(localStorage.getItem('jwt-token'))
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
    },
    closeProfil () {
      this.isProfil = !this.isProfil
    },
    openProfil () {
      this.isProfil = !this.isProfil
    },
    openCart () {
      this.isCart = !this.isCart
    },
    closeCart () {
      this.isCart = !this.isCart
    }
  }
}
</script>

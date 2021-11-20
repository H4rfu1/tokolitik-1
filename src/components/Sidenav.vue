<style>
.side {
    width: 340px;
}
.nav {
    height: 520px;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.scroll::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scroll {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>

<template>
  <div class="side fixed pt-16 lg:pl-28 md:pl-14 md:block lg:block flex mx-2 h-screen">
    <div class="bg-themeWhite rounded-2xl mt-2 border-t-2 border-blue-500">
      <div class="scroll p-4 overflow-y-auto nav mb-20">
        <!-- <p class="px-4 text-sm font-semibold mb-1">MAIN</p> -->

        <!-- Menu Home -->
        <div class="pb-2 bg-white relative z-10">
          <div class="flex items-center justify-between mb-2 cursor-pointer hover:text-blue-600 text-gray-600" @click="toggleShow('home')">
            <div class="flex">
              <HomeIcon class="h-5 w-5 mr-2"/>
              <p class="text-sm font-semibold">Home</p>
            </div>
            <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-200 ease-in-out" :class="showMenuHome ? '-rotate-180' : 'rotate-0'"/>
          </div>
          <transition
          enter-active-class="h-0 transition-height duration-300 ease-custom"
          enter-from-class="h-0 scale-y-0"
          enter-to-class="h-12 scale-y-100"
          leave-active-class="h-12 transition-height duration-300 ease-custom"
          leave-from-class="h-12 scale-y-100"
          leave-to-class="h-0 scale-y-0">
            <ul class="ml-7 font-normal text-sm" v-if="showMenuHome">
              <router-link to="/rekomendasi" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Rekomendasi
              </router-link>
              <router-link to="/konten-harian" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Konten Harian
              </router-link>
            </ul>
          </transition>
        </div>

        <!-- Menu Poin -->
        <div class="py-2 bg-white relative z-10">
          <div class="flex items-center justify-between mb-2 cursor-pointer hover:text-blue-600 text-gray-600" @click="toggleShow('poin')">
            <div class="flex">
              <TagIcon class="h-5 w-5 mr-2"/>
              <p class="text-sm font-semibold">Poin dan Voucher</p>
            </div>
            <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-200 ease-in-out" :class="showMenuPoin ? '-rotate-180' : 'rotate-0'"/>
          </div>
          <transition
          enter-active-class="h-0 transition-height duration-300 ease-custom"
          enter-from-class="h-0 scale-y-0"
          enter-to-class="h-12 scale-y-100"
          leave-active-class="h-12 transition-height duration-300 ease-custom"
          leave-from-class="h-12 scale-y-100"
          leave-to-class="h-0 scale-y-0">
            <ul class="ml-7 font-normal text-sm" v-if="showMenuPoin">
              <router-link to="/poin" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Poin
              </router-link>
              <router-link to="/voucher" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Voucher
              </router-link>
            </ul>
          </transition>
        </div>

        <!-- Menu Profil -->
        <div class="py-2 bg-white relative z-10">
          <div class="flex items-center justify-between mb-2 cursor-pointer hover:text-blue-600 text-gray-600" @click="toggleShow('profil')">
            <div class="flex">
              <UsersIcon class="h-5 w-5 mr-2"/>
              <p class="text-sm font-semibold">Profil</p>
            </div>
            <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-200 ease-in-out" :class="showMenuProfil ? '-rotate-180' : 'rotate-0'"/>
          </div>
          <transition
          enter-active-class="h-0 transition-height duration-300 ease-custom"
          enter-from-class="h-0 scale-y-0"
          enter-to-class="h-12 scale-y-100"
          leave-active-class="h-12 transition-height duration-300 ease-custom"
          leave-from-class="h-12 scale-y-100"
          leave-to-class="h-0 scale-y-0">
            <ul class="ml-7 font-normal text-sm" v-if="showMenuProfil">
              <router-link to="/profil" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Profil
              </router-link>
              <router-link to="/profil-kecantikan" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Profil Kecantikan
              </router-link>
            </ul>
          </transition>
        </div>

        <!-- Menu Blog -->
        <div class="py-2 bg-white relative z-10">
          <div class="flex items-center justify-between mb-2 cursor-pointer hover:text-blue-600 text-gray-600" @click="toggleShow('blog')">
            <div class="flex">
              <PencilIcon class="h-5 w-5 mr-2"/>
              <p class="text-sm font-semibold">Blog</p>
            </div>
            <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-200 ease-in-out" :class="showMenuBlog ? '-rotate-180' : 'rotate-0'"/>
          </div>
          <transition
          enter-active-class="h-0 transition-height duration-300 ease-custom"
          enter-from-class="h-0 scale-y-0"
          enter-to-class="h-32 scale-y-100"
          leave-active-class="h-32 transition-height duration-300 ease-custom"
          leave-from-class="h-32 scale-y-100"
          leave-to-class="h-0 scale-y-0">
            <ul class="ml-7 font-normal text-sm" v-if="showMenuBlog">
              <router-link to="/artikel" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Artikel
              </router-link>
              <router-link to="/foto" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Foto
              </router-link>
              <router-link to="/video" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Video
              </router-link>
              <router-link to="/review" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Review
              </router-link>
              <router-link to="/koleksi" active-class="text-blue-600"
                class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                Collection
              </router-link>
            </ul>
          </transition>
        </div>

        <!-- Menu Belanja -->
        <div class="py-2 bg-white relative z-10">
          <div class="flex items-center justify-between mb-2 cursor-pointer hover:text-blue-600 text-gray-600" @click="toggleShow('belanja')">
            <div class="flex">
            <ShoppingBagIcon class="h-5 w-5 mr-2"/>
            <p class="text-sm font-semibold">Belanja</p>
            </div>
            <ChevronDownIcon class="h-5 w-5 transform transition-transform duration-200 ease-in-out" :class="showMenuBelanja ? '-rotate-180' : 'rotate-0'"/>
          </div>
          <transition
          enter-active-class="h-0 transition-height duration-300 ease-custom"
          enter-from-class="h-0 scale-y-0"
          enter-to-class="h-20 scale-y-100"
          leave-active-class="h-20 transition-height duration-300 ease-custom"
          leave-from-class="h-20 scale-y-100"
          leave-to-class="h-0 scale-y-0">
            <ul class="ml-7 font-normal text-sm" v-if="showMenuBelanja">
              <router-link to="/pesanan" active-class="text-blue-600"
                  class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                  Pesanan Saya
              </router-link>
              <router-link to="/alamat" active-class="text-blue-600"
                  class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                  Alamat Pengiriman
              </router-link>
              <router-link to="/wishlist" active-class="text-blue-600"
                  class="flex items-center text-gray-700 h-6 hover:text-blue-600 cursor-pointer">
                  Wishlist
              </router-link>
            </ul>
          </transition>
        </div>
        <!-- <div class="bg-white h-16 relative z-10">
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { ref } from 'vue'
import {
  HomeIcon,
  UsersIcon,
  ChevronDownIcon,
  TagIcon,
  PencilIcon,
  ShoppingBagIcon
} from '@heroicons/vue/outline'

export default ({
  components: {
    HomeIcon,
    UsersIcon,
    ChevronDownIcon,
    TagIcon,
    PencilIcon,
    ShoppingBagIcon
  },
  data () {
    return {
      showMenuHome: true,
      showMenuPoin: true,
      showMenuProfil: true,
      showMenuBlog: true,
      showMenuBelanja: true
    }
  },
  created () {
    // this.roles = localStorage.getItem('role')
    // console.log(this.role)
    // this.roles = this.roles.split(',')
    // for (let index = 0; index < this.roles.length; index++) {
    //   // if (this.roles[index] === 'super.admin') {
    //   //   console.log('true')
    //   // }
    //   // console.log(this.role[index] === 'super.admin')
    //   // console.log(this.role[index] === 'admin.brand')
    // }
    // console.log(this.role === 'admin.brand')
  },
  computed: {
    // ...mapGetters([
    //   'roles'
    // ])
  },
  methods: {
    toggleShow (id) {
      if (id === 'home') {
        this.showMenuHome = !this.showMenuHome
      } else if (id === 'poin') {
        this.showMenuPoin = !this.showMenuPoin
      } else if (id === 'profil') {
        this.showMenuProfil = !this.showMenuProfil
      } else if (id === 'blog') {
        this.showMenuBlog = !this.showMenuBlog
      } else if (id === 'belanja') {
        this.showMenuBelanja = !this.showMenuBelanja
      }
    }
  },
  setup () {
    const sideOpen = ref(false)
    const dropDownOpen = ref(false)

    return {
      dropDownOpen,
      closeModal () {
        dropDownOpen.value = false
      },
      openModal () {
        dropDownOpen.value = true
      },
      sideOpen,
      closeSide () {
        sideOpen.value = false
      },
      openSide () {
        sideOpen.value = true
      }
    }
  }
})
</script>

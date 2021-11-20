<style>
/* .page {
  padding-top: 80px;
} */
.top {
  top: 4.5em;
}
</style>

<template>
  <BaseView
  RightContent="enable">
    <template v-slot:main>
      <!-- post tool -->
      <div class="rounded-b-2xl bg mb-2">
        <div class="bg-themeWhite rounded-2xl py-2 px-4">
          <h1 class="font-semibold text-xs my-1">Post Now</h1>
          <div class="flex my-2">
            <router-link class="flex" to="/">
              <div class="w-full flex items-center text-blue-400 h-10 px-4 bg-themeGray hover:bg-gray-200 rounded-lg cursor-pointer">
                  <span class="text-gray-700">Dashboard</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!-- header content -->
      <div class="sticky top rounded-b-3xl bg">
        <div class="bg-themeWhite rounded-2xl py-4 px-4">
          <h1 class="font-semibold">Home</h1>
        </div>
      </div>
      <div class="sticky top2  z-10 border-t border-b border-bg">
      </div>
      <!-- content -->
      <div v-for="i in 3" :key="i" class=" bg-themeWhite rounded-2xl py-4 px-4 my-2">
        <div class="flex">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          class="h-10 w-10 rounded-full">
          <div class="inline ml-4 m-auto">
            <div class="text-sm">Nama</div>
            <div class="text-xs">12-12-2021</div>
          </div>
        </div>
        <div class="mt-4">
          rasanyaa enk gk manis ada rasa asin2 dkit tp sger gk bkin enek
          Harga: terjangkau bgt
        </div>
        <div class="my-4">
          <img src="https://cf.shopee.co.id/file/df24235bb0dd37b5837c40f6a0890dd0_tn"
          class="h-full w-max rounded">
        </div>
        <div class="text-sm text-blue-600 font-light">
          <span class="cursor-pointer mx-1">#tag</span>
          <span class="cursor-pointer mx-1">#miscella_g</span>
        </div>
        <div class="flex mt-2">
          <div class="flex mr-5 rounded-full hover:bg-gray-200 p-1 items-center">
            <ThumbUpIcon class="h-5 w-5 mr-1"/>
            <span class="text-xs">44</span>
          </div>
          <div class="flex mr-5 rounded-full hover:bg-gray-200 p-1">
            <AnnotationIcon class="h-5 w-5 mr-1"/>
            <span class="text-xs">44</span>
          </div>
          <div class="flex mr-5 rounded-full hover:bg-gray-200 p-1">
            <ShareIcon class="h-5 w-5 font-monomr-1"/>
            <span class="text-xs">44</span>
          </div>
        </div>
      </div>
    </template>
    <!-- right bar  -->
    <template v-slot:right>
      <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </template>
  </BaseView>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BaseView from '@/components/BaseView.vue'
import {
  AnnotationIcon,
  ThumbUpIcon,
  ShareIcon
} from '@heroicons/vue/outline'

export default {
  name: 'Home',
  components: {
    BaseView,
    HelloWorld,
    AnnotationIcon,
    ThumbUpIcon,
    ShareIcon
  }
}
</script>

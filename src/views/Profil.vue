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
  <BaseView
  NavView="enable"
  title="Profil"
  back="enable"
  RightContent="enable"
  >

    <template v-slot:main>
      <!-- header Profil -->
      <!-- profil -->
      <div class=" bg-themeWhite rounded-2xl my-2">
        <div class="">
            <img class="rounded-t-2xl h-40 w-full"
            src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v975-background-07-b-kqkr4ukm.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=d92b38f7af4f92cbb48fb96c37560242" alt="">
          </div>
        <div class="flex relative -top-20 items-center">
          <!-- image and edit -->
          <div class="flex py-4 px-20 items-end justify-between w-full">
            <div class="mx-2">
              <div class="border-2 border-themeGray rounded-full p-0.5">
                <!-- <input type="file"> -->
                <img class="h-28 w-28 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
              </div>
            </div>
            <div class="float-right mx-2 items-end">
              <router-link to="/profil/edit">
                <button class="px-5 py-1 bg-themeBlue text-blue-600 hover:bg-blue-400 font-semibold rounded-2xl">
                  Edit
                </button>
              </router-link>
            </div>
          </div>
        </div>
        <div class="relative items-center -top-20">
          <div class="">
            Nama
          </div>
        </div>
      </div>
      <!-- <div class="sticky top2 mb-2 border-t border-b border-themeGray">
        <div class="bg-themeWhite rounded-2xl px-5 flex">
          <router-link class="flex items-center  h-10 mx-4 cursor-pointer" to="/">
            <span class="text-blue-300 hover:text-blue-600 font-semibold">All</span>
          </router-link>
          <router-link class="flex items-center  h-10 mx-4 cursor-pointer" to="/">
            <span class="text-blue-300 hover:text-blue-600 font-semibold">Artikel</span>
          </router-link>
          <router-link class="flex items-center  h-10 mx-4 cursor-pointer" to="/">
            <span class="text-blue-300 hover:text-blue-600 font-semibold">Foto</span>
          </router-link>
          <router-link class="flex items-center  h-10 mx-4 cursor-pointer" to="/">
            <span class="text-blue-300 hover:text-blue-600 font-semibold">Video</span>
          </router-link>
          <router-link class="flex items-center  h-10 mx-4 cursor-pointer" to="/">
            <span class="text-blue-300 hover:text-blue-600 font-semibold">Review</span>
          </router-link>
        </div>
      </div> -->
      <div class="sticky top2 mb-2 z-10 border-t border-b border-bg">
      </div>
      <app-tabs class="mx-auto mb-16" :tabList="tabList">
        <template v-slot:tabPanel-1>
          <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
        <template v-slot:tabPanel-2>
          <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
        <template v-slot:tabPanel-3>
          <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
        <template v-slot:tabPanel-4>
          <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
        <template v-slot:tabPanel-5>
          <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/>
        </template>
      </app-tabs>
    </template>
    <template v-slot:right>
      a
    </template>
  </BaseView>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import AppTabs from '@/components/BaseTab.vue'
import BaseView from '@/components/BaseView.vue'

export default {
  name: 'Home',
  components: {
    AppTabs,
    BaseView,
    HelloWorld
  },
  data () {
    return {
      tabList: ['All', 'Artikel', 'Foto', 'Video', 'Review']
    }
  }
}
</script>

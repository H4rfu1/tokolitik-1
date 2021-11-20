<style scoped>
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
  title="Post Detail"
  back="enable"
  RightContent="enable"
  >

    <template v-slot:main>
      <div class="sticky top2 mb-2 z-10 border-t-0 border-b border-themeGray">
      </div>
      <div class="sticky top2 bg-themeWhite rounded-t-2xl py-3 px-4 mt-2">
        <h1 class="font-medium text-lg">Judul</h1>
      </div>
      <div class="sticky top2 bg-themeWhite py-3 px-4 border-b border-themeGray">
        <div class="flex">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          class="h-10 w-10 rounded-full">
          <div class="inline ml-4 m-auto">
            <div class="text-sm">Nama</div>
            <div class="text-xs">12-12-2021</div>
          </div>
        </div>
      </div>
      <div class=" bg-themeWhite rounded-b-2xl pb-4 px-4 mb-2">
        <div class="pt-4">
          <img src="https://cf.shopee.co.id/file/df24235bb0dd37b5837c40f6a0890dd0_tn"
          class="h-full w-max rounded">
        </div>
        <div class="text-sm my-4">
          1st batch is here https://www.hoyolab.com/article/1382321

          now the husbandos are complete owo)/
          you can use it while chatting by typing "bongo genshin" at tenor~

          any NON-COMMERCIAL use is allowed, but please credit my twitter https://twitter.com/Aoi_Clover
          if you want to use it for discord, go ahead~
          if you want to save it to your gallery for collection, you can ~

          thanks 3
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
      <div class=" bg-themeWhite rounded-2xl p-4 mb-2">
        <form @submit.prevent="CommentStore">
          <textarea
            rows="5"
            v-model="post.coment"
            class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300"
            type="text"
            placeholder="Tulis komentar disini.."
          >
          </textarea>
          <div class="flex my-2 items-end">
            <button type="submit" :class="{ 'bg-gray-300 cursor-not-allowed text-gray-600' : !this.post.coment, 'bg-blue-500 text-white' : this.post.coment }"
            class="p-2 rounded-lg text-sm font-medium">
              Kirim
            </button>
          </div>
        </form>
        <div class="border-t">
          <div v-for="i in 3" :key="i" class="border-b py-4">
            <div class="flex">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              class="h-10 w-10 rounded-full">
              <div class="inline ml-4 m-auto">
                <div class="text-sm">Nama</div>
                <div class="text-xs">12-12-2021</div>
              </div>
            </div>
            <div class="mt-2 ml-14">
              <p>
                now the husbandos are complete owo)/
                you can use it while chatting by typing "bongo genshin" at tenor~
              </p>
            </div>
            <div class="flex mt-2 items-end ">
              <div class="flex mr-5 rounded-full hover:bg-gray-200 p-1 items-center">
                <ThumbUpIcon class="h-5 w-5 mr-1"/>
                <span class="text-xs">44</span>
              </div>
              <div class="flex mr-5 rounded-full hover:bg-gray-200 p-1">
                <AnnotationIcon class="h-5 w-5 mr-1"/>
                <span class="text-xs">2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:right>
      a
    </template>
  </BaseView>
</template>

<script>
// @ is an alias to /src

import BaseView from '@/components/BaseView.vue'

import {
  AnnotationIcon,
  ThumbUpIcon,
  ShareIcon
} from '@heroicons/vue/outline'

export default {
  name: 'ArticleDetail',
  components: {
    BaseView,
    AnnotationIcon,
    ThumbUpIcon,
    ShareIcon
  },
  data () {
    return {
      post: []
    }
  },
  methods: {
    CommentStore () {
      console.log('aa')
    }
  }
}
</script>

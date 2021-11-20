<style scoped>
.margin-left{
    margin-left: 355px;
}
</style>

<template>
    <div class="pt-16 margin-left mr-44">
        <div class="flex flex-1 pt-2">
            <div class="mx-2 w-2/3">
                <div v-if="NavView === 'enable'"
                class="sticky top rounded-b-3xl bg z-10">
                    <div class="bg-themeWhite rounded-2xl py-3.5 px-4 flex items-center">
                        <router-link v-if="back === 'enable'" :to="backLink">
                            <ArrowLeftIcon class="h-4 w-4"/>
                        </router-link>
                        <h1 class="font-semibold text-lg ml-4">{{title}}</h1>
                    </div>
                </div>
                <div v-if="OrderTab === 'enable'"
                class="sticky top-14 border-t z-10 flex flex-wrap md:ml-4 lg:ml-52 lg:mr-4 mr-0 shadow-xl sm:rounded-md sm:overflow-hidden bg-themeWhite">
                    <slot name="tab"></slot>
                </div>
                <slot name="main"></slot>
            </div>
            <div v-if="RightContent === 'enable'" class="mx-2 bg-themeWhite rounded-2xl py-2 px-4 flex-1">
                <slot name="right"></slot>
            </div>
      </div>
    </div>
</template>

<script>
import {
  ArrowLeftIcon
} from '@heroicons/vue/outline'

export default {
  components: {
    ArrowLeftIcon
  },
  setup () {

  },
  props: {
    NavView: {
      type: String,
      default: 'disable'
    },
    title: {
      type: String,
      default: 'Title View Default'
    },
    OrderTab: {
      type: String,
      default: 'disable'
    },
    RightContent: {
      type: String,
      default: 'disable'
    },
    back: {
      type: String,
      default: 'disable'
    },
    backLink: {
      type: String,
      default: '/'
    }
  }
}
</script>

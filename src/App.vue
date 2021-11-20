<template>
  <Navbar v-if="!['Login', 'Register', '404', 'About'].includes($route.name)"/>
  <Sidenav v-if="!['Login', 'Register', '404', 'About'].includes($route.name)"/>
  <router-view/>
</template>

<style>
#app {
  color: #2f3f56;
  background-color: #f5f6fb;
  /* background-color: #a0a0a0; */
}
.bg {
  background-color: #f5f6fb;
}
.bord {
  border-style: solid;
  border-bottom-color: #f5f6fb;
}
</style>

<script>
import Sidenav from '@/components/Sidenav.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar,
    Sidenav
  }
}
</script>

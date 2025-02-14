<template>

<main>
  <nav-bar v-if="!$route.meta.hideNavbar"></nav-bar>
  <RouterView />
</main>
</template>

<script>
import NavBar from '@/components/layout/NavBar.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView,
    NavBar
  }
}
</script>

<style scoped>

</style>

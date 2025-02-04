<template>

<main>
  <nav-bar></nav-bar>
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

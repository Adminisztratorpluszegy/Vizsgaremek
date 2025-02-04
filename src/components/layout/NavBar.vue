<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style=" position: fixed; top: 0; left: 0;">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Főoldal</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Regisztrálás</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Bejelentkezés</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
    name: 'NavBar',
    components: {
        RouterLink
    }
}
</script>

<style scoped>

</style>

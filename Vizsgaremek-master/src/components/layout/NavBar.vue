<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary" id="nav">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Főoldal</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Regisztráció</router-link>
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

<style>

#nav a {

font-weight: bold;

color: #2c3e50;

}

#nav a.router-link-exact-active {

color: whitesmoke;

background: crimson;

border-radius: .7rem;

}
</style>

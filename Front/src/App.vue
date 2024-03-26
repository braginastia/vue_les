<template>
  <div data-theme="dark" class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Homepage</a></li>
        <li><a href="/about">About</a></li>
        <li><a v-if="!isAuth" href="/login">Login</a></li>
        <li><a v-if="!isAuth" href="/register">Register</a></li>
        <li><a v-if="isAuth" @click="logout()" href="/" >Logout</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center">
    <a href="/"><img src="./assets/logo.png" alt="logotype" style="height: 5dvh;"></a>
  </div>
</div>
<router-view/>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import store from './store';

export default {
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  },
  mounted() {
    const uid = localStorage.getItem('uid')
    uid ? this.$store.commit('auth/setAuth', true) : this.$store.commit('auth/setAuth', false)
  },
  computed: {
    ...mapState({
      isAuth: state => state.auth.isAuth
    })
  }
}
</script>

<style>
  @import './style/output.css';
</style>

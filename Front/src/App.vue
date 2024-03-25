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
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </ul>
    </div>
  </div>
  <!-- <div class="navbar-center">
    
  </div> -->
  <div class="navbar-end">
    <a href="/"><img src="./assets/logo.png" alt="logotype" style="height: 5dvh;"></a>
  </div>
</div>
<router-view/>
</template>

<style>
  @import './style/output.css';
</style>

<template>
    <header>
      <nav class="navbar w-full">
        <div class="flex items-center justify-between mx-auto w-10/12 py-4">
          <RouterLink to="/">
            <img src="@/assets/logo.svg" class="h-16 logo" alt="Fantasy festival Logo" />
          </RouterLink>
          <button @click="toggleMenu" class="md:hidden">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
          <ul :class="menuOpen ? 'block' : 'hidden'" class="md:flex flex-col md:flex-row md:space-x-4 pb-3">
            <li>
              <RouterLink to="/" class="nav-link font-bold" :class="{ 'active-link': $route.path === '/' }">QUEST</RouterLink>
            </li>
            <li>
              <RouterLink to="/festival" class="nav-link font-bold" :class="{ 'active-link': $route.path === '/festival' }">FESTIVAL</RouterLink>
            </li>
            <li>
              <RouterLink to="/program" class="nav-link font-bold" :class="{ 'active-link': $route.path === '/program' }">PROGRAM</RouterLink>
            </li>
            <li>
              <RouterLink to="/transport" class="nav-link font-bold" :class="{ 'active-link': $route.path === '/transport' }">TRANSPORT</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { RouterLink } from 'vue-router';
  import { ref } from 'vue';
  
  const menuOpen = ref(false);
  
  const toggleMenu = () => {
    menuOpen.value = !menuOpen.value;
  };
  </script>
  
  <style lang="scss" scoped>
  .navbar {
    background-image: linear-gradient(to bottom, #0f022f 80%, rgba(46, 14, 117, 0.02));
    color: white;
    position: fixed;
    z-index: 2000;
  }
  
  .nav-link {
    padding: 1rem;
    transition: 0.3s;
  }

  .nav-link:hover {
    text-shadow: 3px 3px 20px var(--vt-c-gold); 
    transition: 0.3s;
}
  
  .active-link {
    color: var(--vt-c-gold);
  }
  </style>
  
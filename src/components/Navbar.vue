<template>
  <header>
    <nav :class="['navbar w-full', { 'scrolled': isScrolled }]">
      <div class="flex items-center justify-between mx-auto w-10/12 py-2">
        <RouterLink to="/">
          <img src="@/assets/logo.svg" class="h-16 logo" alt="Fantasy festival Logo" />
        </RouterLink>
        <button @click="toggleMenu" class="md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <ul :class="menuOpen ? 'block' : 'hidden'" class="md:flex flex-col md:flex-row md:space-x-4">
          <li>
            <RouterLink to="/" class="nav-link font-bold font-philosopher text-lg" :class="{ 'active-link': $route.path === '/' }">QUEST</RouterLink>
          </li>
          <li>
            <RouterLink to="/festival" class="nav-link font-bold font-philosopher text-lg" :class="{ 'active-link': $route.path === '/festival' }">FESTIVAL</RouterLink>
          </li>
          <li>
            <RouterLink to="/program" class="nav-link font-bold font-philosopher text-lg" :class="{ 'active-link': $route.path === '/program' }">PROGRAM</RouterLink>
          </li>
          <li>
            <RouterLink to="/transport" class="nav-link font-bold font-philosopher text-lg" :class="{ 'active-link': $route.path === '/transport' }">TRANSPORT</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


  
<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

const menuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>


  
<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  z-index: 2000;
  transition: background-color 0.5s ease-in-out;
  background-color: transparent;
}

.navbar.scrolled {
  background-color: rgba(15, 2, 47, 0.9); // Adjust this color as needed
}

.nav-link {
  padding: 0.8rem;
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

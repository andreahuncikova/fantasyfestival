<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>
      <Navbar />
  <RouterView />
  <Footer />
</template>

<style scoped>
/* CSS for fade animation */
.fade-enter-active, .fade-leave-active {
  transition: opacity 5s
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>

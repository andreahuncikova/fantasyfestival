<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

</script>

<template>
      <Navbar />
      <transition name="fade" mode="out-in">
  <RouterView />
</transition>
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

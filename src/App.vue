<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
</script>

<template>
  <div>
    <Navbar />
    <transition name="fade" mode="out-in">
      <RouterView />
    </transition>
    <Footer />
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

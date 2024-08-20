<template>
  <a href="#/">Home</a> | <a href="#/about">About</a> | <a href="#/users">Users</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />

  <div class="w3-container">
    <div class="w3-container w3-border w3-large"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'

// Routing according to playground example referenced here: https://vuejs.org/guide/scaling-up/routing.html
import Home from './views/Home.vue'
import About from './views/About.vue'
import Users from './views/Users.vue'
import NotFound from './views/NotFound.vue'

const routes: Record<string, any> = {
  '/': Home,
  '/about': About,
  '/users': Users
}

const currentPath = ref<any>(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})
</script>

<style scoped></style>

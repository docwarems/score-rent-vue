<template>
  <div class="w3-sidebar w3-bar-block w3-border-right" style="display: none" id="mySidebar">
    <button @click="w3_close" class="w3-bar-item w3-large">Schließen &times;</button>
    <RouterLink to="/" class="w3-bar-item w3-button" @click="w3_close">Home</RouterLink><br />
    <RouterLink to="/about" class="w3-bar-item w3-button" @click="w3_close">About</RouterLink>
  </div>

  <button class="w3-button w3-teal w3-xlarge" @click="w3_open">☰</button>

  <div class="w3-container">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
const w3_open = () => {
  document.getElementById('mySidebar')!.style.display = 'block'
}

const w3_close = () => {
  document.getElementById('mySidebar')!.style.display = 'none'
}
</script>

<style scoped></style>

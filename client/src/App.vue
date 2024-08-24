<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/users">Users</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>

  <!-- <div class="w3-container">
    <div class="w3-container w3-border w3-large"></div>
  </div> -->
</template>

<script lang="ts" setup></script>

<style scoped></style>

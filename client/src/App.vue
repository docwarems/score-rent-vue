<template>
  <header>
    <div class="wrapper">
      <UserList :users="users" />
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserList from './components/UserList.vue'
import { type User } from './types/user'

export default defineComponent({
  name: 'App',
  components: { UserList },
  setup() {
    const users = ref<User[]>([
      { firstName: 'Michael', lastName: 'Jordan', id: '1', voice: 'Tenor' },
      { firstName: 'Markus', lastName: 'Kafka', id: '2', voice: 'Tenor' },
      { firstName: 'Franzi', lastName: 'Almsick', id: '3', voice: 'Alto' }
    ])

    return { users }
  }
})
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

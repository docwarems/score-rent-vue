<template>
  <a href="#/">Home</a> | <a href="#/about">About</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />

  <div class="w3-container">
    <!-- Header -->

    <div class="w3-container w3-border w3-large">
      <UserList :users="users" :initialOrder="order" :initialOrderDirection="orderDirection" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import UserList from './components/UserList.vue'
import { type User, type OrderTerm } from './types/user'
import { type OrderDirection } from './types/order'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

const routes: Record<string, any> = {
  '/': Home,
  '/about': About
}

const currentPath = ref<any>(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

export default defineComponent({
  name: 'App',
  components: { UserList },
  setup() {
    const users = ref<User[]>([
      {
        firstName: 'Michael',
        lastName: 'Jordan',
        id: 'mi.jordan',
        voice: 'Tenor',
        email: 'michael@jordan.de'
      },
      {
        firstName: 'Markus',
        lastName: 'Kafka',
        id: 'ma.kafka',
        voice: 'Tenor',
        email: 'markus.kafka@web.de'
      },
      {
        firstName: 'Conrad',
        lastName: 'Toenz',
        id: 'co.toenz',
        voice: 'Bass',
        email: 'conrad.toenz@fau.de'
      },
      {
        firstName: 'Heribert',
        lastName: 'Fassbender',
        id: 'he.fassbe',
        voice: 'Tenor',
        email: 'heribertf@gmail.com'
      },
      {
        firstName: 'Franzi',
        lastName: 'Almsick',
        id: 'fr.almsic',
        voice: 'Alto',
        email: 'f.almsick@posteo.de'
      }
    ])
    const order = ref<OrderTerm>('lastName')
    const orderDirection = ref<OrderDirection>('desc')

    return { users, order, orderDirection, currentView }
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

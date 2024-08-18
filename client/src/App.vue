<template>
  <div class="w3-container w3-border w3-large">
    <button class="w3-button w3-black" @click="handleClick('lastName')">Order by lastName</button>
    <button class="w3-button w3-black" @click="handleClick('voice')">Order by voice</button>
    <input
      class="w3-radio"
      type="radio"
      name="orderDirection"
      value="asc"
      checked
      @click="changeOrderDirection('asc')"
    /><label>Aufsteigend</label>
    <input
      class="w3-radio"
      type="radio"
      name="orderDirection"
      value="desc"
      @click="changeOrderDirection('desc')"
    /><label>Absteigend</label>
    <UserList :users="users" :order="order" :order-direction="orderDirection" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import UserList from './components/UserList.vue'
import { type User, type OrderTerm, type OrderDirection } from './types/user'

export default defineComponent({
  name: 'App',
  components: { UserList },
  setup() {
    const users = ref<User[]>([
      { firstName: 'Michael', lastName: 'Jordan', id: '1', voice: 'Tenor' },
      { firstName: 'Markus', lastName: 'Kafka', id: '2', voice: 'Tenor' },
      { firstName: 'Conrad', lastName: 'Toenz', id: '4', voice: 'Bass' },
      { firstName: 'Heribert', lastName: 'Fassbender', id: '5', voice: 'Tenor' },
      { firstName: 'Franzi', lastName: 'Almsick', id: '3', voice: 'Alto' }
    ])
    const order = ref<OrderTerm>('lastName')
    const orderDirection = ref<OrderDirection>('asc')

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    const changeOrderDirection = (term: OrderDirection) => {
      orderDirection.value = term
    }

    return { users, order, orderDirection, handleClick, changeOrderDirection }
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

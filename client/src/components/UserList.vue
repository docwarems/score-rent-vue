<template>
  <h1>Benutzer</h1>
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

  <p>Sortiert nach {{ order }}</p>
  <table class="w3-table-all" id="checkoutsTable">
    <tr>
      <th>User Id</th>
      <th>Vorname</th>
      <th>Nachname</th>
      <th>Email</th>
      <th>Stimmgruppe</th>
      <th>M-Status</th>
    </tr>
    <tr v-for="user in orderedUsers" :key="user.id">
      <td>{{ user.id }}</td>
      <td>{{ user.firstName }}</td>
      <td>{{ user.lastName }}</td>
      <td>{{ user.email }}</td>
      <td>{{ user.voice }}</td>
      <td>{{ user.memberState }}</td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref } from 'vue'
import { type User, type OrderTerm } from '../types/user'
import { type OrderDirection } from '../types/order'

export default defineComponent({
  // If not using <script setup>, it is necessary to use defineComponent() to enable props type inference
  name: 'App',
  components: {},
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true
    },
    initialOrder: {
      type: String as PropType<OrderTerm>,
      required: true
    },
    initialOrderDirection: {
      type: String as PropType<OrderDirection>,
      required: true
    }
  },
  setup(props) {
    const orderedUsers = computed(() => {
      return [...props.users].sort((a: User, b: User) => {
        if (orderDirection.value === 'asc') {
          return a[order.value] > b[props.initialOrder] ? 1 : -1
        } else {
          return a[order.value] < b[props.initialOrder] ? 1 : -1
        }
      })
    })

    const order = ref<OrderTerm>(props.initialOrder)
    const orderDirection = ref<OrderDirection>(props.initialOrderDirection)

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    const changeOrderDirection = (term: OrderDirection) => {
      orderDirection.value = term
    }

    return { orderedUsers, handleClick, changeOrderDirection, order, orderDirection }
  }
})
</script>

<style></style>

<template>
  <div class="job-list">
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
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue'
import { type User, type OrderTerm } from '../types/user'
import { type OrderDirection } from '../types/order'

export default defineComponent({
  name: 'App',
  components: {},
  props: {
    users: {
      type: Array as PropType<User[]>,
      required: true
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true
    },
    orderDirection: {
      type: String as PropType<OrderDirection>,
      required: true
    }
  },
  setup(props) {
    const orderedUsers = computed(() => {
      return [...props.users].sort((a: User, b: User) => {
        if (props.orderDirection === 'asc') {
          return a[props.order] > b[props.order] ? 1 : -1
        } else {
          return a[props.order] < b[props.order] ? 1 : -1
        }
      })
    })

    return { orderedUsers }
  },
  methods: {}
})
</script>

<style></style>

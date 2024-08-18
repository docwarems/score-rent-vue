<template>
  <div class="job-list">
    <p>Sortiert nach {{ order }}</p>
    <ul class="w3-ul w3-border">
      <li v-for="user in orderedUsers" :key="user.id">
        <h2>{{ user.firstName }} {{ user.lastName }} {{ user.voice }}</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed } from 'vue'
import { type User, type OrderTerm } from '../types/user'

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
    }
  },
  setup(props) {
    const orderedUsers = computed(() => {
      return [...props.users].sort((a: User, b: User) => {
        return a[props.order] > b[props.order] ? 1 : -1
      })
    })

    return { orderedUsers }
  },
  methods: {}
})
</script>

<style></style>

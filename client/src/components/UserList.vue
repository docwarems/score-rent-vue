<template>
  <div class="job-list">
    <p>Sortiert nach {{ order }}</p>
    <ul class="w3-ul w3-border">
      <li v-for="user in users" :key="user.id">
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
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
  setup() {},
  methods: {}
})
</script>

<style></style>

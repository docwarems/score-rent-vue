<template>
  <div class="job-list">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h2>{{ user.firstName }} {{ user.lastName }}</h2>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from 'vue'
import { type User } from '../types/user'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const users = ref<User[]>([
      { firstName: 'Michael', lastName: 'Jordan', id: '1' },
      { firstName: 'Markus', lastName: 'Kafka', id: '2' }
    ])

    return { users }
  },
  methods: {}
})
</script>

<style></style>

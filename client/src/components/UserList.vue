<template>
  <div class="job-list">
    <button class="w3-button w3-black">Order by name</button>
    <button class="w3-button w3-black">Order by voice</button>
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
    }
    // order: {
    //   type: String as PropType<OrderTerm>,
    //   required: true
    // }
  },
  setup() {
    const users = ref<User[]>([
      { firstName: 'Michael', lastName: 'Jordan', id: '1', voice: 'Tenor' },
      { firstName: 'Markus', lastName: 'Kafka', id: '2', voice: 'Tenor' },
      { firstName: 'Franzi', lastName: 'Almsick', id: '3', voice: 'Alto' }
    ])

    return { users }
  },
  methods: {}
})
</script>

<style></style>

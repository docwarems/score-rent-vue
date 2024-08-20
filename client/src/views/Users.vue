<template>
  <h1>User list</h1>
  <TableList
    :fields="fields"
    :rows="users"
    :initialOrder="order"
    :initialOrderDirection="orderDirection"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import TableList from '../components/TableList.vue'
import { type User, type OrderTerm } from '../types/user'
import { type OrderDirection } from '../types/order'
import { type Field } from '../types/field'

// TODO: unklar ob die Benutzerliste als Komponente Sinn macht
export default defineComponent({
  name: 'Users',
  components: { TableList },
  setup() {
    const fields = ref<Field[]>([
      {
        name: 'id',
        title: 'User Id'
      },
      {
        name: 'firstName',
        title: 'Vorname'
      },
      {
        name: 'lastName',
        title: 'Nachname'
      },
      {
        name: 'email',
        title: 'E-Mail'
      },
      {
        name: 'voice',
        title: 'Stimmgruppe'
      },
      {
        name: 'memberState',
        title: 'M-Status'
      }
    ])

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

    return { users, order, orderDirection, fields }
  }
})
</script>

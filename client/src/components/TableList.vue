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
      <th v-for="field in fields" :key="field.name">
        {{ field.title }}
      </th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>
        <input
          class="w3-input w3-border w3-padding"
          type="text"
          placeholder="Filtern.."
          v-model="filter"
        />
      </td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr v-for="row in rows" :key="row.id">
      <td v-for="field in fields" :key="field.name">
        {{ row[field.name] }}
      </td>
    </tr>
  </table>
</template>

<script lang="ts">
import { defineComponent, type PropType, computed, ref } from 'vue'
import { type OrderTerm } from '../types/user'
import { type OrderDirection } from '../types/order'
import { type Field } from '../types/field'
import { type ListRow } from '../types/list'

/**
 * An attempt to create generic Vue component to display various table list data.
 * The component shall support
 * - ordering
 */

// To let TypeScript properly infer types inside component options, we need to define components with defineComponent()
// see https://vuejs.org/guide/typescript/overview.html
export default defineComponent({
  // If not using <script setup>, it is necessary to use defineComponent() to enable props type inference
  name: 'App',
  components: {}, // no other nested components
  props: {
    // the field or column definitions of the table
    // a field has a name used as the key in the array
    // it also has a title which can be regarded as the displayed name, and it probably multi-langual
    // using fields we can thus display the table headers
    // properties like column width may follow
    fields: {
      type: Array as PropType<Field[]>,
      required: true
    },
    // rows is the two-dimensional array of the table data
    // we define it as an array of ListRow, where ListRow represents a row
    // TODO: explain why we need the ListRow type
    // TODO: test ready-to-use component like https://bootstrap-vue.org/docs/components/table
    rows: {
      type: Array as PropType<ListRow[]>,
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
    // TODO: make working again
    // const orderedRows = computed(() => {
    //   const filteredList = [...props.rows].filter((user: ListRow) =>
    //     user.lastName.toLowerCase().startsWith(filter.value.toLowerCase())
    //   )

    //   return filteredList.sort((a: ListRow, b: ListRow) => {
    //     if (orderDirection.value === 'asc') {
    //       return a[order.value] > b[props.initialOrder] ? 1 : -1
    //     } else {
    //       return a[order.value] < b[props.initialOrder] ? 1 : -1
    //     }
    //   })
    // })

    const filter = ref<string>('')
    const order = ref<OrderTerm>(props.initialOrder)
    const orderDirection = ref<OrderDirection>(props.initialOrderDirection)

    const handleClick = (term: OrderTerm) => {
      order.value = term
    }

    const changeOrderDirection = (term: OrderDirection) => {
      orderDirection.value = term
    }

    return {
      // orderedRows,
      handleClick,
      changeOrderDirection,
      order,
      orderDirection,
      filter
    }
  }
})
</script>

<style></style>

<template>
  <v-card>
    <v-data-table
      :headers="headers"
      :items="userList"
      item-key="full_name"
      class="table-rounded"
      hide-default-footer
      disable-sort
    >
      <!-- name -->
      <!-- <template #[`item.full_name`]="{item}">
        <div class="d-flex flex-column">
          <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
          <small>{{ item.post }}</small>
        </div>
      </template>
      <template #[`item.salary`]="{item}">
        {{ `$${item.salary}` }}
      </template> -->
      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          class="font-weight-medium"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '@/views/dashboard/datatable-data'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'FIRST NAME', value: 'firstName' },
        { text: 'LAST NAME', value: 'lastName' },
        { text: 'EMAIL', value: 'email' },
        { text: 'STATUS', value: 'status' },
      ],
    //   userList: data,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
    props: {
    userList: {
      type: Array,
      required: true,
        }
    }
}
</script>

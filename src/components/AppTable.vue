<template>
  <div>
    <EasyDataTable
      :headers="headers"
      :items="items"
      :header-background-color="color"
      :header-font-color="text"
      :theme-color="color"
      :rows-per-page="10"
      buttons-pagination
    >
      <template #header-name="name">
        <th>{{ name.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-category="category">
        <th>{{ category.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-classification="classification">
        <th>{{ classification.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-status="status">
        <th>{{ status.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-dateTime="dateTime">
        <th>{{ dateTime.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-modifiedBy="modifiedBy">
        <th>{{ modifiedBy.text }} <i class="fas fa-exchange-alt fa-rotate-90"></i></th>
      </template>

      <template #header-action="action">
        <th>{{ action.text }}</th>
      </template>

      <template #item-status="item">
        <span :class="item.status.toLowerCase()">{{ item.status }}</span>
      </template>

      <template #item-action="item">
        <div id="actionModal">
          <ul id="modal">
            <li><i class="fas fa-eye"></i> View Element Link</li>
            <hr />
            <li><i class="fas fa-edit"></i> Edit Element Link</li>
            <hr />
            <li id="delete"><i class="fas fa-trash"></i> Delete Element Link</li>
          </ul>
          <i id="action" @click.prevent="toggleModal(item)" class="fas fa-ellipsis-h"></i>
        </div>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';

const color = '#2d416f';
const text = '#fff';
const headers = ref([]);
const items = ref([]);

onBeforeMount(() => {
  headers.value = [
    { text: 'Name', value: 'name' },
    { text: 'Element Category', value: 'category' },
    { text: 'Element Classification', value: 'classification' },
    { text: 'Status', value: 'status' },
    { text: 'Date & Time Modified', value: 'dateTime' },
    { text: 'Modified By', value: 'modifiedBy' },
    { text: 'Action', value: 'action' }
  ];

  items.value = [
    {
      name: '13 Month Allowance',
      category: 'Deduction',
      classification: 'Pre tax Deduction',
      status: 'Active',
      dateTime: '14-02-2022||09:30 AM',
      modifiedBy: 'Samson Ayonrinde',
      action: '...',
      showModal: true
    },
    {
      name: '13 Month Allowance',
      category: 'Deduction',
      classification: 'Pre tax Deduction',
      status: 'Inactive',
      dateTime: '14-02-2022||09:30 AM',
      modifiedBy: 'Samson Ayonrinde',
      action: '...',
      showModal: false
    }
  ];
});

function toggleModal(item) {
  item.showModal = !item.showModal;
  console.log(item);
}
</script>

<style lang="scss" scoped>
.active {
  color: var(--secondary);
  background-color: #f4faf7;
  border-radius: 16px;
  padding: 4px 8px;
}
.inactive {
  color: #e05453;
  background-color: #e054530d;
  border-radius: 16px;
  padding: 4px 8px;
}

#action {
  padding: 2px;
  color: var(--secondary);
  border: 2px solid var(--secondary);
  border-radius: 4px;
  cursor: pointer;
}

th {
  font-weight: 400;
}

#actionModal {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  margin-bottom: 5px;
}
#modal {
  background-color: var(--white);
  box-shadow: 2px 2px 25px 2px rgba($color: #000000, $alpha: 0.2);
  padding: 4px;
  width: 125px;
  border-radius: 4px;
  position: absolute;
  right: 0;
  bottom: 70px;
  z-index: 1000;

  li {
    padding: 4px;
    font-size: 10px;
  }

  li:not(#delete) {
    color: var(--primary);
  }

  #delete {
    color: #e05453;
  }
}
</style>

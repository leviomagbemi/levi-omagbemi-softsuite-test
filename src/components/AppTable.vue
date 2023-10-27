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
        <v-menu open-on-click location="top">
          <template v-slot:activator="{ props }">
            <i v-bind="props" id="action" class="fas fa-ellipsis-h"></i>
          </template>

          <v-list id="actionModal">
            <v-list-item style="cursor: pointer">
              <v-list-item-title style="color: var(--primary)"
                ><i class="fas fa-eye"></i> View Element Links</v-list-item-title
              >
              <hr />
            </v-list-item>
            <v-list-item style="cursor: pointer">
              <v-list-item-title style="color: var(--primary)"
                ><i class="fas fa-edit"></i> Edit Element Link</v-list-item-title
              >
              <hr />
            </v-list-item>
            <v-list-item style="cursor: pointer">
              <v-list-item-title style="color: #e05453"
                ><i class="fas fa-trash"></i> Delete Element Links</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </EasyDataTable>
  </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue';
import { useElementStore } from '@/stores/element.js';

const elementStore = useElementStore();

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

  items.value = elementStore.elements;
});
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
</style>

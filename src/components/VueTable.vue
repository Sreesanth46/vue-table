<script setup lang="ts">
import Spinner from './Spinner.vue';
withDefaults(
  defineProps<{
    headers: string[];
    data: any[];
    keys: string[];
    dark: boolean;
    noDataMessage: string;
    loading: boolean;
  }>(),
  {
    dark: false,
    loading: false,
    noDataMessage: 'No data available'
  }
);

const reduceObject = (obj: any, path: string[]) => {
  return path.reduce((prev, key) => {
    return prev?.[key];
  }, obj);
};
</script>

<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
    :class="{ dark: dark }">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th
            v-for="(header, i) in headers"
            :key="i"
            scope="col"
            class="px-6 py-3">
            {{ header }}
          </th>
          <slot name="th" />
        </tr>
      </thead>
      <tbody>
        <tr v-if="data.length < 1">
          <td :colspan="headers.length" class="align-center">
            <div class="flex justify-center p-4">
              <Spinner v-if="loading" />
              <p v-else>{{ noDataMessage }}</p>
            </div>
          </td>
        </tr>
        <tr
          v-else
          class="bg-white border-b hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600"
          v-for="(item, i) in data"
          :key="i">
          <td v-for="(key, i) in keys" :key="i" class="px-6 py-4">
            <span v-if="typeof key === 'object'">
              {{ reduceObject(item, key) }}
            </span>
            <span v-else>{{ item[key] }}</span>
          </td>
          <slot name="td" :item="item" />
        </tr>
      </tbody>
    </table>
  </div>
</template>

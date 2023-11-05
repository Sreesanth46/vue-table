<script setup>
import { VueTable, VuePaginator } from '../../dist/es.js';
import '../../dist/style.css';
import data from './assets/data.json';
import { computed, ref, watch } from 'vue';

const headers = [
  'id',
  'name',
  'DOB',
  'GPA',
  'course',
  'department',
  'fees paid'
];
const keyValues = [
  'id',
  'name',
  'date_of_birth',
  'GPA',
  'course',
  'department',
  'fees_paid'
];

const itemsPerPage = 8;

const startOffSet = ref(0);
const endOffSet = ref(startOffSet.value + itemsPerPage);

watch(startOffSet, nOff => {
  endOffSet.value = startOffSet.value + itemsPerPage;
});

const pageCount = Math.ceil(data.length / itemsPerPage);

const currentData = computed(() =>
  data.slice(startOffSet.value, endOffSet.value)
);

function onPageChange(pageNumber) {
  const newOffSet = (pageNumber - 1) * itemsPerPage;
  startOffSet.value = newOffSet;
}
</script>

<template>
  <div
    style="
      width: 90%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      margin-top: 6%;
    ">
    <VueTable :headers="headers" :keys="keyValues" :data="currentData" />
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 2rem;
      ">
      <VuePaginator :pageCount="pageCount" @onPageChange="onPageChange" />
    </div>
  </div>
</template>

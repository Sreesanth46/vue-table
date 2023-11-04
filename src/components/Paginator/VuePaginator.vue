<script setup lang="ts">
import PreviousNavigation from './PreviousNavigation.vue';
import NextNavigation from './NextNavigation.vue';
import PageNumber from './PageNumber.vue';
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    large: boolean;
    dark: boolean;
    defaultPage: number
  }>(),
  {
    large: false,
    dark: false,
    defaultPage: 1,
  }
);

const currentPage = ref(props.defaultPage)

function nextPage() {
  // TODO: this conditions should be updated 
  if(currentPage.value != 5) currentPage.value++ 
}

function previousPage() {
  // TODO: this conditions should be updated 
  if(currentPage.value != 1) currentPage.value--
}

function selectPage(pageNumber: number) {
  currentPage.value = pageNumber
}
</script>

<template>
  <nav aria-label="Page navigation" :class="{ dark: dark }">
    <ul
      class="flex items-center -space-x-px"
      :class="[large ? 'h-10 text-base' : 'h-8 text-sm']">
      <PreviousNavigation :large="large" @click="previousPage" />
      <page-number
        :large="large"
        v-for="item in [1, 2, 3, 4, 5]"
        :key="item"
        :active="item === currentPage"
        @click="selectPage(item)"
        >{{ item }}</page-number
      >
      <NextNavigation :large="large" @click="nextPage" />
    </ul>
  </nav>
</template>

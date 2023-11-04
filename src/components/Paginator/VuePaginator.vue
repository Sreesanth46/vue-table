<script setup lang="ts">
withDefaults(
  defineProps<{
    large: boolean;
    dark: boolean;
    active: boolean;
  }>(),
  {
    large: false,
    dark: false,
    active: false
  }
);

import PreviousNavigation from './PreviousNavigation.vue';
import NextNavigation from './NextNavigation.vue';
import PageNumber from './PageNumber.vue';
</script>

<template>
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-8 text-sm">
      <PreviousNavigation :dark="dark" :large="large" />
      <page-number
        :dark="dark"
        :large="large"
        v-for="item in [1, 2, 3, 4, 5]"
        :key="item"
        :active="item === 3"
        >{{ item }}</page-number
      >
      <NextNavigation :dark="dark" :large="large" />
    </ul>
  </nav>
  <br />
  <nav aria-label="Page navigation example">
    <ul class="flex items-center -space-x-px h-10 text-base">
      <PreviousNavigation :dark="dark" :large="!large" />
      <page-number :dark="dark" :large="!large" :active="active" v-for="item in [1, 2, 3, 4, 5]" :key="item">{{
        item
      }}</page-number>
      <NextNavigation :dark="dark" :large="!large" />
    </ul>
  </nav>
</template>

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
  <nav aria-label="Page navigation" :class="{ dark: dark }">
    <ul
      class="flex items-center -space-x-px"
      :class="[large ? 'h-10 text-base' : 'h-8 text-sm']">
      <PreviousNavigation :large="large" />
      <page-number
        :large="large"
        v-for="item in [1, 2, 3, 4, 5]"
        :key="item"
        :active="item === 3"
        >{{ item }}</page-number
      >
      <NextNavigation :large="large" />
    </ul>
  </nav>
</template>

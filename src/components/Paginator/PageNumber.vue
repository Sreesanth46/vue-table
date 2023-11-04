<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
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

const classObject = computed(() => ({
  'z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700':
    !props.dark && props.active,
  'z-10 dark:border-gray-700 dark:bg-gray-700 dark:text-white':
    props.dark && props.active,
  'dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white':
    props.dark && !props.active
}));
</script>

<template>
  <li>
    <button
      :aria-current="active ? 'page' : undefined"
      class="flex items-center justify-center leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      :class="[
        large ? 'px-4 h-10' : 'px-3 h-8',
        classObject
      ]">
      <slot></slot>
    </button>
  </li>
</template>

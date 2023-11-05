<script setup lang="ts">
withDefaults(
  defineProps<{
    large: boolean;
    active: boolean;
  }>(),
  {
    large: false,
    active: false
  }
);
</script>

<template>
  <li>
    <button
      :aria-current="active ? 'page' : undefined"
      class="flex items-center justify-center leading-tight"
      :class="[
        large ? 'px-4 h-10' : 'px-3 h-8',
        active
          ? 'z-10 text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
      ]">
      <slot></slot>
    </button>
  </li>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    large: boolean;
  }>(),
  {
    large: false
  }
);
</script>

<template>
  <li>
    <button
      class="flex items-center justify-center ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      :class="[large ? 'px-4 h-10' : 'px-3 h-8']">
      <span class="sr-only">Previous</span>
      <svg
        :class="[large ? 'w-3 h-3' : 'w-2.5 h-2.5']"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10">
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 1 1 5l4 4" />
      </svg>
    </button>
  </li>
</template>

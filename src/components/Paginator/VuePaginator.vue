<script setup lang="ts">
import PreviousNavigation from './PreviousNavigation.vue';
import NextNavigation from './NextNavigation.vue';
import PageNumber from './PageNumber.vue';
import { computed, ref, watch } from 'vue';

const props = withDefaults(
  defineProps<{
    large: boolean;
    dark: boolean;
    defaultPage: number;
    bufferCount: number;
    pageCount: number;
  }>(),
  {
    large: false,
    dark: false,
    defaultPage: 1,
    bufferCount: 2,
    pageCount: 5
  }
);

const emit = defineEmits({
  onPageChange : (pageNumber: number) => PageNumber 
})

const currentPage = ref(props.defaultPage);

watch(currentPage, (newPage: number) => emit('onPageChange', newPage))

const pages = computed(() => {
  const totalBuffer = props.bufferCount * 2;
  const pageBuffer = Math.min(totalBuffer, props.pageCount);
  let start = Math.max(currentPage.value - pageBuffer, 1);
  const end = Math.min(start + pageBuffer, props.pageCount);

  const pages = [];
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }
  return pages;
});

function nextPage(): void {
  if (currentPage.value != props.pageCount) currentPage.value++;
}

function previousPage(): void {
  // TODO: verify this condition
  if (currentPage.value != 1) currentPage.value--;
}

function selectPage(pageNumber: number): void {
  currentPage.value = pageNumber;
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
        v-for="item in pages"
        :key="item"
        :active="item === currentPage"
        @click="selectPage(item)"
        >{{ item }}</page-number
      >
      <NextNavigation :large="large" @click="nextPage" />
    </ul>
  </nav>
</template>

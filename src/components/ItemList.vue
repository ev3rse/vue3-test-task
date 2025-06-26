<template>
  <div class="item-list">
    <h3>{{ props.title }}</h3>
    <div class="cards">
      <div
        v-for="item in props.items"
        :key="item.id"
        class="card"
        :class="{ active: props.selectedItems.some((i) => i.id === item.id) }"
        @click="onItemClick(item)"
      >
        <div class="card-content">
          <span class="card-title">{{ item.name }}</span>
        </div>
      </div>
    </div>
    <p v-if="props.multiple && props.maxSelected" class="selection-count">
      Выбрано: {{ props.selectedItems.length }} / {{ props.maxSelected }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Item } from '@/interfaces'

interface Props {
  title: string
  items: Item[]
  selectedItems: Item[]
  multiple?: boolean
  maxSelected?: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'select', item: Item): void
}>()

function onItemClick(item: Item) {
  emit('select', item)
}
</script>

<style lang="scss">
@import '../assets/scss/main';
</style>

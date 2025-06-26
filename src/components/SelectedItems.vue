<template>
  <div class="selected-items">
    <h3>{{ title }}</h3>
    <div v-if="items.length === 0" class="no-items">Ничего не выбрано</div>
    <div v-else class="cards">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="card-content">
          <span class="card-title">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Item } from '@/interfaces'

defineProps<{
  title: string
  items: Item[]
}>()
</script>

<style lang="scss"></style>

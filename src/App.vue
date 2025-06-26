<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style lang="scss" scoped>
.container {
  max-width: rem(1200);
  font-family: Arial, sans-serif;
  padding: rem(20);
  margin: 0 auto;
}
</style>

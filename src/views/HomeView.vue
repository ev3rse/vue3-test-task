<template>
  <main>
    <div class="top-blocks">
      <SelectedItems title="Выбранные вещи пользователя" :items="store.selectedUserItems" />
      <SelectedItems
        title="Выбранная вещь из выбора"
        :items="store.selectedChoiceItem ? [store.selectedChoiceItem] : []"
      />
    </div>

    <div class="bottom-blocks">
      <ItemList
        title="Вещи пользователя"
        :items="userItems"
        @select="store.toggleUserItem"
        multiple
        :max-selected="6"
        :selected-items="store.selectedUserItems"
      />

      <ItemList
        title="Вещи на выбор"
        :items="choiceItems"
        @select="store.setChoiceItem"
        :selected-items="store.selectedChoiceItem ? [store.selectedChoiceItem] : []"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useAppStore } from '@/stores/appStore'
import ItemList from '@/components/ItemList.vue'
import SelectedItems from '@/components/SelectedItems.vue'

const store = useAppStore()

const userItems = ref([
  { id: 1, name: 'Shoes 1' },
  { id: 2, name: 'Shoes 2' },
  { id: 3, name: 'Shoes 3' },
  { id: 4, name: 'Shoes 4' },
  { id: 5, name: 'T-shirt 1' },
  { id: 6, name: 'T-shirt 2' },
  { id: 7, name: 'T-shirt 3' },
  { id: 8, name: 'T-shirt 4' },
])

const choiceItems = ref([
  { id: 11, name: 'Jacket 1' },
  { id: 12, name: 'Jacket 2' },
  { id: 13, name: 'Jacket 3' },
  { id: 14, name: 'Jacket 4' },
  { id: 15, name: 'Hoodie 1' },
  { id: 16, name: 'Hoodie 2' },
  { id: 17, name: 'Hoodie 3' },
  { id: 18, name: 'Hoodie 4' },
])
</script>

<style lang="scss" scoped>
.top-blocks {
  display: flex;
  justify-content: space-between;
  margin-bottom: rem(20);
}

.bottom-blocks {
  display: flex;
  justify-content: space-between;
  gap: rem(20);
}
</style>

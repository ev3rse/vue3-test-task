import { defineStore } from 'pinia'
import type { Item } from '@/interfaces'

interface AppState {
  selectedUserItems: Item[]
  selectedChoiceItem: Item | null
}

export const useAppStore = defineStore('app', {
  state: (): AppState => ({
    selectedUserItems: [],
    selectedChoiceItem: null,
  }),
  actions: {
    toggleUserItem(item: Item) {
      const index = this.selectedUserItems.findIndex((i) => i.id === item.id)
      if (index > -1) {
        this.selectedUserItems.splice(index, 1)
      } else if (this.selectedUserItems.length < 6) {
        this.selectedUserItems.push({ ...item })
      }
    },
    setChoiceItem(item: Item) {
      this.selectedChoiceItem = { ...item }
    },
  },
})

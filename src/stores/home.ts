import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    activeNav: 'chat',
    searchText: '',
    activeChatName: '',
  }),
  getters: {
    // doubleCount: (state) => state.counter * 2
  },
  actions: {
    // increment() {
    //   this.counter++
    // }
  }
})

import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    activeFirstNav: 'chat',
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

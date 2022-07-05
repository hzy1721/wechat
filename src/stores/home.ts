import { defineStore } from 'pinia'

export const useHomeStore = defineStore({
  id: 'home',
  state: () => ({
    activeNav: 'chat',
    activeContact: 'group_wxgroup_12345',
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

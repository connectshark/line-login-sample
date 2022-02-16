import { defineStore } from 'pinia'

export const useLineStore = defineStore('line', {
  state: () => ({
    access_token: ''
  }),
  getters: {
    hasToken: (state) => state.access_token !== ''
  }
})

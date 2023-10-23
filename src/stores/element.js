import { defineStore } from 'pinia';

export const useElementStore = defineStore('element', {
  state: () => ({
    createElement: false
  })
});

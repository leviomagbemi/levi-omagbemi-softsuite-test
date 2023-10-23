<template>
  <div id="search-bar-container">
    <input type="text" :placeholder="placeholder" />
    <button>
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script setup>
defineProps(['placeholder'])
</script>

<style lang="scss" scoped>
#search-bar-container {
  position: relative;

  input {
    width: 100%;
    height: 52px;
    padding: 8px;
    border-radius: 6px;
    border: 1px solid;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    background-color: var(--secondary);
    color: var(--white);
    border: none;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}
</style>

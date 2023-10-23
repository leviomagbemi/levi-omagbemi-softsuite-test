<template>
  <div>
    <div id="element-btn" @click.prevent="elementMenu = !elementMenu">
      <div>
        <i class="fas fa-cog"></i>
        <p>Element Setup</p>
      </div>

      <i class="fas fa-angle-down"></i>
    </div>

    <div id="element-menu" v-if="elementMenu">
      <ul>
        <li class="active">Elements</li>
        <li>Balance</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const elementMenu = ref(false)
</script>

<style lang="scss" scoped>
#element-btn {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  background-color: var(--secondary);
  color: var(--white);
  cursor: pointer;

  /*  */
  div {
    display: flex;
    gap: 24px;
    align-items: center;

    p {
      border: none;
      font: 500 14px poppins;
      color: var(--white);
      transition: color 0.5s ease;
    }
  }
}

#element-menu {
  width: 70%;

  /*  */
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;

    /*  */
    li {
      font: 500 14px poppins;
      color: var(--primary);
      cursor: pointer;
      padding: 8px 16px;
    }
  }
}

.active {
  background-color: rgba(13, 93, 253, 0.216);
  border-radius: 6px;
}
</style>

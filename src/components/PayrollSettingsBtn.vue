<template>
  <div>
    <div id="payroll-settings" :style="active" @click="payrollMenu = !payrollMenu">
      <div>
        <i class="fas fa-cog"></i>
        <p :style="payrollMenu ? { color: 'var(--primary)' } : ''">Payroll Settings</p>
      </div>

      <i class="fas fa-angle-down"></i>
    </div>

    <div id="payroll-menu" v-if="payrollMenu">
      <ul>
        <li>Payroll Options</li>
        <li>Deduction Account Setup</li>
        <li>Variation Portal Period</li>
        <li>Paygroup Setup</li>
        <li>Tax Setup</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const payrollMenu = ref(false)
const active = computed(() => {
  return payrollMenu.value
    ? { color: 'var(--primary)', backgroundColor: 'rgba(13, 93, 253, 0.216)' }
    : ''
})
</script>

<style lang="scss" scoped>
#payroll-settings {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin-bottom: 8px;
  border-radius: 6px;
  color: var(--primary-40);
  transition: color 0.5s ease;
  cursor: pointer;

  /*  */
  div {
    display: flex;
    gap: 24px;
    align-items: center;

    p {
      border: none;
      font: 500 14px poppins;
      color: var(--primary-40);
      transition: color 0.5s ease;
    }
  }
}

#payroll-settings:hover {
  background-color: rgba(13, 93, 253, 0.216);
  color: var(--primary);

  p {
    color: var(--primary);
  }
}

#payroll-menu {
  background-color: var(--light);
  padding: 16px;
  width: 80%;
  border-radius: 8px;

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
    }
  }
}
</style>

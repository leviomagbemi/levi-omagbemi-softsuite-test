<template>
  <!--Switch-->
  <div id="switch-container">
    <!--toggler-->
    <div id="switch-toggler" @click.prevent="switchMenu = !switchMenu">
      <i class="fas fa-random"></i>
      <div>
        <p>
          <span class="switch">Switch Module</span>
          <br />
          <span class="payroll">Payroll Management</span>
        </p>
        <i class="fas fa-angle-down"></i>
      </div>
    </div>

    <!--Switc menu-->
    <div id="switch-menu" v-if="switchMenu">
      <ul>
        <li>System Administration</li>

        <hr />

        <li>People Management</li>

        <hr />

        <li>Payroll Management</li>

        <hr />

        <li class="active">Self Service</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const switchMenu = ref(false)
</script>

<style lang="scss" scoped>
/*   */
#switch-container {
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  gap: 16px;
  color: var(--primary);

  /*   */
  #switch-toggler {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    > i {
      background-color: var(--primary);
      color: var(--white);
      padding: 8px;
      border-radius: 4px;
    }

    /*   */

    div {
      display: flex;
      gap: 32px;
      align-items: center;
    }

    p {
      /*   */
      .switch {
        font-weight: 500;
        font-size: 14px;
      }

      /*   */

      .payroll {
        font-weight: 700;
      }
    }
  }

  /*   */
  #switch-menu {
    ul {
      hr {
        margin: 4px 0;
      }

      li {
        font-size: 14px;
        cursor: pointer;
      }

      .active {
        li {
          list-style-image: url('../assets/icons/check.png');
        }
      }
    }
  }
}
</style>

<template>
  <aside>
    <!--aside header-->
    <SwitchModule />
    <div id="aside-content">
      <!--Dashboard btn-->
      <div class="btn-container">
        <i class="fas fa-th-large"></i>
        <p>Dashboard</p>
      </div>

      <PayrollBtn />

      <!--Salary Structure-->
      <div class="btn-container">
        <i class="fas fa-sitemap"></i>
        <p>Salary Structure</p>
      </div>

      <!--Element Setup-->
      <ElementSetupBtn />

      <!--employees-->
      <div class="btn-container">
        <i class="fas fa-users"></i>
        <p>Employees</p>
      </div>

      <hr />

      <PayrollSettingsBtn />

      <!--account-->
      <div class="btn-container">
        <i class="fas fa-user"></i>
        <p>My Account</p>
      </div>

      <!--logout-->
      <div class="btn-container">
        <i class="fas fa-sign-out-alt"></i>
        <p>Logout</p>
      </div>
    </div>
  </aside>
</template>

<script setup>
import SwitchModule from '@/components/SwitchModule.vue'
import PayrollBtn from '@/components/PayrollBtn.vue'
import ElementSetupBtn from '@/components/ElementSetupBtn.vue'
import PayrollSettingsBtn from '@/components/PayrollSettingsBtn.vue'
</script>

<style lang="scss" scoped>
aside {
  padding: 24px;
  background-color: var(--white);
  transition: all 0.5s;

  /*  */

  #aside-content {
    display: flex;
    flex-direction: column;
    gap: 16px;

    /*  */
    .btn-container {
      display: flex;
      align-items: center;
      gap: 24px;
      padding: 8px 16px;
      border-radius: 6px;
      color: var(--primary-40);
      transition: color 0.5s ease;
      cursor: pointer;

      /*  */

      p {
        border: none;
        font: 500 14px poppins;
        color: var(--primary-40);
        transition: color 0.5s ease;
      }
    }

    .btn-container:hover {
      background-color: rgba(13, 93, 253, 0.216);
      color: var(--primary);

      p {
        color: var(--primary);
      }
    }
  }
}
</style>

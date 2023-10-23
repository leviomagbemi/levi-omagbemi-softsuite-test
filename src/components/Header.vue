<template>
  <header>
    <!--App logo-->
    <div id="logo">
      <img src="@/assets/logo.svg" alt="softsuite-logo" />
    </div>

    <!--Header Controls-->
    <div id="controls">
      <div class="control-1">
        <!--Organization dropdown-->
        <div id="org-container">
          <div class="org">
            <i class="fas fa-home"></i>
            <p>
              <span>Change Organization</span>
              <br />
              <span id="org-name">PaperSoft Limited</span>
            </p>
          </div>
          <div>
            <i class="fas fa-angle-down"></i>
          </div>
        </div>

        <!--Search bar-->
        <SearchBar :placeholder="'Search for anything...'" />
      </div>

      <!--notification & avatar-->
      <div class="control-2">
        <i class="fas fa-bell"></i>
        <div>
          <div>
            <img src="@/assets/images/avatar.jpg" alt="avatar" />
          </div>
          <p>
            <span id="username">Henry Okonkwo</span>
            <br />
            <span>Payroll Manager</span>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
</script>

<style lang="scss" scoped>
header {
  // position: fixed;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  padding: 24px;
  gap: 100px;
  // width: 100%;
  height: 100px;
  box-shadow: 1px 1px 1px 1px rgba($color: #000000, $alpha: 0.1);
  background-color: var(--white);

  /*   */
  #controls {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 120px;

    /*   */
    .control-1 {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 40px;

      /*   */
      #org-container {
        display: flex;
        align-items: center;
        gap: 32px;
        padding: 8px;
        border-radius: 4px;
        color: var(--primary);
        background-color: var(--light);

        .org {
          display: flex;
          align-items: center;
          gap: 16px;
          font-weight: 500;
          font-size: 14px;
          #org-name {
            font-weight: 700;
            font-size: 16px;
          }
        }
      }

      /*   */
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
    }

    /*   */
    .control-2 {
      display: flex;
      gap: 24px;
      align-items: center;
      justify-self: end;

      i {
        color: var(--primary);
      }

      div {
        display: flex;
        gap: 16px;
        p {
          color: var(--primary);
          font-weight: 400;
          font-size: 14px;
          #username {
            font-weight: 700;
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>

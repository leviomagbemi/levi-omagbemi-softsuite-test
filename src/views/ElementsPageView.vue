<template>
  <section>
    <nav>
      <ul>
        <li>Payroll Management</li>

        <i class="fas fa-angle-right"></i>

        <li>Element Setup</li>

        <i class="fas fa-angle-right"></i>
        <router-link to="/">
          <li>Element</li>
        </router-link>
      </ul>
    </nav>
    <main>
      <section style="position: relative">
        <h4>Elements</h4>
        <!--component header-->
        <div id="header-container">
          <div id="component-header">
            <SearchBar :placeholder="'Search for element'" />
            <i class="fas fa-sliders-h"></i>
          </div>

          <div>
            <button id="create-element-btn" @click.prevent="elementStore.createElement = true">
              Create Element <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>

        <AppTable />
      </section>
    </main>
  </section>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue';
import { useElementStore } from '@/stores/element.js';
import AppTable from '@/components/AppTable.vue';

const elementStore = useElementStore();
</script>

<style lang="scss" scoped>

nav {
  ul {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;
    color: var(--primary-60);
    i {
      color: var(--primary);
    }

    li {
      font: 700 14px poppins;
    }
  }
}

main {
  padding: 8px;

  section {
    width: 90%;
    padding: 16px;
    background-color: var(--white);
    border-radius: 6px;
    position: relative;

    h4 {
      color: var(--primary);
    }
  }
}

#header-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-radius: 6px;
  margin: 24px 0;
  background-color: var(--light);

  div:nth-child(2) {
    justify-self: end;
  }
}

#component-header {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 32px;
  width: 100%;
  align-items: center;

  i {
    padding: 8px;
    border-radius: 4px;
    color: var(--white);
    background-color: var(--primary);
  }
}

#create-element-btn {
  background-color: var(--secondary);
  color: var(--white);
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
}
</style>

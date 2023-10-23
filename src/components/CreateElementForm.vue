<template>
  <div id="main-container" v-if="elementStore.createElement">
    <div>
      <h3>Create Element</h3>
    </div>
    <VeeForm>
      <!--Name and classification-->
      <div class="container">
        <div>
          <label for="name">Name</label>
          <VeeField type="text" name="name" id="name" placeholder="Input Name" />
        </div>
        <div>
          <label for="classification">Element Classification</label>
          <select name="classification" id="classification">
            <option value="">Select Classification</option>
            <option value="Post-Tax Deduction">Post-Tax Deduction</option>
            <option value="Pre-Tax Deduction">Pre-Tax Deduction</option>
            <option value="Taxable Earnings">Taxable Earnings</option>
          </select>
        </div>
      </div>

      <!--categor and payrun-->
      <div class="container">
        <div>
          <label for="category">Element Category</label>
          <select name="category" id="category">
            <option value="">Select Category</option>
            <option value="Deduction">Deduction</option>
            <option value="Earnings">Earnings</option>
          </select>
        </div>
        <div>
          <label for="classification">Payrun</label>
          <select name="classification" id="classification">
            <option value="">Select Payrun</option>
            <option value="Monthly Run">Monthly Run</option>
            <option value="Weekly Run">Weekly Run</option>
            <option value="Annual Run">Annual Run</option>
            <option value="Quarterly Run">Quarterly Run</option>
            <option value="Custom Run">Custom Run</option>
          </select>
        </div>
      </div>

      <div class="textarea-container">
        <label for="description">Description</label>
        <textarea rows="3" placeholder="Input Description"></textarea>
      </div>

      <div class="textarea-container">
        <label for="reporting-name">Reporting Name</label>
        <textarea rows="3" placeholder="Input Reporting Name"></textarea>
      </div>

      <div id="btn-container">
        <button type="button" id="cancel" @click.prevent="elementStore.createElement = false">
          Cancel
        </button>
        <button type="Submit">Next</button>
      </div>
    </VeeForm>
  </div>
  <!--overlay-->
  <div
    id="overlay"
    v-if="elementStore.createElement"
    @click.prevent="elementStore.createElement = false"
  ></div>
</template>

<script setup>
import { useElementStore } from '@/stores/element.js';

const elementStore = useElementStore();
</script>

<style lang="scss" scoped>
#main-container {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  background-color: var(--white);
  padding: 32px;
  border-radius: 6px;
  z-index: 10;

  h3 {
    color: var(--primary);
    margin-bottom: 32px;
  }

  label {
    font: 400 14px auto;
    color: var(--primary-40);
    display: block;
    margin-bottom: 8px;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 16px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    div {
      margin-bottom: 16px;
      input,
      select {
        padding: 8px 16px;
        width: 100%;
      }
    }
  }

  .textarea-container {
    margin-bottom: 16px;
  }

  #btn-container {
    display: flex;
    gap: 24px;

    button {
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 4px;
      font-weight: 500;
    }

    button:not(.cancel) {
      background-color: var(--secondary);
      color: var(--white);
    }

    #cancel {
      background-color: transparent;
      color: var(--secondary);
      border: 2px solid var(--secondary);
    }
  }
}

#overlay {
  position: absolute;
  top: 0;
  background-color: rgba($color: #000000, $alpha: 0.2);
  width: 100%;
  height: 100%;
}
</style>

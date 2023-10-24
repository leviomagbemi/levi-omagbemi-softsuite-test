<template>
  <div id="main-container" v-if="elementStore.createElement">
    <div>
      <h3>Create Element</h3>
    </div>
    <!--details-->
    <div id="completion-bar">
      <div id="bar" :style="{ width: progress + '%' }"></div>

      <div id="steps-container">
        <div id="step1">
          <span v-if="completion === 1">1</span>
          <i class="fas fa-check" v-if="completion === 2"></i>
        </div>
        <div
          id="step2"
          :style="
            completion === 2 ? { backgroundColor: 'var(--secondary)', color: 'var(--white)' } : ''
          "
        >
          2
        </div>
      </div>
    </div>
    <VeeForm @submit="createElement" :validation-schema="schema" id="form">
      <!--step one fields-->
      <div v-if="completion === 1">
        <!--Name and classification-->
        <div class="container">
          <div>
            <label for="name">Name</label>
            <VeeField v-model="name" type="text" name="name" id="name" placeholder="Input Name" />
            <ErrorMessage name="name" id="error" />
          </div>

          <div>
            <label for="classification">Element Classification</label>
            <VeeField v-slot="{ field }" v-model="classification" name="classification">
              <select v-bind="field" name="classification" id="classification">
                <option value="">Select Classification</option>
                <option value="Post-Tax Deduction">Post-Tax Deduction</option>
                <option value="Pre-Tax Deduction">Pre-Tax Deduction</option>
                <option value="Taxable Earnings">Taxable Earnings</option>
              </select>
            </VeeField>
            <ErrorMessage name="classification" id="error" />
          </div>
        </div>

        <!--category and payrun-->
        <div class="container">
          <div>
            <label for="category">Element Category</label>
            <VeeField v-slot="{ field }" v-model="category" name="category">
              <select v-bind="field" name="category" id="category">
                <option value="">Select Category</option>
                <option value="Deduction">Deduction</option>
                <option value="Earnings">Earnings</option>
              </select>
            </VeeField>
            <ErrorMessage name="category" id="error" />
          </div>
          <div>
            <label for="payrun">Payrun</label>
            <VeeField v-slot="{ field }" v-model="payrun" name="payrun">
              <select v-bind="field" name="payrun" id="payrun">
                <option value="">Select Payrun</option>
                <option value="Monthly Run">Monthly Run</option>
                <option value="Weekly Run">Weekly Run</option>
                <option value="Annual Run">Annual Run</option>
                <option value="Quarterly Run">Quarterly Run</option>
                <option value="Custom Run">Custom Run</option>
              </select>
            </VeeField>
            <ErrorMessage name="payrun" id="error" />
          </div>
        </div>

        <!--description-->
        <div class="textarea-container">
          <label for="description">Description</label>
          <VeeField v-slot="{ field }" v-model="description" name="description">
            <textarea
              v-bind="field"
              rows="3"
              name="description"
              placeholder="Input Description"
            ></textarea>
          </VeeField>
          <ErrorMessage name="description" id="error" />
        </div>

        <!--reporting name-->
        <div class="textarea-container">
          <label for="reporting-name">Reporting Name</label>
          <VeeField v-slot="{ field }" v-model="reportingName" name="reporting-name">
            <textarea
              v-bind="field"
              rows="3"
              name="reporting-name"
              placeholder="Input Reporting Name"
            ></textarea>
          </VeeField>
          <ErrorMessage name="reporting-name" id="error" />
        </div>
      </div>

      <!--step two fields-->
      <div v-if="completion === 2">
        <!--Start Date and End Date-->
        <div class="container">
          <div>
            <label for="start-date">Effective Start Date</label>
            <VeeField type="date" name="start-date" id="start-date" placeholder="Select Date" />
            <ErrorMessage name="start-date" id="error" />
          </div>

          <div>
            <label for="classification">Effective End Date</label>
            <VeeField type="date" name="end-date" id="end-date" placeholder="Select Date" />
            <ErrorMessage name="end-date" id="error" />
          </div>
        </div>

        <!--processing type and payfrequency-->
        <div class="container">
          <div>
            <legend>Processing Type</legend>
            <div id="processing-type-container">
              <div class="radio-container">
                <VeeField name="processing-type" id="open" type="radio" value="Open" checked />
                <label for="open">Open</label>
              </div>

              <div class="radio-container">
                <VeeField name="processing-type" id="closed" type="radio" value="Closed" />
                <label for="closed">Closed</label>
              </div>
            </div>
            <ErrorMessage name="processing-type" id="error" />
          </div>

          <div>
            <legend>Pay Frequency</legend>
            <div id="pay-frequency-container">
              <div class="radio-container">
                <VeeField name="pay-frequency" id="open" type="radio" value="Monthly" checked />
                <label for="monthly">Monthly</label>
              </div>

              <div class="radio-container">
                <VeeField name="pay-frequency" id="closed" type="radio" value="Selected Months" />
                <label for="selected-months">Selected Months</label>
              </div>
            </div>
            <ErrorMessage name="pay-frequency" id="error" />
          </div>
        </div>

        <!--Pay Months-->
        <div id="pay-months-container">
          <label for="pay-months">Selected Pay Months</label>
          <VeeField v-slot="{ field }" v-model="payMonths" name="pay-months">
            <select v-bind="field" name="pay-months" id="pay-months">
              <option value="">Select</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="october">october</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </VeeField>
          <ErrorMessage name="pay-months" id="error" />
        </div>

        <!--prorate and status-->
        <div class="container">
          <div>
            <legend>Prorate</legend>
            <div id="prorate">
              <div class="radio-container">
                <VeeField name="prorate" id="yes" type="radio" value="Yes" checked />
                <label for="yes">Yes</label>
              </div>

              <div class="radio-container">
                <VeeField name="prorate" id="no" type="radio" value="No" />
                <label for="no">No</label>
              </div>
            </div>
            <ErrorMessage name="prorate" id="error" />
          </div>

          <div>
            <legend>Status</legend>
            <div id="status">
              <div class="status-container">
                <VeeField v-slot="field" name="status" v-model="status">
                  <i
                    v-bind="field"
                    :class="`fas fa-toggle-${status ? 'on' : 'off'} fa-lg`"
                    @click="status = !status"
                  ></i>
                </VeeField>
                <label for="status"> Active</label>
              </div>
            </div>
            <ErrorMessage name="status" id="error" />
          </div>
        </div>
      </div>

      <div id="btn-container">
        <button
          type="button"
          id="cancel"
          @click.prevent="cancelSubmission"
          v-text="completion === 1 ? 'Cancel' : 'Back'"
        ></button>

        <button
          type="button"
          :disabled="checkFields"
          v-if="completion === 1"
          @click.prevent="updateCompletion"
        >
          Next
        </button>
        <button type="submit" v-if="completion === 2">Create Element</button>
      </div>
    </VeeForm>
  </div>
  <!--overlay-->
  <div id="overlay" v-if="elementStore.createElement" @click.prevent="cancelSubmission"></div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useElementStore } from '@/stores/element.js';

const elementStore = useElementStore();
const name = ref('');
const classification = ref('');
const category = ref('');
const payrun = ref('');
const description = ref('');
const reportingName = ref('');
const payMonths = ref('');
const progress = ref(25);
const completion = ref(1);
const status = ref(false);

const checkFields = computed(() => {
  return name.value === '' ||
    classification.value === '' ||
    description.value === '' ||
    category.value === '' ||
    payrun.value === '' ||
    reportingName.value === ''
    ? true
    : false;
});

const schema = {
  name: 'required|min:2|max:20',
  classification: 'required',
  category: 'required',
  payrun: 'required',
  description: 'required',
  'reporting-name': 'required',
  'start-date': 'required',
  'end-date': 'required',
  'processing-type': 'required',
  'pay-frequency': 'required',
  'pay-months': 'required',
  prorate: 'required'
};

async function createElement(values) {
  const id = Math.floor(Math.random() * 100 + 1);

  const data = await fetch('https://650af6bedfd73d1fab094cf7.mockapi.io/elements', {
    method: 'POST',
    body: JSON.stringify({
      name: values.name,
      description: values.description,
      payRunId: 0,
      payRunValueId: 0,
      classificationId: 0,
      classificationValueId: 0,
      categoryId: 0,
      categoryValueId: 0,
      reportingName: values.reportingName,
      processingType: 'Open',
      status: 'Active',
      prorate: 'No',
      effectiveStartDate: new Date().toLocaleDateString(),
      effectiveEndDate: null,
      selectedMonths: ['January'],
      payFrequency: values.payrun,
      modifiedBy: 'Levi Omagbemi',
      id
    })
  });

  const res = await data.json();
}

function updateCompletion() {
  progress.value += 50;
  completion.value++;
}

function cancelSubmission(e) {
  if (e.target.textContent === 'Back') {
    completion.value -= 1;
    progress.value = 25;
  } else {
    progress.value = 25;
    completion.value = 1;
    elementStore.createElement = false;
  }
}
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

  label:not([for='open']):not([for='closed']):not([for='monthly']):not([for='selected-months']):not(
      [for='yes']
    ):not([for='no']),
  legend {
    font: 400 14px auto;
    color: var(--primary-40);
    display: block;
    margin-bottom: 8px;
  }

  textarea {
    resize: none;
    width: 100%;
    padding: 16px;
    border: 1px solid #000;
    border-radius: 4px;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;

    > div {
      margin-bottom: 16px;
      input:not([type='radio']),
      select {
        padding: 8px 16px;
        width: 100%;
        border: 1px solid #000;
        border-radius: 4px;
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

  #completion-bar {
    position: relative;
    height: 5px;
    border-radius: 4px;
    background-color: var(--light);
    margin-bottom: 32px;

    #bar {
      height: 5px;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      background-color: var(--secondary);
    }

    #steps-container {
      width: 50%;
      display: flex;
      justify-content: space-between;
      position: absolute;
      top: -17px;
      left: 50%;
      transform: translateX(-50%);
      #step1 {
        width: 40px;
        height: 40px;
        background-color: var(--secondary);
        color: var(--white);
        text-align: center;
        padding: 8px 0 0 0;
        border-radius: 50%;
      }

      #step2 {
        width: 40px;
        height: 40px;
        background-color: var(--white);
        color: var(--secondary);
        border: 2px solid var(--secondary);
        text-align: center;
        padding: 8px 0 0 0;
        border-radius: 50%;
      }
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

#error {
  color: red;
}

#processing-type-container,
#pay-frequency-container,
#prorate,
#status {
  display: flex;
  gap: 40px;
  border: solid 1px #000;
  border-radius: 4px;
  padding: 8px 16px;

  .radio-container {
    display: flex;
    gap: 4px;
    align-items: center;
  }
}

.status-container {
  display: flex;
  gap: 8px;
  align-items: center;

  i {
    color: var(--secondary);
    font-size: 24px;
  }
}

#pay-months-container {
  margin-bottom: 24px;
  select {
    padding: 16px;
    width: 100%;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: var(--light);
  }
}
</style>

import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

export const useElementStore = defineStore('element', {
  state: () => ({
    create: ref(false),
    elements: reactive([])
  }),

  actions: {
    async createElement(values, completion) {
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
          reportingName: values['reporting-name'],
          processingType: values['processing-type'],
          status: values.status,
          prorate: values.prorate,
          effectiveStartDate: values['start-date'],
          effectiveEndDate: values['end-date'],
          selectedMonths: values['pay-months'],
          payFrequency: values.payrun,
          modifiedBy: 'Levi Omagbemi',
          id
        })
      });

      await data.json();

      this.elements.push({
        ...values,
        dateTime: `${new Date().toLocaleDateString()}||${new Date().toLocaleTimeString()}`,
        modifiedBy: 'Levi Omagbemi',
        action: '...',
        showModal: false
      });
      this.create = false;
      completion.value += 1;
    }
  }
});

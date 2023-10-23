import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VeeValidatePlugin from './includes/validation';
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives
});

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VeeValidatePlugin);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(vuetify);

app.mount('#app');

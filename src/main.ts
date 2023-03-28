import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import SvgIcon from './components/common/SvgIcon.vue';

import App from './App.vue';
import { router } from './router';

import './styles/base.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Toastify, {
  autoClose: 2000,
} as ToastContainerOptions);
app.component('SvgIcon', SvgIcon);

app.mount('#app');

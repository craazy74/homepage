import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
//import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';
import Image from 'primevue/image';

import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.component('Image', Image);

app.use(createPinia());
app.use(router);
app.use(PrimeVue, {
  theme: {
    //preset: Aura,
  },
});

app.mount('#app');



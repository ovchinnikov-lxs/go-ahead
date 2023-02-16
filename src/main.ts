import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import '~/assets/scss/common/_bundle.scss';

const app = createApp(App);

app.use(router);

app.mount('#app');

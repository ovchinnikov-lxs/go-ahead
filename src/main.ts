import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

import '~/assets/scss/common/_bundle.scss';

const app = createApp(App);

app.use(router);


axios.defaults.baseURL = 'https://dummyjson.com';
app.use(VueAxios, axios);
app.provide('axios', app.config.globalProperties.axios);

app.mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import careButtonPlugin from './careButtonPlugin';

import './assets/main.css';

createApp(App).use(careButtonPlugin).mount('#app');

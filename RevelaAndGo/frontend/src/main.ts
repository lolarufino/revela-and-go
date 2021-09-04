import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VWave from 'v-wave';

createApp(App).use(store).use(VWave, {
    color: 'red',
    easing: 'ease-out',
    duration: 0.4,
    initialOpacity: 0.2,
    finalOpacity: 0.1,
    cancellationPeriod: 95,
  }).use(router).mount('#app');

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import DKToast from 'vue-dk-toast';

createApp(App).use(DKToast, {
    duration: 3000,
    positionY: 'bottom',
    positionX: 'right',
    styles: {
        color: '#fff',
        backgroundColor: '#000',
        width: '80px',
        border: '3px solid #fff'
    },
}).use(store).use(router).mount('#app');

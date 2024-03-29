import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// const RemoteButton = () => import('remote/RemoteButton');
// Vue.component('RemoteButton', RemoteButton);

new Vue({
    render: (h) => h(App)
}).$mount('#app');

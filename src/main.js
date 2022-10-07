import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './page/HomePage.vue'
import Match from './page/MatchPage.vue'

const routes = [
    { path: '/', component: Home, props:true},
    { name: 'Match', path: '/match/:name', component: Match, props:true},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)
VueApp.use(router)
VueApp.mount('#app');


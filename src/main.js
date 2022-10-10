import { createApp } from 'vue'
import App from './App.vue'

import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './page/HomePage.vue'
import Match from './page/MatchPage.vue'
import Login from './page/LoginPage.vue'
import Booking from './page/BookingPage.vue'
import AboutUs from './page/AboutUs.vue'

const routes = [
    { path: '/', component: Home, props:true},
    { name: 'Match', path: '/match/:name', component: Match, props:true},
    { name: 'Login', path: '/login', component: Login, props:true},
    { name: 'Booking', path: '/match/:name/booking', component: Booking, props:true},
    { name: 'AboutUs', path: '/aboutus', component: AboutUs, props:true},

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const VueApp = createApp(App)
VueApp.use(router)
VueApp.mount('#app');


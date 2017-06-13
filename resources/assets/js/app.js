
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import  Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import App from './components/App.vue';
import VueHotkey from 'v-hotkey'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueParticles from 'vue-particles'
import vueXlsxTable from 'vue-xlsx-table'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    NProgress.start();
    return config;
}, function (error) {
    // Do something with request error
    NProgress.done(false);
    console.error(error)
    return Promise.reject(error);
});
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    NProgress.done();

    return response;
}, function (error) {
    // Do something with response error
    NProgress.done(false);
    console.error(error)
    return Promise.reject(error);
});
/*$( document ).ajaxSend(function( event, request, settings ) {
console.log(1);
NProgress.start();
});*/

$(document ).ajaxComplete(function( event, request, settings ) {
    console.log(2);
    NProgress.done();
});

$(document ).ajaxStart(function( ) {
    NProgress.start();
});
Vue.use(vueXlsxTable, {rABS: false})
Vue.use(VueParticles)
Vue.use(VueRouter);
Vue.use(VueHotkey);
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

new Vue(Vue.util.extend({router}, App)).$mount('#el');


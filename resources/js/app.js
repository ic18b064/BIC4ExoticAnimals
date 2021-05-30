/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');

import Vue from 'vue';
import vue from 'vue';
import moment from 'moment';

window.Vue = vue;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('query-message', require('./components/base/QueryMessage.vue').default);
Vue.component('animal-index', require('./components/animal/animal-index').default);
Vue.component('animal-create', require('./components/animal/animal-create').default);
Vue.component('animal-edit', require('./components/animal/animal-edit').default);
Vue.component('animal-search', require('./components/animal/animal-search').default);
Vue.component('animal-show', require('./components/animal/animal-show').default);
Vue.component('species-index', require('./components/species/species-index').default);
Vue.component('species-create', require('./components/species/species-create').default);
Vue.component('species-edit', require('./components/species/species-edit').default);
Vue.component('species-show', require('./components/species/species-show').default);

/**
 * Filters 
 */

 Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY hh:mm')
    }
});

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */



const app = new Vue({
    el: '#app',

});

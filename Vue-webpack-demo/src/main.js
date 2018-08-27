import Vue from 'vue';
import App from './App';
var vm = new Vue({
    el: "#root",
    render: h => h(App)
});
window.vm = vm;
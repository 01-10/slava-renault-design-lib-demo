import Vue from 'vue'
import DesignLib from '@slava/renault-design-lib'

import App from './App.vue'

DesignLib(Vue)

new Vue({
    el: '#app',
    render: h => h(App)
})

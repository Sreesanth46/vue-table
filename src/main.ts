import VueTable from './components/VueTable.vue';
import './assets/tailwind.css';

export {
    VueTable
}

export default {
    install(app: any, options: any) {
        app.component('VueTable', VueTable)
    }
}
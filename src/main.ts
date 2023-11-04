import VueTable from './components/VueTable.vue';
import VuePaginator from './components/Paginator/VuePaginator.vue';
import './assets/tailwind.css';

export {
    VueTable,
    VuePaginator
}

export default {
    install(app: any, options: any) {
        app.component('VueTable', VueTable),
        app.component('VuePaginator', VuePaginator)
    }
}
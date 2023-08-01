import VueTable from './components/VueTable.vue';

export {
    VueTable
}

export default {
    install(app: any, options: any) {
        app.component('VueTable', VueTable)
    }
}
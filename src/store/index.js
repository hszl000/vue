import { createStore } from 'vuex'

export default createStore({
    state: {
        addList: []
    },
    mutations: {
        addList(store, val) {
            store.addList.unshift({...val })
        }
    },
    actions: {},
    modules: {}
})
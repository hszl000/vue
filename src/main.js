import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import * as dayjs from 'dayjs'

const app = createApp(App)

app.use(ElementPlus)
app.config.globalProperties.$filters = {
    filterFn(value) {
        if (value) {
            return '正常'
        } else {
            return '禁用'
        }
    },
    filterTime(value) {
        return dayjs(value).format('YYYY-MM-DD')
    },
    filterTimeOut(val) {
        return dayjs(val).format('YYYY-MM-DD')
    }
}
app.use(store)
app.use(router)
app.mount('#app')
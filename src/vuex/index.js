import Vue from 'vue'
import Vuex from 'vuex'
import com from './modules/com'
import userinfo from './modules/userinfo'
import orderInfo from './modules/orderInfo'
Vue.use(Vuex)
const store = new Vuex.Store({
    modules:{
        com,
        userinfo,
        orderInfo
    },
    // 开启严格模式 
    strict:process.env.NODE_ENV !== 'production'
})
export default store;
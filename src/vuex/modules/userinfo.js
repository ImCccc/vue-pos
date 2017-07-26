import {getUserInfo, setUserInfo} from '../../common/util/cache.js'
const state = {
    userInfo : getUserInfo()
} 
const getters = {
    userInfo: (state) => {
        return state.userInfo;
    }
}
const mutations = {
    'UPDATE_USER_INFO' (state,res){
        if ( Object.prototype.toString.call(res).split(' ')[1].slice(0,-1) === "Object") {
            state.userInfo = setUserInfo(res)
        }
    }
}
export default {
    state,
    getters,
    mutations
}
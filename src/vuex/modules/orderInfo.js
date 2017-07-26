const state = {
    // 訂單請求參數
    orderMessage:{
    } 
} 
const getters = {
    orderMessage: state => state.orderMessage
}
const mutations = {
    'ORDER_MESSAGE' (state,res){
        if ( Object.prototype.toString.call(res).split(' ')[1].slice(0,-1) === "Object") {
            state.orderMessage = Object.assign( state.orderMessage , res ) ; 
        }
    }
}
export default {
    state,
    getters,
    mutations
}
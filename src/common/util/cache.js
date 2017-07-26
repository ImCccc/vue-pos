import storage from 'good-storage'
const USERINFO = '__userInfo__'
const PARAMS = '__params__'
const INIT_USERINFO = {
        "regionCode":"130",     //当前地区代码
        "staffNumber":"",       //员工编号
        "posCode":"",           //当前POS
        "shopCode":"",          //当前登录中心编号
        "supFlag":"",           //是否主任
        "shopName":"",          //当前登录中心名称
        "saleDate":"",          //当前系统日期    当前营业日期
        "staffName":"",         //员工姓名
        "strUUID":""            //请求接口的公共参数 
}
export function getUserInfo() {
    return storage.get(USERINFO, INIT_USERINFO)
}
export function setUserInfo(userInfo) {
    var commit = storage.get(USERINFO, INIT_USERINFO)
    if (userInfo instanceof Object) {
        Object.assign(commit , userInfo)
    }
    storage.set(USERINFO, commit)
    return commit
}

export function getParams() {
    return storage.get(PARAMS, {})
}
export function setParams(userInfo) {
    storage.set(PARAMS, userInfo)
}
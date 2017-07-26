import {mapGetters , mapMutations} from 'vuex'
import {getParams, setParams} from 'common/util/cache.js'
import {fetch_request} from 'common/util/fetch.js'

module.exports = {
    install(Vue , options) {
        Vue.mixin({
            computed: {
                ...mapGetters([
                    'prevRoute',
                    'userInfo'
                ])
            },
            methods : {
                ...mapMutations([
                    'UPDATE_PREVROUTE',
                    'UPDATE_LOADING',
                    'UPDATE_ISSHOWMENU',
                    'UPDATE_ISSHOWFOOTER',
                    'UPDATE_PROMPT',
                    'UPDATE_PROMPTS'
                ]),
                back() {
                    this.$pos_back()
                },
                // 点击底部按钮事件，或传递一个事件名称过来，根据事件名称，执行对应事件
                footerMenuEvent(clickEvent) {
                    if (typeof this[clickEvent] === 'function') {
                        this[clickEvent].call(this)
                    }
                },
                _getCommonParams() {
                    let userInfo = this.userInfo
                    return {
                        "staffNumber":userInfo.staffNumber,
                        "regionCode":userInfo.regionCode,
                        "shopCode":userInfo.shopCode,
                        "posCode":userInfo.posCode,
                        "strUUID":userInfo.strUUID,
                        "formateDate":"yyyy-MM-dd"
                    }
                }
            }
        }) 
        // 添加实例方法
        Object.assign(Vue.prototype , {
            $copy(data) {
                if (data instanceof Object) {
                    return JSON.parse(JSON.stringify(data))
                } 
                return data
            } , 
            /*跳轉頁面傳遞參數*/
            $pos_setParams(params) {
                setParams(params)
            } ,
            /*獲取上一個頁面傳遞的參數*/
            $pos_getParams() {
                return getParams()
            } ,
            /*初始化數據*/
            $pos_init_data() {
                try {
                    var _data = JSON.parse(JSON.stringify(this.$data))  
                    for (let key in this.$data) {
                        if (_data[key] !== undefined) {
                            this.$data[key] = _data[key] 
                        }
                    }
                } catch (e) {
                    console.log(e)
                }
            } , 
            /*返回*/
            $pos_back (params ,destroy) {
                if (typeof params !== 'object') {
                    params =  {params : params} 
                }
                this.$pos_setParams(params)
                this.$router.back() 
                //$destroy()完全销毁一个实例
                if(destroy === true) {
                    this.$destroy() 
                }
            } , 
            /*跳轉頁面的*/
            $pos_goPage (router ,params ,destroy) {
                params = params || {} 
                this.$pos_setParams(params)
                this.$router.push({
                    name: router , 
                    params: Object.assign({POS_INIT_VIEW : true } , params) 
                }) 
                if(destroy === true) {
                    this.$destroy() 
                }
            } , 
            /*頁面清除*/
            $pos_clean_page (callback) {
                var vm = this
                this.$store.commit('UPDATE_PROMPT', {msg : '請您確認是否要清除' , buttonNum : 2 ,
                    confirmCallBack() {
                        if (typeof callback === 'function') {
                            callback.call(vm)
                        }
                    } 
                }) 
            } , 
            /*檢驗輸入的必須輸數字，不然提示用戶*/
            $check_inputIsNum (data , msg , ref) {
                var vm = this  
                var val 
                if (data instanceof Array) {
                    if (this[data[0]] === undefined) return false  
                    data.forEach((item , index) => {
                        if (index === 0) {
                            val = this[item]
                        } else {
                            val = val[item] 
                        }
                    })  
                } else {
                    if (this[data] === undefined) return false  
                    val = this[data]  
                }
                if (val == '0' || +val == 0 || +val) return false
                if (ref) {this.$refs[ref].blur() }
                vm.$store.commit('UPDATE_PROMPT', {msg : `${msg}必須是數字`,
                    confirmCallBack() {
                        if (data instanceof Array) {
                            if (data.length < 2) {
                                vm[data[0]]  = val.replace(/[^\d]/g,'') 
                                return
                            }
                            var _updata 
                            data.forEach((item , index) => {
                                if (index === 0) {
                                    _updata = vm[item]
                                } else {
                                    _updata = _updata[item] 
                                }
                                if (index === (data.length - 2)) {
                                    _updata[data[index + 1]] = val.replace(/[^\d]/g,'')  
                                }
                            })  
                        } else {
                            vm[data]  = val.replace(/[^\d]/g,'') 
                        }
                        if (ref) {vm.$refs[ref].focus()}
                    }
                }) 
                return true
            } , 
            /*檢驗輸入不能為空，不然提示用戶*/
            $check_inputIsNull (data , msg , ref) {
                var vm = this  
                var val 
                if (data instanceof Array) {
                    if (this[data[0]] === undefined) return false  
                    data.forEach((item , index) => {
                        if (index === 0) {
                            val = this[item]
                        } else {
                            val = val[item] 
                        }
                    })  
                } else {
                    if (this[data] === undefined) return false  
                    val = this[data]  
                }
                if (typeof val !== 'string' ||  val.trim() !== '') return false 
                if (ref) {this.$refs[ref].blur() }
                vm.$store.commit('UPDATE_PROMPT', {msg : `${msg}不能為空`,
                    confirmCallBack() {
                        if (ref) {vm.$refs[ref].focus()}
                    }
                }) 
                return true
            } , 
            /* 公共請求接口方法 */
            $es6_post (service, params ,setting) {

                // 获取公共参数
                let commonParams = this._getCommonParams()
                // 合并参数
                Object.assign(commonParams, params || {})
                // 输出参数
                console.log(`${service}的请求参数是：`,commonParams)
                // 拼接url
                let body =`service=${service}&input=${JSON.stringify(commonParams)}`
                // 显示菊花
                this.$store.commit('UPDATE_LOADING' , true)

                // 一些设置
                setting = setting || {}

                // 请求接口
                return new Promise((resolve , reject) => {
                    fetch_request(body, (resp) => {

                        // 隐藏菊花
                        this.$store.commit('UPDATE_LOADING' , false)
                        
                        // 格式返回数据
                        let result = JSON.parse(resp.result)
                        console.log(`${service}的请求的返回是：`,result)

                        // 返回是否成功的标识 0 代表成功， 1 失败
                        let resultCode = result.resultCode

                        // 返回的提示信息
                        let retErrors = typeof result.retErrors === 'string' ? result.retErrors.split() : result.retErrors

                        // 处理返回异常的情况
                        if (resultCode == '1') {
                            // 登录超时
                            if (result.relogin == true && retErrors instanceof Array) {
                                this.$store.commit('UPDATE_PROMPT', {
                                    msg :retErrors.join('') ,
                                    confirmCallBack() {
                                        this.$pos_goPage('login')
                                        reject() 
                                    }
                                }) 
                            } 
                            // 传递：hideErrorMsg == true 不提示错误信息
                            else if (setting.hideErrorMsg) {
                                reject(result)
                            } 
                            // 提示错误信息
                            else {
                                this.$store.commit('UPDATE_PROMPT', {
                                    msg : result.retErrors.join('') ,
                                    confirmCallBack() {
                                        reject(result) 
                                    }
                                }) 
                            }
                        } 
                        // 处理返回正常的情况
                        else if (resultCode == '0') {
                            // 如果没有返回提示信息，或者不需要提示 ，直接返回结果
                            if (!retErrors || !retErrors[0] || !setting.hidePromptMsg) {
                                resolve(result)
                            } else {
                                this.$store.commit('UPDATE_PROMPT', {
                                    msg : result.retErrors.join('') ,
                                    confirmCallBack() {
                                        resolve(result) 
                                    }
                                })  
                            }
                        } 
                        // 其他情况
                        else {
                            this.$store.commit('UPDATE_PROMPT', '返回的数据错误！') 
                            reject()
                        }
                    }, () => {
                        // 隐藏菊花
                        this.$store.commit('UPDATE_LOADING' , false)
                        this.$store.commit('UPDATE_PROMPT', '网络请求失败！') 
                        reject()
                    })
                })
            } 
        })
    }
}
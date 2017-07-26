import * as confige from '../../confige/page-title-confige.js'
const null_function = function () {}
const state = {
    title :'',
    prevRoute :'',
    nextRoute :'',
    loading :false ,
    isShowMenuIcon :true,
    isShowMenu :false,
    isShowFooter :false,
    prompt:{
        isShow :false, 
        msg: '',
        buttonNum :1,
        button: {
            confirm :'確定' ,
            cancel :'取消' 
        } , 
        confirmCallBack :null_function,
        cancelCallBack :null_function 
    } ,
    prompts:{
        isShow :false,
        msgs :[{
            msg: '',
            button: {
                confirm: '确定'
            }
        }] ,
        confirmCallBack :null_function,
        cancelCallBack :null_function 
    }
}
const getters = {
    comConf: state => state,
    title: state => state.title,
    prompt: state => state.prompt,
    prompts: state => state.prompts,
    loading: state => state.loading,
    prevRoute: state => state.prevRoute,
    nextRoute: state => state.nextRoute,
    isShowMenu: state => state.isShowMenu,
    isShowMenuIcon: state => state.isShowMenuIcon,
    isShowFooter: state => state.isShowFooter
}
const mutations = {
    'UPDATE_STATE' ( state, settings )  {
        if (settings.title) {
            settings.title = confige.PAGE_NAME_TITLE[settings.title] ; 
        }
        state = Object.assign(state,settings)
    } ,
    'UPDATE_PREVROUTE' ( state, update_prevRoute )  {
        state.prevRoute = update_prevRoute; 
    } ,
    'UPDATE_TITLE' ( state, update_title )  {
        state.title = confige.PAGE_NAME_TITLE[update_title]; 
    } ,
    'UPDATE_LOADING' ( state, update_loading )  {
        state.loading = update_loading ; 
    } ,
    'UPDATE_ISSHOWMENUICON' ( state, isShowMenuIcon )  {
        state.isShowMenuIcon = isShowMenuIcon ; 
    } ,
    'UPDATE_ISSHOWMENU' ( state , update_isShowMenu )  {
        if ( typeof update_isShowMenu  === 'boolean' ) {
            state.isShowMenu = update_isShowMenu ; 
        } else {
            state.isShowMenu = !state.isShowMenu ; 
        }
    } ,
    'UPDATE_ISSHOWFOOTER' ( state, update_isshowfooter )  {
        state.isShowFooter = update_isshowfooter ; 
    } ,
    'UPDATE_PROMPT' ( state, update_prompt )  {
        if (typeof update_prompt === 'string' ) {
            state.prompt =  Object.assign( state.prompt ,{ msg : update_prompt} ,{ isShow : true }  );
        } else if ( (typeof update_prompt === 'object' ) ) {
            if ( update_prompt.msg || update_prompt.msgs ) {
                state.prompt =  Object.assign( {}, state.prompt ,update_prompt ,{ isShow : true } );
            } else {
                state.prompt =  Object.assign( {}, state.prompt ,update_prompt);
            }
        }
    } ,
    'UPDATE_PROMPTS' ( state, update_prompt )  {
        if ( update_prompt.isShow == undefined ) {
            update_prompt.isShow = true ;
        }
        if ( update_prompt.msgs && update_prompt.msgs[0] ) {
            state.prompts =  Object.assign( {}, state.prompts ,update_prompt);
        }
    } 
}
export default {
    state,
    getters,
    mutations
}
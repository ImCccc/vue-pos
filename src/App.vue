<template>
    <div class="body">
        <v-header></v-header>
        <v-mainTitle></v-mainTitle>
        <transition :name="transitionName" mode="out-in"> 
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </transition>
        <v-mainMenu :isShowMenu="isShowMenu"></v-mainMenu>
        <v-loading></v-loading>
        <v-prompt></v-prompt>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'
    import menuAuthorize from './confige/menu-authorize-confige.js'
    import mainTitle from 'base/mainTitle'
    import mainMenu from 'base/mainMenu'
    import loading from 'base/loading'
    import header from 'base/header'
    import prompt from 'base/prompt'
    export default {
        data(){
            return {
                transitionName:'slideLeft'
            }
        },
        created:function() {
            this.update_isShowMenuIcon(false)
            if (this.$route.name == undefined) {
                return this.$router.push('login')
            }  
            if (this.$route.name == 'login') {
                this.update_title('login')
            }
        },
        methods: {
            ...mapMutations({
                update_isShowMenuIcon: 'UPDATE_ISSHOWMENUICON',
                update_title: 'UPDATE_TITLE',
                update_state: 'UPDATE_STATE'
            })
        },
        watch:{
            '$route' (to,from){
                this.update_state({ 
                    title: to.name,         //更新页面的标题，例如：安麗第五代銷售系統—POS開業
                    prevRoute : from.name,  //保存当前路由名字
                    nextRoute : to.name,    //保存跳转路由名字
                    isShowMenuIcon : !menuAuthorize[to.name], //根据配置文件，判断是否显示左上角的菜单icon
                    isShowMenu:false,   //跳转页面之前，先隐藏左侧菜单
                    loading : false     // 隐藏菊花
                })
            }
        },
        computed: {
            ...mapGetters([
                'loading' ,
                'isShowMenuIcon',
                'isShowMenu'
            ])
        },
        components  :{
            'v-mainMenu' : mainMenu , 
            'v-mainTitle' : mainTitle,
            'v-header' : header,
            'v-loading' : loading,
            'v-prompt' : prompt
        }
    }
</script>
<style lang="scss" scoped>
    @import "src/common/style/variable.scss";
    .body {
        position: fixed;
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        background-color: $body-bgc;
        background-image: url(common/images/bg-body.png);
        background-size: cover;
    }
    .slideLeft-enter        {transform: translateX(-700px); opacity: 0;}
    .slideLeft-enter-active {transition: all .2s ; }
    .slideLeft-leave-active {transition: all .2s ; }
    .slideLeft-leave-active {transform: translateX(700px); opacity: 0; }
</style>
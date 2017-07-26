<template>
    <transition name="animation-menu">
        <div v-show="isShowMenu" class="main-menu">
            <p class="font-blue-bold">主功能目錄</p>
            <ul>
                <li>
                    <router-link to="/meun_join" class="add">
                        <i class="sprite sprite-icon-add-small"></i>
                        <span>加入</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/meun_order" class="order">
                        <i class="sprite sprite-icon-order-small"></i>
                        <span>訂貨</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/meun_renew" class="renew">
                        <i class="sprite sprite-icon-renew-small"></i>
                        <span>續約</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/meun_query" class="query">
                        <i class="sprite sprite-icon-query-small"></i>
                        <span>查詢</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/" class="refund">
                        <i class="sprite sprite-icon-refund-gray-small"></i>
                        <span>退貨</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="" class="repair">
                        <i class="sprite sprite-icon-repair-gray-small"></i>
                        <span>維修</span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/login_modify_pwd" class="doChangePassword">
                        <i class="sprite sprite-icon-modify-password-small"></i>
                        <span>修改密碼</span>
                    </router-link>
                </li>
                <li>
                    <a @click="goPage_leave('login_leave')" class="exit">
                        <i class="EXIT">EXIT</i>
                        <span>暫時離開</span>
                    </a>
                </li>
                <li>
                    <div class="main-aside-logout">
                        <div><span class="staffName">TEXT</span>您好</div>
                        <div class="ui-small">營 業 日 期:&nbsp<span>2020-06-06</span></div>
                        <router-link to="/login_graduation" class="login-out">登&nbsp;出</router-link>
                    </div>
                </li>
            </ul>
        </div>
    </transition>
</template>
<script>
    export default {
        props: {
            isShowMenu: {
                type: Boolean
            }
        },
        methods : {
            goPage_leave ( name ) {
                this.$store.commit('UPDATE_PROMPT', { msg : '你确定要暂时离开吗？' , buttonNum : 2 ,
                    confirmCallBack : function () { 
                        this.$router.push(name);
                    } 
                }); 
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/variable';
    @import 'src/common/style/mixin';
    @import 'src/common/style/sprite.scss';
    .sprite{
        @include spriteBackgroundImage($route: '../common/images');
        vertical-align: middle;
        margin-right: 2rem;
    }
    .main-menu{
        width: 10rem;
        position: absolute;
        top: 4rem;
        left: 0;
        background-color: $body-bgc;
        z-index: $mainMenu-z-index;
        box-shadow: 0 0 0.5rem #000000;
        p{
            padding-left: 1rem;
            margin: 0.5rem 0;
        }
        ul{
            margin: 0;
            padding: 0;
            list-style: none;
            li{
                border-bottom: 1px solid #626262;
                a{
                    display: block;
                    padding: 0 1rem;
                    height: 2.5rem;
                    line-height: 2.5rem;
                    @include media((height: 2rem, line-height: 2rem));
                    @include media((height: 1.7rem, line-height: 1.7rem), $iphone-6);
                    -webkit-tap-highlight-color: rgba(155, 155, 155, 0.5);
                    color: $font-color-blue;
                    text-decoration: none;
                    .EXIT{
                        margin-right: 1.2rem;
                    }
                }
                .main-aside-logout{
                    background-color: $div-bgc;
                    color: #ffffff;
                    height: auto;
                    line-height: initial;
                    padding: .4rem 0 0;
                    div{
                        padding: 0 1rem;
                    }
                    .ui-small{
                        font-size: $font-small;
                    }
                    .login-out{
                        color: $font-color-gray;
                        font-weight: bold;
                        font-size: 1.2rem;
                        padding: .2rem 1rem;
                        text-decoration: inherit;
                        -webkit-tap-highlight-color: rgba(155, 155, 155, 0.5);
                    }
                }
            }
        }
    }
    .animation-menu-enter-active, .animation-menu-leave-active {
        transition: left 0.5s 
    }
    .animation-menu-enter, .animation-menu-leave-active {  
        left: -10rem; 
    }
</style>
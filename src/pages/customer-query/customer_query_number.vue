<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <header class="section-header">
                <span>顧客姓名&nbsp</span>
                <input class="ui-w-15" type="text">
                <span>身份證編號&nbsp</span>
                <input class="ui-w-30" type="text">
                <span>電話區號&nbsp</span>
                <input class="ui-w-10" type="text">
                <span>電話號碼&nbsp</span>
                <input class="ui-w-20" type="text">
            </header>
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                titleHeight="2rem" 
                :data="data" 
                @scrollToEnd="scrollToEnd">
                <template v-for="item in data">
                    <div> 
                        <div class="tb-list01">{{item}}</div>
                        <div class="tb-list02">{{item}}</div> 
                        <div class="tb-list03">{{item}}</div> 
                        <div class="tb-list04">{{item}}</div> 
                        <div class="tb-list05">{{item}}</div> 
                        <div class="tb-list06">{{item}}</div> 
                        <div class="tb-list07">{{item}}</div> 
                        <div class="tb-list08">{{item}}</div> 
                        <div class="tb-list09">{{item}}</div> 
                    </div>
                </template>
            </list-scroll-warrp>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll';
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data () {
            return {
                data : [] ,
                titles:[
                    '顧客編號',
                    '顧客中文姓名',
                    '顧客英文姓名碼',
                    '身份證號碼',
                    '配偶中文姓名',
                    '配偶英文姓名',
                    '配偶證件/<br/>外僑身份證號',
                    '到期日',
                    '退出日'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '查詢',clickEvent: 'button_query'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
            },20)
        },
        watch : {
        } ,
        components: {
            Scroll,
            FooterButtons,
            ListScrollWarrp
        },
        methods : {
            scrollToEnd() {
            },
            button_query() {
                this.$pos_goPage('customer_query_main')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .section-header{
        @include font($color: $font-color-blue, $weight: bold);
        > span {
            flex-shrink:0;
        }
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
    }
    /*.tb-list01{width: 4rem; }
    .tb-list02{width: 4rem; }
    .tb-list03{width: 4rem; }
    .tb-list04{width: 4rem; }
    .tb-list05{width: 4rem; }
    .tb-list06{width: 4rem; }
    .tb-list07{width: 4rem; }
    .tb-list08{width: 4rem; }
    .tb-list09{width: 4rem; } 
    .tb-list10{}*/
</style>
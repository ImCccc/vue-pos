<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <div class="background-color-white header common-padding">
                <div class="common-list-layout">
                    <span class="ui-w-13">付款人編號</span>
                    <input class="ui-w-20" type="text">&nbsp&nbsp
                    <span class="ui-w-13">訂貨人編號</span>
                    <input class="ui-w-20" type="text">&nbsp&nbsp
                    <span class="ui-w-13">憑單編號</span>
                    <input class="ui-w-20" type="text">
                </div>
                <div class="common-list-layout">
                    <span class="ui-w-13">票劵編號</span>
                    <input class="ui-w-20" type="text">&nbsp&nbsp
                    <span class="ui-w-13">SKU</span>
                    <input class="ui-w-20" type="text">&nbsp&nbsp
                    <span class="ui-w-13">語音代碼</span>
                    <input class="ui-w-20" type="text">
                </div>
                <div class="flex">
                    <span class="ui-w-13">年會票號</span>
                    <input class="ui-w-20" type="text">
                </div>
            </div>
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
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
                    '到期日',
                    '退出日'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '票務資訊',clickEvent: 'button_ticketing_information'},
                    {text: '查詢',clickEvent: ''}
                ]
            }
        }, 
        components: {
            Scroll,
            FooterButtons,
            ListScrollWarrp
        },
        methods : {
            scrollToEnd() {
            },
            button_ticketing_information() {
                this.$pos_goPage('query_ticketing_information')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .header{
        @include font($color: #999696, $weight: bold);
        > div {
            padding-bottom: .4rem;
        }
        > div:last-child{
            padding-bottom: 0rem;
        }
        > span {
            flex-shrink:0;
        }
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
    }
</style>
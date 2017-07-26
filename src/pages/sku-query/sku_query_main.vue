<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <div class="background-color-white header common-padding">
                <div class="common-list-layout">
                    <div class="ui-w-30 flex">
                        <span class="ui-w-35">產品編號</span>
                        <input class="ui-w-63" type="text">
                    </div>
                    <div class="ui-w-45 flex">
                        <span class="ui-w-30">查詢日期範圍</span>
                        <input class="ui-w-30" type="text">&nbsp-&nbsp
                        <input class="ui-w-30" type="text">
                    </div>
                    <div class="ui-w-25 common-list-layout">
                        <span class="ui-w-50">處理人</span>
                        <input class="ui-w-50" type="text">
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-30 flex">
                        <span class="ui-w-35">產品編號</span>
                        <input class="ui-w-25" type="text">&nbsp&nbsp
                        <input class="ui-w-34" type="text">
                    </div>
                    <div class="ui-w-45 flex">
                        <span class="ui-w-30">查詢日期範圍</span>
                        <input class="ui-w-30" type="text">&nbsp-&nbsp
                        <input class="ui-w-30" type="text">
                    </div>
                    <div class="ui-w-25 common-list-layout">
                        <span class="ui-w-50">訂單類型</span>
                        <select class="ui-w-50"></select>
                    </div>
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
                    {clickEvent: 'clear'},
                    {text: '訂單<br/>查詢',clickEvent: ''}
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .header{
        @include font($color: $font-color-blue, $weight: bold);
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
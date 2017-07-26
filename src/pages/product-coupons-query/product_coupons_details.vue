<template>
    <section class="main-section">
        <scroll class="content-section">
            <div class="common-alt-bg">
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">產品抵用券編號</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">顧客編號</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">POS機台</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">員工編號</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">處理中心</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">調整日期</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">系統日期</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">系統時間</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">來源類型</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">使用日期</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">使用人員</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">生效日期</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">結束日期</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">原始金額</span>
                        <span></span>
                    </div>
                    <div class="ui-w-30 flex">
                        <span class="ui-w-45 flex-shrink font-blue">原始BV</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">原始PV</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">剩餘金額</span>
                        <span></span>
                    </div>
                    <div class="ui-w-30 flex">
                        <span class="ui-w-45 flex-shrink font-blue">原始BV</span>
                        <span></span>
                    </div>
                    <div class="ui-w-35 flex">
                        <span class="ui-w-40 flex-shrink font-blue">原始BV</span>
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-35 flex">
                        <span class="ui-w-45 flex-shrink font-blue">調整備註</span>
                        <span></span>
                    </div>
                </div>
            </div>            
        </scroll>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
    export default {
        computed: {
        },
        data () {
            return {
                buttons: [
                    {text: '送貨<br/>地址',clickEvent: 'ddd'},
                    {text: '畫面<br/>清除',clickEvent: 'aaa'},
                    {text: '訂單<br/>查詢',clickEvent: ''},
                    {text: '產品抵用券<br/>查詢',clickEvent: ''},
                    {text: '客戶<br/>查詢',clickEvent: ''},
                    {text: '續約/<br/>折價券',clickEvent: ''},
                    {text: '產品<br/>明細',clickEvent: ''},
                    {text: '確認<br/>付款',clickEvent: ''},
                    {text: '產品<br/>序號',clickEvent: ''},
                    {text: '暫存<br/>訂單',clickEvent: ''},
                    {text: '還原<br/>訂單',clickEvent: ''}             
                ]
            }
        } , 
        components : {
            Scroll,
            FooterButtons
        },
        methods : {
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        .common-list-layout{
            padding: .5rem;
            align-items:baseline;
            > div {
                padding-right: .8rem;
                flex-shrink:0;
            }
            > div:last-child{
                padding-right: 0rem;
            }
            .font-blue{
                @include font($color: $font-color-blue, $weight:bold)
            }
            .flex > span{
                word-break: break-all;
            }
        }
    }
</style>
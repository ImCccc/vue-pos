<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <div class="header common-padding">
                <div class="flex">
                    <span class="ui-w-20">開始日期/結束日期</span>
                    <div class="ui-w-80">        
                        <input type="text" class="ui-w-20"> - <input type="text" class="ui-w-20">
                    </div>
                </div>
                <div class="radio-warrp">
                    <span class="ui-w-20">宅配時段</span>
                    <div>
                        <span><i radio></i>簡訊</span>
                        <span><i radio></i>電子郵件</span>
                        <span><i radio></i>郵寄</span>
                        <span><i radio></i>親臨設定</span>
                        <span><i radio></i>全選</span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <span class="ui-w-20">直銷商/會員編號</span>
                    <div class="ui-w-80 common-list-layout">
                        <input type="text" class="ui-w-42">
                        <span class="ui-w-16">&nbsp&nbsp&nbsp手機</span>
                        <input type="text" class="ui-w-42">
                    </div>
                </div>
                <div class="common-list-layout">
                    <span class="ui-w-20">處理人員代碼</span>
                    <div class="ui-w-80 common-list-layout">
                        <input type="text" class="ui-w-42">
                        <span class="ui-w-16">&nbsp&nbsp&nbsp電子信箱</span>
                        <input type="text" class="ui-w-42">
                    </div>
                </div>
            </div>
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                :data="data" 
                @scrollToEnd="scrollToEnd">
                <template v-for="item in data">
                    <div> 
                    </div>
                </template>
            </list-scroll-warrp>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons'
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data () {
            return {
                data : [] ,
                titles:[
                    '日期',
                    '類型',
                    '發送方式',
                    '直銷商編號',
                    '直銷商姓名',
                    '手機',
                    '電子信箱',
                    '郵寄地址',
                    '處理人員'
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
    @import '../../common/style/address/address.scss';
    @import '../../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        @include font($color: $font-color-blue, $weight: bold);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .header{
            background-color: $white;
            .common-list-layout{
                padding-bottom: .2rem;
            }
            > div {
                padding-bottom: .6rem;
            }
            > div:last-child{
                padding-bottom: 0rem;
            }
        }
    }
</style>
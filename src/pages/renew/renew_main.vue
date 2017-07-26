<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg2">
                <div class="column-layout">
                    <span class="ui-w-20">顧客編號</span>
                    <input readonly class="ui-w-40" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">顧客姓名</span>
                    <input readonly class="ui-w-40" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">續約日期</span>
                    <input readonly class="ui-w-40" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">加入日期</span>
                    <input readonly class="ui-w-40" type="text">
                    <span class="ui-w-15 padding-left">續約類型</span>
                    <input readonly class="ui-w-25" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">顧客類型</span>
                    <input readonly class="ui-w-40" type="text">
                    <span class="ui-w-15 padding-left">現在到期日</span>
                    <input readonly class="ui-w-25" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">推薦人編號</span>
                    <input readonly class="ui-w-40" type="text">
                    <span class="ui-w-15 padding-left">新到日期</span>
                    <input readonly class="ui-w-25" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">推薦人姓名</span>
                    <input readonly class="ui-w-40" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">付款人</span>
                    <input readonly class="ui-w-40" type="text">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">續約費</span>
                    <input readonly class="ui-w-19" type="text">&nbsp&nbsp&nbsp&nbsp
                    <select class="ui-w-19">
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">是否本人</span>
                    <div class="radio-warrp">
                        <i radio></i>&nbsp郵寄&nbsp&nbsp&nbsp
                        <i radio></i>&nbsp櫃檯
                    </div>
                </div>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons';
    export default {
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {clickEvent: 'clear'},
                    {text: '訂單<br/>查詢',clickEvent: ''}
                ]
            }
        } , 
        watch : {
        } ,
        created : function(){
        },
        mounted : function () {
        } , 
        components : {
            FooterButtons
        },
        methods : {
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    @import '../../common/style/address/address.scss';
    .content-section{
        overflow: auto;
        .content-warrp{
            > div {
                padding:.4rem 1rem;
                > span{
                    @include font($color: $font-color-blue, $weight: bold);
                }
                .padding-left{
                    padding-left: 1rem;
                }
            }
            .column-layout{
                .radio-warrp{
                    display: flex;
                    align-items: flex-end;
                    i{
                        background-color: $white;
                        border-radius: 50%;
                    }
                }
                textarea{
                    width: 80%;
                    height: 3rem;
                }
            }
        }
    }
</style>
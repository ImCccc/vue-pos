<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg">
                <div class="column-layout">
                    <h3 class="ui-w-40">直銷商編號</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">統一編號</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">顧客姓名/公司名稱</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">行動</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">市話</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">商品名稱</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">數量</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">手續費</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">總金額</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">付款方式</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-40">作廢人員</h3>
                    <span>2007600</span>
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
                padding:.4rem;
                > h3{
                    @include font($color: $font-color-blue, $weight: bold);
                }
            }
        }
    }
</style>
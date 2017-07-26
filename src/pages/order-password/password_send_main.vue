<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg2">
                <div class="flex">
                    <h3 class="font-blue-bold ui-w-20">直銷商編號</h3>
                    <input type="text">
                </div>
                <div class="flex">
                    <h3 class="font-blue-bold ui-w-20">統一編號</h3>
                    <span>2007600</span>
                </div>
                <div class="flex align-items-center">
                    <h3 class="font-blue-bold ui-w-20">顧客姓名/公司名稱</h3>
                    <div class="flex-column font-blue-bold">
                        <span> <i checkbox></i> 簡訊</span>
                        <span> <i checkbox></i> 電子郵箱</span>
                        <span> <i checkbox></i> 郵寄</span>
                    </div>
                </div>
                <div class="flex">
                    <h3 class="font-blue-bold ui-w-20">行動</h3>
                    <span>2007600</span>
                </div>
                <div class="flex">
                    <h3 class="font-blue-bold ui-w-20">市話</h3>
                    <span>2007600</span>
                </div>
                <div class="flex">
                    <h3 class="font-blue-bold ui-w-20">商品名稱</h3>
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
            }
        }
    }
</style>
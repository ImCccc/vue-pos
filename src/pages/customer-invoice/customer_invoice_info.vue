<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg">
                <div class="one-input">
                    <span class="ui-w-20">直銷商編號</span>
                    <div>
                        <input type="text" placeholder="請輸入直銷商編號">
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20">統一編號</span>
                    <div>
                        <input type="text" placeholder="請輸入統一編號">
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20">顧客姓名/公司名稱</span>
                    <div>
                        <input type="text" class="w-1" placeholder="請輸入顧客姓名/公司名稱">
                    </div>
                </div>
                <div class="address-row">
                    <span class="ui-w-20">聯絡電話</span>
                    <div>
                        <div>
                            <select></select>
                            <select></select>
                        </div>
                        <div>
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">聯絡電話</span>
                    <div>
                        <div>
                            <input type="text" class="ui-w-10">
                            <input type="text" class="ui-w-20">
                            分機
                            <input type="text" class="ui-w-10">
                        </div>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">聯絡電話</span>
                    <div>
                        <div>
                            <input type="text" class="ui-w-10">
                            <input type="text" class="ui-w-20">
                        </div>
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
        @include font($color: $font-color-blue, $weight: bold);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .content-warrp{
            .w-1{
                width: 50%;
            }
            > div {
                padding:.4rem;
            }
        }
    }
</style>
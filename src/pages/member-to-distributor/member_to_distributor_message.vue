<template>
    <section class="main-section">
        <scroll class="content-section" >
            <div class="warrp">
                <div class="column-layout">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">國籍</span>
                    <div>
                        <span class="ui-w-14">台灣</span>
                        <input type="text" class="ui-w-14">
                    </div>
                </div>
                <div class="address-col">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">通訊地址</span>
                    <div>
                        <select></select>
                        <select></select>
                        <input type="text">
                        <input type="text">
                    </div>
                </div>
                <div class="one-input">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">通訊區域代碼</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="address-col">
                    <span class="ui-w-20 blue">同上  宅配地址</span>
                    <div>
                        <select></select>
                        <select></select>
                        <input type="text">
                        <input type="text">
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20 blue">宅配區域代碼</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="column-layout">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">宅配時段</span>
                    <div>
                        <select class="ui-w-30"></select>
                    </div>
                </div>
                <div class="telephone">
                    <span class="ui-w-20 blue">聯絡電話</span>
                    <div>
                        <div>
                            (家)<input type="text"><input type="text">
                            分機<input type="text">
                            <span class="flex-shrink">
                                <i checkbox class=""></i>&nbsp  國外電話
                            </span>
                        </div>
                        <div>
                            (公)<input type="text"><input type="text">
                            分機<input type="text">
                            <span class="flex-shrink">
                                <i checkbox class=""></i>&nbsp  國外電話
                            </span>
                        </div>
                    </div>
                </div>
                <div class="mobile-phone">
                    <span class="ui-w-20 blue">行動電話</span>
                    <div>
                        <div>
                            第一直銷權<input type="text"><input type="text">
                            <span class="flex-shrink">
                                <i checkbox class=""></i>&nbsp  國外電話
                            </span>
                        </div>
                        <div>
                            第二直銷權<input type="text"><input type="text">
                            <span class="flex-shrink">
                                <i checkbox class=""></i>&nbsp  國外電話
                            </span>
                        </div>
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20 blue">電子郵件信箱</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="radio-warrp">
                    <span class="ui-w-20 blue">證明文件</span>
                    <div>
                        <span><i radio></i>加入聲明書文件</span>
                        <span><i radio></i>出示證明文件</span>
                    </div>
                </div>
                <div class="two-input">
                    <span class="ui-w-20 blue">獎金轉帳帳號</span>
                    <div>
                        <input type="text">
                        <input type="text">
                    </div>
                </div>
                <div class="radio-warrp">
                    <span class="ui-w-20 blue">資料領取方式</span>
                    <div>
                        <span><i radio></i>郵寄</span>
                        <span><i radio></i>櫃檯</span>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">付款人</span>
                    <div>
                        <input type="text">
                        <span>sdsdsdks</span>
                    </div>
                </div>
            </div>
        </scroll>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
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
            FooterButtons,
            Scroll
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
        .blue{
            @include font($color: $font-color-blue, $weight: bold);
        }
        .warrp{
            background-color: $white;
            padding: 1rem;
            > div {
                padding-bottom: .5rem;
                i{
                    margin-top:.2rem;
                }
            }
        }
    }
</style>
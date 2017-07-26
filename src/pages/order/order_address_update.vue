<template>
    <section class="main-section">
        <header class="section-header">
            <div>                  
                <span>2007600 &nbsp&nbsp</span>
                <span>辅导费打发第三方地方</span>
            </div>
            <div>                   
                <span>抵用券餘額:</span>
                <span>555</span>
                <span>代用券餘額:</span>
                <span>666</span>
            </div>
        </header>
        <scroll class="content-section common-margin-top" >
            <div class="content-warrp  common-alt-bg">
                <div class="one-input">
                    <span class="ui-w-20">直銷商編號</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">收貨人</span>
                    <div class="space-between">
                        姓名<span class="ui-gray" id="fullname"></span>
                        配偶<span class="ui-gray" id="spouse"></span>
                        獎銜<span class="ui-gray" id="moving"></span>
                    </div>
                </div>
                <div class="one-input">
                    <i radio class="radio-absolute"></i>
                    <span class="ui-w-20">收貨人通訊地址</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="address-row">
                    <i radio class="radio-absolute"></i>
                    <span class="ui-w-20">收貨人臨時宅配地址</span>
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
                <div class="radio-warrp">
                    <span class="ui-w-20">宅配時段</span>
                    <div>
                        <span><i radio></i>任一時段皆可</span>
                        <span><i radio></i>上午8:00-12:00</span>
                        <span><i radio></i>下午13:00-17:00</span>
                        <span><i radio></i>白天8:00-17:00</span>
                        <span><i radio></i>夜間18:00-21:00</span>
                        <span><i radio></i>早晚8:00-12:00/18:00-21:00</span>
                        <span><i radio></i>午晚13:00-21:00</span>
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20">顧客姓名</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20">聯絡電話</span>
                    <div class="space-between">
                        <input class="ui-w-10" type="text">
                        <input class="ui-w-10" type="text">
                        分機
                        <input type="text" class="ui-w-10">
                        行動電話
                        <input type="text" class="ui-w-10">
                        <input type="text">
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20">期望送貨日期</span>
                    <div>
                        <input type="text">
                    </div>
                </div>
                <div class="one-input">
                    <span class="ui-w-20">備註</span>
                    <div>
                        <textarea></textarea>
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
        data() {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {text: '保存',clickEvent: 'button_save'}
                ]
            }
        } , 
        components : {
            FooterButtons,
            Scroll
        },
        methods :{
            button_save() {
                this.back()
            }
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
            > div {
                padding: .4rem 1.5rem;
                .space-between{
                    justify-content:space-between;
                }
                textarea{
                    height: 3.5rem;
                    width: 100%;
                }
            }
        }
    }
</style>
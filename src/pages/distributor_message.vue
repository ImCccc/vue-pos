<template>
    <section class="main-section">
        <scroll class="content-section" >
            <div class="warrp">
                <div class="column-layout">
                    <span class="ui-w-20 blue">是否親臨</span>
                    <div>
                        <span>是&nbsp<i radio></i></span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <span>否&nbsp<i radio></i></span>
                    </div>
                </div>
                <div class="column-layout">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">國籍</span>
                    <div>
                        <div class="common-list-layout radio-warrp">
                            <span>台灣&nbsp<i radio></i></span>
                            <span>外僑&nbsp<i radio></i></span>
                        </div>
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
                <div class="column-layout">
                    <i class="star">*</i>
                    <span class="ui-w-20 blue">密碼發送方式</span>
                    <div>
                        <select class="ui-w-30"></select>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">密碼</span>
                    <div>
                        <input type="text">&nbsp&nbsp&nbsp&nbsp確認密碼&nbsp
                        <input type="text">
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">工作狀況</span>
                    <div>
                        <select class="ui-w-30"></select>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">婚姻狀況</span>
                    <div>
                        <select class="ui-w-30"></select>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">小孩年齡分別是</span>
                    <div>
                        <span class="ui-w-25">6歲以下&nbsp&nbsp<input class="ui-w-25" type="text">&nbsp&nbsp位、</span>
                        <span class="ui-w-25">7-12歲&nbsp&nbsp<input class="ui-w-25" type="text">&nbsp&nbsp位、</span>
                        <span class="ui-w-25">12-18歲&nbsp&nbsp<input class="ui-w-25" type="text">&nbsp&nbsp位、</span>
                        <span class="ui-w-24">19歲以上&nbsp&nbsp<input class="ui-w-25" type="text">&nbsp&nbsp位</span>
                    </div>
                </div>
                <div class="radio-warrp">
                    <span class="ui-w-20 blue">你有興趣的產品</span>
                    <div>
                        <span class="ui-w-30"><i checkbox></i>營養食品</span>
                        <span class="ui-w-30"><i checkbox></i>皮膚保養品</span>
                        <span class="ui-w-30"><i checkbox></i>彩色化妝品系列</span>
                        <span class="ui-w-30"><i checkbox></i>美護髮系列</span>
                        <span class="ui-w-30"><i checkbox></i>個人保養用品</span>
                        <span class="ui-w-30"><i checkbox></i>家庭清潔用品</span>
                        <span class="ui-w-30"><i checkbox></i>淨水器</span>
                        <span class="ui-w-30"><i checkbox></i>鍋具</span>
                        <span class="ui-w-30"><i checkbox></i>空氣清淨機</span>
                    </div>
                </div>
                <div class="column-layout">
                    <span class="ui-w-20 blue">全家月收入為</span>
                    <div>
                        <select class="ui-w-30"></select>
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
                    {text: '確認',clickEvent: 'button_confirm'}
                ]
            }
        } , 
        components : {
            FooterButtons,
            Scroll
        },
        methods : {
            button_confirm() {
                this.$pos_goPage('payment')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../common/style/variable.scss';
    @import '../common/style/mixin.scss';
    @import '../common/style/address/address.scss';
    .content-section{
        overflow: auto;
        .blue{
            @include font($color: $font-color-blue, $weight: bold);
        }
        .warrp{
            background-color: $white;
            padding: 1rem;
            .radio-warrp{
                flex-grow:initial;
            }
            > div {
                padding-bottom: .5rem;
                i{
                    margin-top:.2rem;
                }
            }
        }
    }
</style>
<template>
    <section class="main-section">
        <scroll class="content-section">
            <div>
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
                <div class="content-warrp  common-alt-bg common-margin-top">
                    <div class="one-input">
                        <span class="ui-w-20 font-blue">憑單編號</span>
                        <div>
                            <input type="text" readonly>
                        </div>
                    </div>
                    <div class="one-input">
                        <span class="ui-w-20 font-blue">直銷商編號</span>
                        <div>
                            <input type="text" readonly>
                        </div>
                    </div>
                    <div class="one-input">
                        <span class="ui-w-20 font-blue">顧客姓名</span>
                        <div>
                            <input type="text" readonly>
                        </div>
                    </div>
                    <div class="address-row">
                        <span class="ui-w-20 font-blue">安裝地址</span>
                        <div>
                            <div>
                                <select></select>
                                <select></select>
                            </div>
                            <div>
                                <input type="text" readonly>
                                <input type="text" readonly>
                            </div>
                        </div>
                    </div>
                    <div class="column-layout">
                        <span class="ui-w-20 font-blue">聯絡電話</span>
                        <input class="ui-w-10" type="text" readonly>&nbsp&nbsp&nbsp
                        <input class="ui-w-20" type="text" readonly>&nbsp&nbsp&nbsp
                        <input class="ui-w-20" type="text" readonly>
                    </div>
                    <div class="column-layout">
                        <span class="ui-w-20 font-blue">行動電話</span>
                        <input class="ui-w-10" type="text" readonly>&nbsp&nbsp&nbsp
                        <input class="ui-w-20" type="text" readonly>
                    </div>
                    <div class="flex">
                        <span class="ui-w-20 font-blue">備註</span>
                        <div class="ui-w-80">
                            <input type="text" readonly class="ui-w-100">
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div>
                            <i checkbox></i>
                            <span class="ui-w-20 font-blue">自費500元新宇安裝</span>
                        </div>
                        <div>
                            <i checkbox></i>
                            <span class="ui-w-20 font-blue">暫不安裝</span>
                        </div>  
                        <div>
                            <i checkbox></i>
                            <span class="ui-w-20 font-blue">陪同安裝</span>
                        </div>
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
    import ListScrollWarrp from 'base/listScrollWarrp';
    import Scroll from 'base/scroll';
    export default {
        computed: {
        },
        data() {
            return {
                titles:[
                    '訂貨代碼',
                    '產品中文名稱',
                    '產品編號',
                    '機器條碼',
                    '電子模組條碼'
                ],
                buttons: [
                    {text: '保存',clickEvent: 'button_save'}
                ],
                data: []
            }
        }, 
        components: {
            Scroll,
            ListScrollWarrp,
            FooterButtons
        },
        methods: {
            button_save() {
                this.back()
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
        .font-blue{
            @include font($color: $font-color-blue, $weight: bold)
        }
        .content-warrp{
            > div {
                padding: .3rem .8rem;
            }
        }
    }
</style>
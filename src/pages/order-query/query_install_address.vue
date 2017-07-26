<template>
    <section class="main-section">
        <scroll class="content-section">
            <div>
                <div class="background-color-white common-padding">
                    <div class="flex">
                        <span class="font-blue ui-w-40">收貨地址&nbsp</span>
                        <span>0.99</span>
                    </div>
                    <div class="flex">
                        <span class="font-blue ui-w-40">宅配時段&nbsp</span>
                        <span>0.99</span>
                    </div>
                    <div class="flex">
                        <span class="font-blue ui-w-40">電話號碼&nbsp</span>
                        <span>0.99</span>
                    </div>
                    <div class="flex">
                        <span class="font-blue ui-w-40">陪同安裝人員編號&nbsp</span>
                        <span>0.99</span>
                    </div>
                    <div class="flex">
                        <span class="font-blue ui-w-40">陪同安裝人員姓名&nbsp</span>
                        <span>0.99</span>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-40 common-list-layout">
                            <span class="font-blue">聯絡電話&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-40 common-list-layout">
                            <span class="font-blue">行動電話&nbsp</span>
                            <span>0.99</span>
                        </div>

                    </div>
                    <div class="flex">
                        <span class="font-blue ui-w-40">安裝事項&nbsp</span>
                        <span>0.99</span>
                    </div>
                </div>
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
                    <div class="flex">
                        <span class="ui-w-20 font-blue">自費500元新宇安裝</span>
                        <div class="ui-w-80">
                            <i checkbox></i>
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
        data () {
            return {
                titles:[
                    '訂貨代碼',
                    '產品中文名稱',
                    '產品編號',
                    '機器條碼',
                    '電子模組條碼'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '保存',clickEvent: 'button_save'},
                    {text: '修改',clickEvent: 'button_modify'}
                ],
                data: []
            }
        } , 
        components : {
            Scroll,
            ListScrollWarrp,
            FooterButtons
        },
        methods: {
            button_modify() {
            },
            button_save() {

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
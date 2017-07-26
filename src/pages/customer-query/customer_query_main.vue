<template>
    <section class="main-section">
        <scroll class="content-section" >
            <div>
                <div class="top common-padding">
                    <div class="common-list-layout">
                        <div class="ui-w-55">
                            <span>顧客編號&nbsp&nbsp&nbsp</span>
                            <input type="text" class="ui-w-50">
                        </div>
                        <div class="ui-w-45">
                            <span>顧客類型&nbsp&nbsp&nbsp</span>
                            <input type="text" class="ui-w-50">
                        </div>
                    </div>
                </div>
                <div class="middle common-margin-top common-list-layout">
                    <div class="left">
                        <h2>顧客</h2>
                        <div class="common-padding relative">
                            <div class="common-list-layout relative">
                                <span class="flex-shrink ui-w-53">顧客中文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">顧客英文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">顧客國籍</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>台灣&nbsp<i radio></i></span>
                                    <span>外僑&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">證件/外僑身份證號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">證件有效期限</span>
                                <input type="text" class="ui-w-47">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h2>配偶</h2>
                        <div class="common-padding relative">
                            <div class="common-list-layout relative">
                                <span class="flex-shrink ui-w-53">配偶中文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶英文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶國籍</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>台灣&nbsp<i radio></i></span>
                                    <span>外僑&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶證件/外僑身份證號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶證件有效期限</span>
                                <input type="text" class="ui-w-47">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="last common-margin-top common-list-layout">
                    <div class="left">
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">加入日期</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">推薦人編號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">推薦人國別碼/編號</span>
                                <input type="text" class="ui-w-15">&nbsp&nbsp
                                <input type="text" class="ui-w-30">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">退出日期</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">直系直銷商</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">語言類型</span>
                                <select class="ui-w-47"></select>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">聯絡電話</span>
                                <input type="text" class="ui-w-15">-
                                <input type="text" class="ui-w-30">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">郵遞區號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">&nbsp&nbsp</span>
                            </div>
                            <div class="common-list-layout flex-start">
                                <span class="flex-shrink ui-w-53">通訊地址</span>
                                <div class="ui-w-47">
                                    <textarea type="text" class="ui-w-100"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">知曉權到期日</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">&nbsp&nbsp</span>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">是否為多重國際事業</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>是&nbsp<i radio></i></span>
                                    <span>否&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">直銷權狀態</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">信箱號碼</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">是否需要DD服務</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>是&nbsp<i radio></i></span>
                                    <span>否&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">最高獎銜</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">當前獎銜</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">郵遞區號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout flex-start">
                                <span class="flex-shrink ui-w-53">宅配地址</span>
                                <div class="ui-w-47">
                                    <textarea type="text" class="ui-w-100"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </scroll>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>

<script>
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll'
    export default {
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {text: '查詢br編號',clickEvent: 'button_query_number'},
                    {text: '產品br抵用券',clickEvent: 'button_query_product_coupons'},
                    {text: '獎金br轉帳',clickEvent: 'button_bonus_transfer'},
                    {text: 'DD br 查詢',clickEvent: 'button_direct_data'},
                    {text: '營業br守則',clickEvent: 'button_business_rules'},
                    {text: '直銷商/br會員資料',clickEvent: 'button_details_information'},
                    {text: '客戶br維護',clickEvent: 'button_customer_maintenance'}
                ]
            }
        }, 
        components : {
            FooterButtons,
            Scroll
        },
        methods: {
            button_query_number() {
                this.$pos_goPage('customer_query_number')
            },
            button_query_product_coupons() {
                this.$pos_goPage('product_coupons_query_main')
            },
            button_bonus_transfer() {
                this.$pos_goPage('customer_bonus_transfer')
            },
            button_direct_data() {
                this.$pos_goPage('customer_direct_data')
            },
            button_business_rules() {
                this.$pos_goPage('customer_business_rules')
            },
            button_details_information() {
                this.$pos_goPage('customer_details_information')
            },
            button_customer_maintenance() {
                this.$pos_goPage('customer_maintenance')
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
        .top{
            background-color: $white;
            .common-list-layout{
                padding: .2rem 0;
            }
            .num{
                position: absolute;
                margin-left: -2rem;
                margin-top: .2rem;
                color: gray;
            }
        }
        .left,.right{
            width: 49.5%;
            flex-shrink:0;
            >div{
                background-color: $white;
            }
            > h2{
                background-color: #999;
                text-align: center;
                color: $white;
            }
            .common-list-layout{
                padding: .2rem;
                height: 2rem;
                .gender-warrp{
                    flex-grow:1;
                }
            }
        }
        .right{
            .common-padding{
                padding-left: 1.5rem;
            }
        }
        .middle,.last{
            align-items:initial;            
        }
        .last{
            background-color: $white;
            .left,.right {
                .flex-start{
                    height: 4rem;
                    align-items: flex-start;
                    textarea{
                        height: 4rem;
                    }
                }
            }
            .left{
                width: 50%;
            }
            .right{
                width: 50%;
            }
        }
    }
</style>
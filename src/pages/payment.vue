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
                    </div>
                </header>
                <div class="background-color-white top common-margin-top common-padding">
                    <div class="common-list-layout">
                        <div class="ui-w-13 font-blue">訂單編號</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">產品總額</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">應付金額</div>
                        <div class="flex-grow-1">99</div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-13 font-blue">優惠折扣</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">未稅額</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">實收金額</div>
                        <div class="flex-grow-1"><input type="text" class="ui-w-100"></div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-13 font-blue">產品抵用券</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">稅額</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">找零金額</div>
                        <div class="flex-grow-1">99</div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-13 font-blue">手續費</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">含稅總額</div>
                        <div class="ui-w-20">99</div>
                        <div class="ui-w-13 font-blue">剩餘金額</div>
                        <div class="flex-grow-1">99</div>
                    </div>
                </div> 
                <div class="point common-list-layout background-color-white">
                    <div>
                        剩餘點數:<span id="remainingPoint"></span>
                    </div>
                    <div>
                        訂單點數:<span id="orderPoint"></span>
                    </div>
                    <div>
                        兌換點數:<span id="exchangePoint"></span>
                    </div>
                    <div>
                        加碼點數:<span id="addPoint"></span>
                    </div> 
                    <div>
                        剩餘總點數:<span id="allPoint"></span>
                    </div>
                </div>
                <div class="pro-warrp common-margin-top">
                    <list-scroll-warrp class="flex-grow-1" 
                        :titles="titles" 
                        :data="data">
                        <template v-for="item in products">
                            <div> 
                                <div class="tb-list01">{{item}}</div>
                                <div class="tb-list02">{{item}}</div> 
                                <div class="tb-list03">{{item}}</div> 
                                <div class="tb-list04">{{item}}</div> 
                                <div class="tb-list05">{{item}}</div> 
                                <div class="tb-list06">{{item}}</div> 
                                <div class="tb-list07">{{item}}</div> 
                                <div class="tb-list08">{{item}}</div> 
                                <div class="tb-list09">{{item}}</div> 
                                <div class="tb-list10">{{item}}</div> 
                            </div>
                        </template>
                    </list-scroll-warrp>
                </div>
                <div class="coupon-warrp common-margin-top background-color-white common-padding">
                    <div class="common-list-layout invoice-warrp">
                        <div class="ui-w-35 invoice">
                            <div>
                                <i radio></i><span>安麗載具</span>
                            </div>
                            <div>
                                <i radio></i><span>手機條碼</span>
                            </div>
                            <div>
                                <i radio></i><span>自然人憑證</span>
                            </div>
                            <div>
                                <i radio></i><span>捐贈發票</span>
                            </div>
                            <div>
                                <i radio></i><span>紙本發票</span>
                            </div>
                        </div>
                        <div class="ui-w-30">
                            <input type="text" class="ui-w-100">
                        </div>
                        <div class="flex-grow-1">
                            <span></span>
                        </div>
                    </div>
                    <div class="flex but-warrp">
                        <label>1-MP信用卡</label>
                        <label>2-MP信用卡(手動輸入)</label>
                    </div>
                    <list-scroll-warrp class="flex-grow-1" 
                        :padding="false" 
                        :titles="titles" 
                        :data="data">
                        <template v-for="item in products">
                            <div> 
                                <div class="tb-list01">{{item}}</div>
                                <div class="tb-list02">{{item}}</div> 
                                <div class="tb-list03">{{item}}</div> 
                                <div class="tb-list04">{{item}}</div> 
                                <div class="tb-list05">{{item}}</div> 
                                <div class="tb-list06">{{item}}</div> 
                                <div class="tb-list07">{{item}}</div> 
                                <div class="tb-list08">{{item}}</div> 
                                <div class="tb-list09">{{item}}</div> 
                                <div class="tb-list10">{{item}}</div> 
                            </div>
                        </template>
                    </list-scroll-warrp>
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
                    {clickEvent: 'button_clear'},
                    {text: '安裝<br/>地址',clickEvent: 'button_install_adress'},
                    {text: '條碼<br/>掃描',clickEvent: 'button_scan'},
                    {text: '訂單<br/>查詢',clickEvent: 'button_order_query'},
                    {text: '產品<br/>明細',clickEvent: 'button_product_detail'},
                    {text: '確認<br/>付款',clickEvent: 'button_payment'},
                    {text: '原因<br/>說明',clickEvent: 'button_reason'}
                ],
                data: [],
                products: []
            }
        } , 
        components : {
            Scroll,
            ListScrollWarrp,
            FooterButtons
        },
        methods : {
            button_install_adress() {
                this.$pos_goPage('order_address_install')
            },
            button_scan() {
                this.$pos_goPage('payment_product_scan')
            },
            button_order_query() {
                this.$pos_goPage('query_main')
            },
            button_product_detail() {
                this.$pos_goPage('payment_product_detail')
            },
            button_payment() {

            },
            button_reason() {
                this.$pos_goPage('payment_reason')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../common/style/variable.scss';
    @import '../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        .font-blue{
            @include font($color: $font-color-blue, $weight:bold)
        }
        .top{
            > div:last-child{
                border-bottom: $border;
                padding-bottom: .4rem;
            }
            .common-list-layout{
                align-items:baseline;
                > div {
                    flex-shrink:0;
                }
                > div:last-child{
                    flex-shrink:1;
                }
            }
        }
        .point{
            padding: 0 .8rem;
            padding-bottom: .4rem;
            font-size: .8rem;
        }
        .pro-warrp,.coupon-warrp{
            display: flex;
            flex-direction: column;
            height: 8rem;
        }
        .coupon-warrp{
            height: 12rem;
            .invoice-warrp{
                padding-bottom: .4rem ;
                align-items: baseline;
                .invoice{
                    @include flex($flex-wrap: wrap);
                    > div{
                        flex-shrink: 0;
                    }             
                }
            }
            .but-warrp{
                padding-bottom: .4rem ;
                > label {
                    font-size: 0.8rem;
                    background-color: $btn-bgc-footer;
                    color: #fff;
                    padding: 0.2rem 1.2rem;
                    margin-right: 0.2rem;
                }
            }
        }
    }
</style>
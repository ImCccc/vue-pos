<template>
    <section class="main-section commom-overflow-scrolling">
        <div class="content-section">
            <div class="distributor-warrp common-padding">
                <div class="flex">
                    <div class="ui-w-11 font-blue-bold">訂單類型</div>
                    <div class="ui-w-27"> 
                        <select class="u-w-1"> 
                            <option value="-1">請選擇訂單類型</option>
                        </select>
                    </div>
                    <div class="dry-flex-1 a-i-c">
                        <i checkbox class="noedit choose"></i>
                        <span class="percentage font-blue-bold">13%優惠</span>
                        <span class="font-red"></span>
                    </div>
                </div>
                <div class="flex">
                    <div class="ui-w-11 font-blue-bold">付款人</div>
                    <div class="ui-w-27"> 
                        <input class="w-1" type="number">
                        <span class="font-blue">暫存&nbsp<i checkbox class="noedit choose"></i></span>
                    </div>
                    <div class="dry-flex-1">
                        <span class="font-blue flex-shrink">姓名</span>
                        <span></span>
                    </div>
                </div>
                <div class="flex">
                    <div class="ui-w-11 font-blue-bold">訂貨人</div>
                    <div class="ui-w-27"> 
                        <input class="w-1" type="number">
                    </div>
                    <div class="dry-flex-1">
                        <span class="font-blue flex-shrink">姓名</span>
                        <span></span>
                    </div>
                </div>
                <div class="flex">
                    <div class="ui-w-11 font-blue-bold">收貨人</div>
                    <div class="ui-w-27"> 
                        <input class="w-1" type="number">
                    </div>
                    <div class="dry-flex-1">
                        <span class="font-blue flex-shrink">姓名</span>
                        <span></span>
                    </div>
                </div>
                <div class="flex">
                    <div class="ui-w-11 font-blue-bold">收貨人地址</div>
                    <div class="flex-grow-1"> 
                        <input type="number" class="ui-w-100">
                    </div>
                </div>
            </div>
            <div class="product-warrp common-margin-top common-padding">
                <div class="product-choose">
                    <div class="ui-w-10 font-blue-bold">產品編號</div>
                    <div class="ui-w-50"><input type="text" class="ui-w-100"></div>
                    <div class="ui-w-8 text-align-right font-blue-bold">數量&nbsp</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-80"></div>
                    <div class="ui-w-14"><a @click.stop="showFlagPoint = !showFlagPoint" class="button">購物積點</a></div>
                </div>
                <div class="product-list-msg">
                    <list-scroll-warrp class="flex-grow-1" 
                        :titles="titles" 
                        :data="products" 
                        :padding="false">
                        <template v-for="item in products">
                            <div class="list-common"> 
                                <div class="ui-w-5 text-align-center">12</div>
                                <div class="ui-w-30">12</div> 
                                <div class="ui-w-35">12</div> 
                                <div class="ui-w-10">12</div> 
                                <div class="ui-w-10">12</div> 
                                <div class="ui-w-10">12</div> 
                            </div>
                        </template>
                    </list-scroll-warrp>
                    <div class="number-msg ui-w-14">
                        <div class="price" @click.stop="showFlagPrice = !showFlagPrice">總價：</div>
                        <div class="price-num">0</div>
                        <div>總數量</div>
                        <div>0</div>
                        <div>13%折價金額</div>
                        <div>0</div>
                        <div>訂單積分額</div>
                        <div>0</div>
                    </div>
                </div>
            </div>
        </div>
        <move-box :showFlag="showFlagPoint" class="z-index">
            <h2 class="text-align-center">原有點數原有點數原有點數 </h2>
            <div class="points-warrp">
                <div class="flex justify-space-between align-items-center">
                    <span>原有點數</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>訂單點數</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>兌換點數</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>剩餘點數</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>加碼點數</span>
                    <span>234</span>
                </div>
            </div>
            <div class="btn-warrp">
                <a class="dry-button" @click.stop="showFlagPoint = !showFlagPoint">確認</a>
            </div>  
        </move-box>
        <move-box :showFlag="showFlagPrice" class="z-index">
            <div class="points-warrp">
                <div class="flex justify-space-between align-items-center">
                    <span>總數量</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>訂單售貨額</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>訂單積分額</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center">
                    <span>手續費</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center font-red">
                    <span>折扣金額</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center font-red">
                    <span>折扣售貨額</span>
                    <span>234</span>
                </div>
                <div class="flex justify-space-between align-items-center font-red">
                    <span>折扣積分額</span>
                    <span>234</span>
                </div>
            </div>
            <div class="btn-warrp">
                <a class="dry-button" @click.stop="showFlagPrice = !showFlagPrice">確認</a>
            </div> 
        </move-box>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import ListScrollWarrp from 'base/listScrollWarrp';
    import MoveBox from 'base/moveBox'
    import FooterButtons from 'base/footerButtons'
	export default {
		data () {
			return {
                buttons: [
                    {clickEvent: 'back'},
                    {clickEvent: 'button_clear'},
                    {text: '訂單br查詢',clickEvent: 'button_order_query'},
                    {text: '產品抵用券br查詢',clickEvent: 'button_voucher_query'},
                    {text: '客戶br查詢',clickEvent: 'button_customer_query'},
                    {text: '續約/br折價券',clickEvent: 'button_coupon_query'},
                    {text: '產品br明細',clickEvent: 'button_product_detail'},
                    {text: '確認br付款',clickEvent: 'button_payment'},
                    {text: '送貨br地址',clickEvent: 'button_address'},
                    {text: '產品br序號',clickEvent: 'button_serial_number'},
                    {text: '暫存br訂單',clickEvent: 'button_save_order'},
                    {text: '還原br訂單',clickEvent: 'button_restore_order'},
                    {text: '取消br手續費',clickEvent: 'button_cancel_fee'},             
                    {text: '增加br手續費',clickEvent: 'button_add_fee'}        
                ],
                titles:['', '產品編號', '產品名稱', '單價', '數量', '金額'],
                showFlagPoint: false,
                showFlagPrice: false,
                products: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
            }
		}, 
        methods: {
            _goPage() {

            },
            button_clear() {

            },
            button_order_query() {
                this.$pos_goPage('query_main')
            },
            button_voucher_query() {
                this.$pos_goPage('product_coupons')
            },
            button_customer_query() {
                this.$pos_goPage('customer_query_main')
            },
            button_coupon_query() {
                this.$pos_goPage('renew_product_coupon')
            },
            button_product_detail() {
                this.$pos_goPage('order_product_detail')
            },
            button_payment() {
                this.$pos_goPage('order_coupon')
            },
            button_address() {
                this.$pos_goPage('order_address_choose')
            },
            button_serial_number() {
                this.$pos_goPage('product_serial_number')
            },
            button_save_order() {

            },
            button_restore_order() {

            },
            button_cancel_fee() {

            },
            button_add_fee() {

            }
        },
        components : {
            FooterButtons,
            ListScrollWarrp,
            MoveBox
        }
	}
</script>
<style scoped lang="scss">
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .main-section{
        .content-section{
            overflow: auto;
            @include flex($direction: column, $grow: 1);
            .distributor-warrp{
                @include flex($direction: column, $grow: 0, $justify-content: space-between, $shrink: 0);
                background-color: $white;
                max-height: 12rem;
                min-height: 8rem; 
                width: 100%;
                .dry-flex-1{
                    &.a-i-c{
                        align-items:center;
                    }
                    @include flex($shrink:50);
                }
                select{
                    width: 12rem;
                }
                .w-1{
                    width: 8rem;
                }
                input{
                    margin-right: .5rem;
                }
                .flex{
                    padding: .2rem 0;
                    .percentage{
                        padding-right: .5rem;
                    }
                }
            }
            .product-warrp{
                @include flex($direction: column, $grow: 1);
                @include media((display:block));
                background-color: $white;
                .product-choose{
                    @include flex($justify-content: space-between);
                    height: 2rem;
                    .button{
                        width: 100%;
                        display: inline-block;
                        height: 1.7rem;
                        line-height: 1.7rem;
                        border-radius: .2rem;
                        background-color: $btn-bgc-footer;
                        color: $white;
                        text-align: center;
                    }
                }
                .product-list-msg{
                    border: $border;
                    @include flex($justify-content: space-between, $grow:1);
                    .number-msg{
                        @include flex($direction:column, $justify-content: space-between, $align-items: center);
                        @include font($size: $font-small, $color: $font-color-blue, $weight:bold);
                        .price{
                            width: 100%;
                            text-align: center;
                            height: 1.5rem;
                            font-size: $font-text;
                            border-bottom: $border;
                        }
                        .price-num{
                            font-size: $font-text;
                             width: 30%;
                            border-bottom: $border;
                            text-align: center;
                        }
                    }
                }
            }
        }
        h2{
            padding: .5rem 0;
            margin: 0;
            font-size: 1.2rem;
            color: $font-color-red;
        }
        .font-red{
            color: $font-color-red;
        }
        .points-warrp{
            padding:.5rem 2rem;
            font-weight: bold;
            color: #000000;
            > div {
                height: 2rem;
            }
            td{
                min-width: 8rem;
                height: 2rem;
            }
        }
    }
</style>
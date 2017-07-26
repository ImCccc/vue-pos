<template>
    <section class="main-section">
        <scroll class="content-section">
            <div>
                <div class="background-color-white top">
                    <div class="common-list-layout">
                        <div class="ui-w-14">訂單編號</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">付款人編號</div>
                        <div class="ui-w-25">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-14">訂單狀態</div>
                        <div class="flex-grow-1">
                        <select disabled></select>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-14">訂單日期</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">訂貨人編號</div>
                        <div class="ui-w-25">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-14">付款狀態</div>
                        <div class="flex-grow-1">
                            <select disabled></select>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-14">訂單類型</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">收貨人編號</div>
                        <div class="ui-w-25">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-14">提款方式</div>
                        <div class="flex-grow-1">
                            <select disabled></select>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-14">原訂單編號</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">訂單順序號</div>
                        <div class="ui-w-25 common-list-layout">
                            <input readonly type="text" class="ui-w-20" />
                            <span>送貨日期</span>
                            <input readonly type="text" class="ui-w-40" />
                        </div>
                        <div class="ui-w-14">付款日期</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100" />
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-14">顧客電話</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">送貨地址</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100" />
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-14">取消原因</div>
                        <div class="ui-w-16">
                            <select disabled></select>
                        </div>
                        <div class="ui-w-16">補充取消原因</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100" />
                        </div>
                    </div>
                </div> 
                <div class="payment-warrp common-margin-top">
                    <div class="left common-padding">
                        <list-scroll-warrp class="flex-grow-1" 
                            :titles="titles" 
                            :data="data" 
                            :padding="false">
                        </list-scroll-warrp>
                    </div>
                    <div class="right common-padding">
                        <div class="border" :class="{'border-bottom': showFalgPrice}">
                            <div class="common-list-layout">
                                <span class="total" @click.stop="showFalgPrice = !showFalgPrice">總價</span>
                                <span class="total-num"><i>&nbsp</i><span>0</span></span>
                            </div>
                            <div class="common-list-layout common-margin-top">
                                <span class="fee">手續費</span>
                                <div class="flex-grow-1" >
                                    <input type="text" class="ui-w-95 fee-input" />
                                </div>
                            </div>
                            <div class="common-list-layout common-margin-top">
                                <span class="fee">手續費</span>
                                <div class="flex-grow-1" >
                                    <input type="text" class="ui-w-95 fee-input" />
                                </div>
                            </div>
                            <div class="common-list-layout common-margin-top">
                                <span class="fee">手續費</span>
                                <div class="flex-grow-1" >
                                    <input type="text" class="ui-w-95 fee-input" />
                                </div>
                            </div>
                        </div>
                        <transition name="animationPrice"> 
                            <div class="border" v-show="showFalgPrice" :class="{'border-top': showFalgPrice}">
                                <div class="common-list-layout common-margin-top">
                                    <span class="fee">手續費</span>
                                    <div class="flex-grow-1" >
                                        <input type="text" class="ui-w-95 fee-input" />
                                    </div>
                                </div>
                                <div class="common-list-layout common-margin-top">
                                    <span class="fee">手續費</span>
                                    <div class="flex-grow-1" >
                                        <input type="text" class="ui-w-95 fee-input" />
                                    </div>
                                </div>
                                <div class="common-list-layout common-margin-top">
                                    <span class="fee">手續費</span>
                                    <div class="flex-grow-1" >
                                        <input type="text" class="ui-w-95 fee-input" />
                                    </div>
                                </div>
                                <div class="common-list-layout common-margin-top">
                                    <span class="fee">手續費</span>
                                    <div class="flex-grow-1" >
                                        <input type="text" class="ui-w-95 fee-input" />
                                    </div>
                                </div>
                                <div class="common-list-layout common-margin-top">
                                    <span class="fee">手續費</span>
                                    <div class="flex-grow-1" >
                                        <input type="text" class="ui-w-95 fee-input" />
                                    </div>
                                </div>
                            </div>
                        </transition>
                    </div>
                </div>
                <div class="pro-warrp common-margin-top">
                    <list-scroll-warrp class="flex-grow-1" 
                        :titles="titles" 
                        :data="data" 
                    >
                        <template v-for="item in data">
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
                <div class="coupon-warrp common-margin-top">
                    <list-scroll-warrp class="flex-grow-1" 
                        :titles="titles" 
                        :data="data" 
                    >
                        <template v-for="item in data">
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
                titles:['訂貨代碼', '產品中文名稱', '產品編號', '機器條碼', '電子模組條碼'],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '詳細<br/>資訊',clickEvent: 'button_details_information'},
                    {text: '查看產<br/>品條碼',clickEvent: 'button_query_scan'},
                    {text: '查看安裝/<br/>收貨資料',clickEvent: 'button_install_address'},
                    {text: '查看<br/>票券',clickEvent: 'button_ticketing'},
                    {text: '修改<br/>訂單',clickEvent: 'button_order_modeify'},
                    {text: '作廢<br/>訂單',clickEvent: ''},
                    {text: '雜項發票<br/>明細',clickEvent: 'button_mm_details'}
                ],
                data: [],
                showFalgPrice: false
            }
        } , 
        components : {
            Scroll,
            ListScrollWarrp,
            FooterButtons
        },
        methods : {
            button_details_information() {
                this.$pos_goPage('query_details_information')
            },
            button_query_scan() {
                // this.$pos_goPage('query_details_information')
            },
            button_install_address() {
                this.$pos_goPage('query_install_address')
            },
            button_ticketing() {
                this.$pos_goPage('query_ticketing')
            },
            button_order_modeify() {
                this.$pos_goPage('order_main')
            },
            button_mm_details() {
                this.$pos_goPage('query_mm_details')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .animationPrice-enter        {opacity: 0;}
    .animationPrice-enter-active {transition: all .3s ; }
    .animationPrice-leave-active {transition: all .3s ; }
    .animationPrice-leave-active {opacity: 0;}
    .content-section{
        overflow: auto;
        .font-blue{
            @include font($color: $font-color-blue, $weight:bold)
        }
        .top{
            @include font($color: $font-color-blue, $weight:bold)
            .common-list-layout{
                align-items:baseline;
                > div {
                    flex-shrink:0;
                }
                > div:last-child{
                    flex-shrink:1;
                }
                select{
                    width: 100%;
                }
            }
            input{
                @include font($color: $font-color-common, $weight: initial);
            }
            > div > div {
                padding: .5rem;
            }
        }
        .payment-warrp{
            @include flex($justify-content:space-between, $grow: 1);
            .left,.right{
                background-color: $white;
            }
            .left{
                height: 10rem;
                @include flex($direction: column);
                width: 75%;
            }
            .right{
                position: absolute;
                z-index: $common-z-index;
                right: 0;
                width: 24%;
                @include flex($direction: column);
                .border{
                    border:$border;
                }
                .border-bottom{
                    border-bottom: transparent;
                }
                .border-top{
                    border-top: transparent;
                }
                .total{
                    width: 4rem;
                    height: 2.5rem;
                    background-color:$btn-bgc-footer;
                    border:$border;
                    color: $white;
                    text-align: center;
                    line-height: 2.5rem;
                }
                .total-num{
                    flex-grow:1;
                    line-height: 2.5rem;
                    height: 2.5rem;
                    padding-right: .4rem;
                    color: $red;
                    border:$border;
                    text-align: right;
                }
                .fee{
                    font-size: $font-small;
                    color: $font-color-blue;
                    text-align: center;
                    width: 4rem;
                    flex-shrink:0;
                }
                .fee-input{
                    padding-right: .4rem;
                    text-align: right;
                }
            }
        }
        .pro-warrp,.coupon-warrp{
            display: flex;
            height: 8rem;
        }
    }
</style>
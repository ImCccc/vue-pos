<template>
    <section class="main-section">
        <scroll class="content-section">
            <div>
                <div class="top background-color-white common-alt-bg">
                    <div class="common-list-layout">
                        <div class="ui-w-16">訂單人</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">身份證字號</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">辦理方式</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">退貨流水號碼</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">退貨日期</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">代理人編號</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">個人</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">發票號碼</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">代辦人身份證字號</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">退款方式</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">訂單日期</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">扣/退款發票號碼</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">現金代用券號碼</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">憑單號碼</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">扣款發票領取方式</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">預接訂單退貨代用券號</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">發票日期</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">載具編碼</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">代用券領取方式</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">訂單金額</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">退貨處理中心</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">轉帳帳號</div>
                        <div class="ui-w-16">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">發票開立單位</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">退貨處理人員</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">作廢原因</div>
                        <div class="ui-w-16">
                            <select></select>
                        </div>
                        <div class="ui-w-16">退款性質</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">取消日期</div>
                        <div class="flex-grow-1">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-16">&nbsp</div>
                        <div class="ui-w-54">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                        <div class="ui-w-16">取消人員</div>
                        <div class="ui-w-22">
                            <input readonly type="text" class="ui-w-100"/>
                        </div>
                    </div>
                </div> 
                <div class="middle common-margin-top">
                    <list-scroll-warrp class="flex-grow-1" 
                        :titles="titles" 
                        :data="data">
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
                <div class="bottom background-color-white common-padding common-margin-top">
                    <div class="common-list-layout">
                        <div class="ui-w-25">
                            <span class="font-blue">積分額/售貨額&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">未稅額&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">手續費&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">其它扣款&nbsp</span>
                            <span>0.99</span>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-25">
                            <span class="font-blue">稅額&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">含稅總額&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">購物積點扣除/退還&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">購物積點 倍數&nbsp</span>
                            <span>0.99</span>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-25">
                            <span class="font-blue">剩餘購物積點&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-25">
                            <span class="font-blue">扣除加碼送點數&nbsp</span>
                            <span>0.99</span>
                        </div>
                        <div class="ui-w-50">
                            <span class="font-blue">購物積點折抵現金點數&nbsp</span>
                            <span>0.99</span>
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
                    {clickEvent: 'clear'},
                    {text: '訂單<br/>查詢',clickEvent: ''}
                ],
                data: []
            }
        } , 
        components : {
            Scroll,
            ListScrollWarrp,
            FooterButtons
        },
        methods : {
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        .font-blue{
            @include font($color: $font-color-blue, $size: 0.8rem)
        }
        .top{
            @include font($color: $font-color-blue, $weight:bold, $size: 0.8rem)
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
        .middle{
            display: flex;
            height: 8rem;
        }
        .bottom{
            @include font($size: 0.8rem)
        }
    }
</style>
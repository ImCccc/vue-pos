<template>
    <section class="main-section">
        <scroll class="content-section" >
            <div>
                <div class="top common-padding">
                    <div class="common-list-layout">
                        <div class="ui-w-17 flex-shrink">推薦人編號</div>
                        <div class="ui-w-34 flex-shrink">
                            <span class="num130">130</span>
                            <input type="text" class="ui-w-80">
                        </div>
                        <div class="flex-grow-1">
                            <span class="font-text">sd試試似懂非懂是非得失Sdfdsfs</span>
                        </div>
                    </div>
                    <div class="common-list-layout">
                        <div class="ui-w-17 flex-shrink">DD編號</div>
                        <div class="ui-w-34 flex-shrink">
                            <input type="text" class="ui-w-80">
                        </div>
                        <div class="flex-grow-1">
                            <span>國際推薦人國碼/編碼&nbsp&nbsp&nbsp</span>
                            <input type="text" class="ui-w-15">&nbsp&nbsp
                            <input type="text" class="ui-w-30">
                        </div>
                    </div>
                </div>
                <div class="middle common-margin-top common-list-layout">
                    <div class="left">
                        <h2>申請人</h2>
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">國籍</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">身份證字號/外僑居留證號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">英文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">出生年月日</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">性別</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>男&nbsp<i radio></i></span>
                                    <span>女&nbsp<i radio></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <h2>配偶</h2>
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">&nbsp</span>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">身份證字號/外僑居留證號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">英文姓名</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">出生年月日</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">性別</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>男&nbsp<i radio></i></span>
                                    <span>女&nbsp<i radio></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom common-margin-top common-padding">
                    <div class="two-input">
                        <span class="ui-w-20">通訊地址</span>
                        <div>
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="one-input">
                        <span class="ui-w-20">通訊區域代碼</span>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="two-input">
                        <span class="ui-w-20">宅配地址</span>
                        <div>
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="one-input">
                        <span class="ui-w-20">宅配區域代碼</span>
                        <div>
                            <input type="text">
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
                    <div class="telephone">
                        <span class="ui-w-20">聯絡電話</span>
                        <div>
                            <div>(家)<input type="text"><input type="text">分機<input type="text"></div>
                            <div>(公)<input type="text"><input type="text">分機<input type="text"></div>
                        </div>
                    </div>
                    <div class="mobile-phone">
                        <span class="ui-w-20">行動電話</span>
                        <div>
                            <div>第一直銷權<input type="text"><input type="text"></div>
                            <div>第二直銷權<input type="text"><input type="text"></div>
                        </div>
                    </div>
                    <div class="one-input">
                        <span class="ui-w-20">電子郵件信箱</span>
                        <div>
                            <input type="text">
                        </div>
                    </div>
                    <div class="radio-warrp">
                        <span class="ui-w-20">密碼發送方式</span>
                        <div>
                            <span><i radio></i>簡訊</span>
                            <span><i radio></i>電子郵件</span>
                            <span><i radio></i>郵寄</span>
                            <span><i radio></i>親臨設定</span>
                        </div>
                    </div>
                    <div class="radio-warrp">
                        <span class="ui-w-20">驗證碼發送方式</span>
                        <div>
                            <span><i radio></i>簡訊</span>
                            <span><i radio></i>電子郵件</span>
                            <span><i radio></i>郵寄</span>
                        </div>
                    </div>
                    <div class="radio-warrp">
                        <span class="ui-w-20">開卡方式</span>
                        <div>
                            <span><i radio></i>POS</span>
                            <span><i radio></i>網絡</span>
                            <span><i radio></i>語音</span>
                        </div>
                    </div>
                    <div class="two-input">
                        <span class="ui-w-20">獎金轉帳帳號</span>
                        <div>
                            <input type="text">
                            <input type="text">
                        </div>
                    </div>
                    <div class="radio-warrp">
                        <span class="ui-w-20">資料領取方式</span>
                        <div>
                            <span><i radio></i>郵寄</span>
                            <span><i radio></i>櫃檯</span>
                        </div>
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
        @include font($color: $font-color-blue, $weight: bold);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .top{
            background-color: $white;
            .common-list-layout{
                padding: .2rem 0;
            }
        }
        .middle{
            h2{
                background-color: #999;
                text-align: center;
                color: $white;
            }
            .left,.right{
                width: 49.5%;
                flex-shrink:0;
                >div{
                    background-color: $white;
                }
                .common-list-layout{
                    padding: .2rem;
                    height: 2rem;
                    .gender-warrp{
                        flex-grow:1;
                    }
                }
            }
        }
        .bottom{
            background-color: $white;
            > div {
                padding-bottom: .2rem;
            }
        }
    }
</style>
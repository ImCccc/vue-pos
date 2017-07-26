<template>
    <section class="main-section">
        <scroll class="content-section" >
            <div>
                <div class="top common-padding">
                    <div class="common-list-layout">
                        <div class="ui-w-17 flex-shrink">*顧客類型</div>
                        <div class="ui-w-34 flex-shrink">
                        </div>
                        <div class="flex-grow-1">
                            <span>顧客編號&nbsp&nbsp&nbsp</span>
                            <input type="text" class="ui-w-50">
                        </div>
                    </div>
                </div>
                <div class="middle common-margin-top common-list-layout">
                    <div class="left">
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <i class="star">*</i>
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
                                <span class="flex-shrink ui-w-53">申請人國籍</span>
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
                                <span class="flex-shrink ui-w-53">護照號碼</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">大陸往來通行證號碼</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">居留證有效期限</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">顧客性別</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>男&nbsp<i radio></i></span>
                                    <span>女&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">顧客出生日期</span>
                                <input type="text" class="ui-w-47">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <i checkbox></i>
                        <div class="common-padding relative">
                            <div class="common-list-layout relative">
                                <i class="star">*</i>
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
                                <span class="flex-shrink ui-w-53">申請人國籍</span>
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
                                <span class="flex-shrink ui-w-53">護照號碼</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">配偶大陸往來通行證號碼</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">配偶居留證有效期限</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶性別</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>男&nbsp<i radio></i></span>
                                    <span>女&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">配偶出生日期</span>
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
                                <span class="flex-shrink ui-w-53">推薦人編號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">確認推薦人編號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">國際推薦人國別碼/編號</span>
                                <input type="text" class="ui-w-15">&nbsp&nbsp
                                <input type="text" class="ui-w-30">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">是否為多重國際事業</span>
                                <div class="common-list-layout gender-warrp">
                                    <span>是&nbsp<i radio></i></span>
                                    <span>否&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">直系直銷商編號</span>
                                <input type="text" class="ui-w-47">
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="common-padding relative">
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">推薦人編號</span>
                            </div>
                            <div class="common-list-layout">
                                <i class="star">*</i>
                                <span class="flex-shrink ui-w-53">直銷商中心代碼</span>
                                <input type="text" class="ui-w-15">&nbsp&nbsp
                                <input type="text" class="ui-w-30">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53"></span>
                                <div class="common-list-layout gender-warrp">
                                    <span>不知道&nbsp<i radio></i></span>
                                    <span>沒有中心&nbsp<i radio></i></span>
                                </div>
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">加入日期</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">戶籍期滿日期</span>
                                <input type="text" class="ui-w-47">
                            </div>
                            <div class="common-list-layout">
                                <span class="flex-shrink ui-w-53">信箱號碼</span>
                                <input type="text" class="ui-w-47">
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
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
    export default {
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {clickEvent: 'button_clear'},
                    {text: '客戶<br/>查詢',clickEvent: 'button_customer_query'},   
                    {text: '確認',clickEvent: 'button_confirm'}  
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
            button_customer_query() {
                this.$pos_goPage('customer_query_main')
            },
            button_confirm() {
                this.$pos_goPage('distributor_message')
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
            .common-list-layout{
                padding: .2rem;
                height: 2rem;
                .gender-warrp{
                    flex-grow:1;
                }
            }
        }
        .right{
            i[checkbox]{
                position: absolute;
                z-index: $common-z-index;
                margin-top: 1.3rem;
            }
            .common-padding{
                padding-left: 1.5rem;
            }
        }
        .middle,.last{
            align-items:initial;            
        }
        .last{
            background-color: $white;
            .left{
                width: 50%;
            }
            .right{
                width: 50%;
            }
        }
    }
</style>
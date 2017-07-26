<template>
    <section class="main-section">
        <scroll class="content-section">
            <div class="common-alt-bg">
                <div class="common-list-layout">
                    <div>發票號碼</div>
                    <div><input type="text" class="ui-w-100"/></div>
                    <div>處理中心</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>顧客中文姓名</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>顧客英文姓名</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>申請人國籍</div>
                    <div class="common-list-layout">
                        <span>台灣&nbsp<i radio></i></span>
                        <span>外僑&nbsp<i radio></i></span>
                    </div>
                    <div>配偶申請人國籍</div>
                    <div class="common-list-layout">
                        <span>台灣&nbsp<i radio></i></span>
                        <span>外僑&nbsp<i radio></i></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div>證件/外僑身份登記</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>配偶證件/外僑身份登記</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>

                <div class="common-list-layout">
                    <div>護照號碼</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>配偶護照號碼</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>大陸往來通行證號</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>配偶大陸往來通行證號</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>居留證有效期限</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>配偶居留證有效期限</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>推薦人編號</div>
                    <div class="flex-grow-1">
                        <span class="num130">130</span>
                        <input readonly type="text" class="ui-w-31"/>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div>國際推薦人國別碼/編碼</div>
                    <div class="flex-grow-1">
                        <input readonly type="text" class="ui-w-10"/>&nbsp<input readonly type="text" class="ui-w-20"/>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div>語言類型</div>
                    <div><select disabled></select></div>
                    <div>轉變類型</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div>現在到期日</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                    <div>加入日期</div>
                    <div><input readonly type="text" class="ui-w-100"/></div>
                </div>
            </div>            
        </scroll>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
    export default {
        computed: {
        },
        data () {
            return {
                buttons: [
                    {text: '送貨<br/>地址',clickEvent: 'ddd'},
                    {text: '畫面<br/>清除',clickEvent: 'aaa'},
                    {text: '訂單<br/>查詢',clickEvent: ''},
                    {text: '產品抵用券<br/>查詢',clickEvent: ''},
                    {text: '客戶<br/>查詢',clickEvent: ''},
                    {text: '續約/<br/>折價券',clickEvent: ''},
                    {text: '產品<br/>明細',clickEvent: ''},
                    {text: '確認<br/>付款',clickEvent: ''},
                    {text: '產品<br/>序號',clickEvent: ''},
                    {text: '暫存<br/>訂單',clickEvent: ''},
                    {text: '還原<br/>訂單',clickEvent: ''}             
                ]
            }
        } , 
        components : {
            Scroll,
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
        @include font($color: $font-color-blue, $weight: bold);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .common-alt-bg{
            > div {
                padding:.45rem;
            }
            .common-list-layout{
                align-items:baseline;
                > div {
                    width: 25%;
                    padding-right: .8rem;
                    flex-shrink:0;
                }
                > div:last-child{
                    padding-right: 0rem;
                }
                select{
                    width: 100%;
                }
            }
        }
    }

</style>
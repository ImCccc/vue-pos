<template>
    <section class="main-section">
        <scroll class="content-section">
            <div class="common-alt-bg">
                <div class="common-list-layout">
                    <div class="col01 font-blue">付款人編號</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">中心編號</div>
                    <div class="col04">
                        <select></select>
                    </div>
                    <div class="col05 font-blue">D.D編號</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">訂貨人編號</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">訂單狀態</div>
                    <div class="col04">
                        <select></select>
                    </div>
                    <div class="col05 font-blue">直銷商姓名</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">收貨人編號</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">付款狀態</div>
                    <div class="col04">
                        <select></select>
                    </div>
                    <div class="col05 font-blue">團單憑單編號</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">訂單編號</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">送貨狀態</div>
                    <div class="col04">
                        <select></select>
                    </div>
                    <div class="col05 font-blue">訂單類型</div>
                    <div class="col06">
                        <select></select>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">訂貨代碼</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">處理人員</div>
                    <div class="col04">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col05 font-blue">訂單子類型</div>
                    <div class="col06">
                        <select></select>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">產品編號</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">作廢日期</div>
                    <div class="col04 date-flex">
                        <input class="ui-w-45" type="tel" />-<input class="ui-w-45" type="tel" />
                    </div>
                    <div class="col05 font-blue">訂單順序號</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">訂單日期</div>
                    <div class="col02 date-flex">
                        <input class="ui-w-45" type="tel" />-<input class="ui-w-45" type="tel" />
                    </div>
                    <div class="col03 font-blue">付款方式</div>
                    <div class="col04">
                        <select></select>
                    </div>
                    <div class="col05 font-blue">退貨流水號</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">發票號碼</div>
                    <div class="col02">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col03 font-blue">POS機編號</div>
                    <div class="col04">
                        <input type="tel" class="ui-w-100"/>
                    </div>
                    <div class="col05 font-blue">原始退貨發票</div>
                    <div class="col06">
                        <input type="tel" class="ui-w-100" />
                    </div>
                </div>
            </div>  
        </scroll>          
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex'
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll'
    export default {
        data() {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {clickEvent: 'button_clear'},
                    {text: '查詢',clickEvent: 'button_query'},           
                ]
            }
        } , 
        components: {
            FooterButtons,
            Scroll
        },
        methods: {
            button_query() {
                this.$pos_goPage('query_list_details')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        .common-list-layout{
            padding: .5rem;
            > div {
                padding-right: .8rem;
                flex-shrink:0;
            }
            select{
                width: 100%;
            }
            .font-blue{
                @include font($color: $font-color-blue, $weight:bold)
            }
            .col01{
                width: 16.6%;
            }
            .col02{
                width: 16.6%
            }
            .col03{
                width: 16.6%;
            }
            .col04{
                width: 16.6%
                
            }
            .col05{
                width: 16.6%;
            }
            .col06{
                flex-grow:1;
                flex-shrink:1;
            }
            .date-flex{
                display: flex;
                justify-content:space-between;
            }
        }
    }
</style>
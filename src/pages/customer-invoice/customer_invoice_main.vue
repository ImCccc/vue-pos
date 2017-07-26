<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="top common-padding">
                <div class="common-list-layout">
                    <div class="ui-w-10 flex-shrink">顧客編號</div>
                    <div class="ui-w-20 flex-shrink">
                        <input type="text" class="ui-w-90">
                    </div>
                    <div class="flex-grow-1">
                        <input type="text" class="ui-w-58">
                    </div>
                </div>
            </div>
            <div class="content common-margin-top">
                <div class="left common-padding">
                    <div class="common-list-layout">
                        <span class="flex-shrink">產品編號</span>
                        <input type="text" class="ui-w-26">
                        <span class="flex-shrink">數量</span>
                        <input type="text" class="ui-w-18">
                        <span class="flex-shrink">金額</span>
                        <input type="text" class="ui-w-18">
                    </div>
                    <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                        :titles="titles" 
                        :data="products" 
                        :padding="false">
                    </list-scroll-warrp>
                </div>
                <div class="right common-padding">
                    <div class="common-list-layout">
                        <span class="total">總價</span>
                        <span class="total-num"><i>&nbsp</i><span>0</span></span>
                    </div>
                    <div class="common-list-layout common-margin-top">
                        <span class="fee">手續費</span>
                        <div class="flex-grow-1" >
                            <input type="text" class="ui-w-100 fee-input" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import ListScrollWarrp from 'base/listScrollWarrp';
    import FooterButtons from 'base/footerButtons';
    export default {
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
                    {text: '訂單br查詢',clickEvent: 's'}
                ],
                products: []
            }
        }, 
        components : {
            FooterButtons,
            ListScrollWarrp
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
        @include flex($direction: column, $grow: 1);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .top{
            background-color: $white;
            .common-list-layout{
                padding: .2rem 0;
            }
        }
        .content{
            @include flex($justify-content:space-between, $grow: 1);
            .left,.right{
                background-color: $white;
            }
            .left{
                @include flex($direction: column);
                width: 75%;
            }
            .right{
                width: 24%;
                @include flex($direction: column);
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
    }
</style>
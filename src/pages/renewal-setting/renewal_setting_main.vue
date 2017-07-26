<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg2">
                <div class="flex">
                    <span class="ui-w-22">直銷商/會員編號</span>
                    <input class="ui-w-40" type="text">
                </div>
                <div class="flex">
                    <span class="ui-w-22">代辦直銷商/會員編號</span>
                    <input class="ui-w-40" type="text">
                </div>
                <div class="flex">
                    <span class="ui-w-22">新增他行卡</span>
                    <div class="ui-w-78 common-list-layout flex-wrap">
                        <span>卡號</span>
                        <input class="ui-w-25" type="text">
                        <span>有效期</span>
                        <input class="ui-w-13" type="text">
                        <span>申辦日期</span>
                        <input class="ui-w-13" type="text">
                        <div>
                            <a>新增</a>
                            <a>刪除</a>
                        </div>
                    </div>
                </div>
                <div class="flex">
                    <span class="ui-w-22">信用卡</span>
                    <span class="ui-w-40"></span>
                </div>
                <div class="flex">
                    <span class="ui-w-22">信用卡授權狀態</span>
                    <div class="radio-warrp">
                        <i radio></i>&nbsp 同意自動續約 &nbsp&nbsp&nbsp
                        <i radio></i>&nbsp 不同意自動續約
                    </div>
                </div>
                <div class="flex">
                    <span class="ui-w-22">直銷商/會員續約狀態</span>
                    <div class="radio-warrp">
                        <i radio></i>&nbsp 今年自動續約 &nbsp&nbsp&nbsp
                        <i radio></i>&nbsp 今年不自動續約
                    </div>
                </div>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons';
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
            FooterButtons
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
        .content-warrp{
            > div {
                @include font($color: $font-color-blue, $weight: bold);
                padding:.4rem;
                > input{
                    @include font($weight: initial);
                }
                .padding-left{
                    padding-left: 1rem;
                }
            }
            .flex{
                .flex-wrap{
                    flex-wrap: wrap;
                }
                .radio-warrp{
                    display: flex;
                    align-items: flex-end;
                    i{
                        background-color: $white;
                        border-radius: 50%;
                    }
                }
                textarea{
                    width: 80%;
                    height: 3rem;
                }
                a{
                    display: inline-block;
                    background-color: $btn-bgc-footer;
                    color: $white;
                    padding: 0.2em .5em;
                    vertical-align: middle;
                    text-decoration: none;
                    margin: 0 0.2em;
                    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
                }
            }
        }
    }
</style>
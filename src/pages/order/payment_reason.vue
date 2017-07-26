<template>
    <section class="main-section">
        <div class="content-section" >
            <div class="content-warrp common-alt-bg">
                <div class="column-layout">
                    <h3 class="ui-w-20">是否本人</h3>
                    <div class="radio-warrp">
                        本人<i radio></i>&nbsp&nbsp&nbsp
                        非本人<i radio></i>
                    </div>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-20">憑單編號</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-20">訂貨人編號</h3>
                    <span>2007600</span>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-20">申請人編號</h3>
                    <input type="text">
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-20">原因說明</h3>
                    <textarea></textarea>
                </div>
                <div class="column-layout">
                    <h3 class="ui-w-20">申請日期</h3>
                    <span>2007600</span>
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
                    {text: '保存',clickEvent: 'button_save'}
                ]
            }
        } , 
        components : {
            FooterButtons
        },
        methods : {
            button_save() {
                this.back()
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
        .content-warrp{
            > div {
                padding:.4rem;
                > h3{
                    @include font($color: $font-color-blue, $weight: bold);
                }
            }
            .column-layout{
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
            }
        }
    }
</style>
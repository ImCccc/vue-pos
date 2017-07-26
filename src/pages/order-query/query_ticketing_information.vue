<template>
    <section class="main-section">
        <div class="content-section">
            <div class="background-color-white">
                <div class="common-list-layout">
                    <div class="col01 font-blue">座位ID</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">課程代碼</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">票券SKU</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">票券全額</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">票券描述</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">票券語音代碼</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">發票編號</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">付款人編號</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">訂單編號</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">訂貨人編號</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">處理日期</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">處理時間</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">處理人員</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">取消日期</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">取消時間</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">取消人員</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue">狀態</div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue">座位</div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>
                <div class="common-list-layout">
                    <div class="col01 font-blue">票券重印號</div>
                    <div class="col02">
                        <span></span>
                    </div>
                    <div class="col03 font-blue"></div>
                    <div class="col04">
                        <span></span>
                    </div>
                    <div class="col05 font-blue"></div>
                    <div class="col06">
                        <span></span>
                    </div>
                </div>

            </div>            
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    import FooterButtons from 'base/footerButtons';
    export default {
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'}
                ]
            }
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
    .content-section{
        overflow: auto;
        .common-list-layout{
            padding: .5rem;
            align-items:baseline;
            > div {
                padding-right: .8rem;
                flex-shrink:0;
            }
            > div:last-child{
                padding-right: 0rem;
            }
            .font-blue{
                @include font($color: $font-color-blue, $weight:bold)
            }
            .col01{
                width: 16%;
            }
            .col02{
                width: 16.6%
            }
            .col03{
                width: 16%;
            }
            .col04{
                width: 16.6%
                
            }
            .col05{
                width: 21%;
            }
            .col06{
                flex-grow:1;
                flex-shrink:200;
            }
        }
    }

</style>
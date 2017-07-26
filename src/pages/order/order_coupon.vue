<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <header class="section-header">
                <div>                  
                    <span>2007600 &nbsp&nbsp</span>
                    <span>辅导费打发第三方地方</span>
                </div>
                <div>                   
                    <span>抵用券餘額:</span>
                    <span>555</span>
                    <span>代用券餘額:</span>
                    <span>666</span>
                </div>
            </header>
            <list-scroll-warrp class="height" :titles="titles" :data="[]">
                <div class="list-common"> 
                    <div class="tb-list01">訂單</div>
                    <div class="tb-list02">11</div> 
                    <div class="tb-list03">11</div> 
                    <div class="tb-list04">11</div> 
                </div>
                <div class="list-common"> 
                    <div class="tb-list01">扣減</div>
                    <div class="tb-list02">11</div> 
                    <div class="tb-list03">11</div> 
                    <div class="tb-list04">11</div> 
                </div>

                <div class="list-common"> 
                    <div class="tb-list01">應付金額</div>
                    <div class="tb-list02">11</div> 
                    <div class="tb-list03">11</div> 
                    <div class="tb-list04">11</div> 
                </div>
            </list-scroll-warrp>
            <div class="warrp common-margin-top">
                <header class="common-list-layout header">
                    <span class="col01">&nbsp</span>
                    <span class="col02">類型</span>
                    <span class="col03">編號</span>
                    <span class="col04">原始金額</span>
                    <span class="col05">剩餘金額</span>
                    <span class="col06">銷售額</span>
                    <span class="col07">積分額</span>
                    <span class="col08">開始時間</span>
                    <span class="col09">到期時間</span>
                    <span class="col10">使用金額</span>
                    <span class="col11">&nbsp</span>
                </header>
                <scroll class="lists" :data="data">
                    <div class="list-scroll common-alt-bg">
                        <div class="common-list-layout ">
                            <span class="col01">1</span>
                            <span class="col02">類型</span>
                            <span class="col03">編號</span>
                            <span class="col04">原始金額</span>
                            <span class="col05">剩餘金額</span>
                            <span class="col06">銷售額</span>
                            <span class="col07">積分額</span>
                            <span class="col08">開始時間</span>
                            <span class="col09">到期時間</span>
                            <span class="col10">使用金額</span>
                            <span class="col11">
                                <i checkbox class="choose"></i>
                            </span>
                        </div>
                        <div class="common-list-layout ">
                            <span class="col01">1</span>
                            <span class="col02">類型</span>
                            <span class="col03">編號</span>
                            <span class="col04">原始金額</span>
                            <span class="col05">剩餘金額</span>
                            <span class="col06">銷售額</span>
                            <span class="col07">積分額</span>
                            <span class="col08">開始時間</span>
                            <span class="col09">到期時間</span>
                            <span class="col10">使用金額</span>
                            <span class="col11">
                                <i checkbox class="choose"></i>
                            </span>
                        </div>
                    </div>
                </scroll>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll';
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data () {
            return {
                titles:['', '金額', '售貨額', '積分額'],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '確認<br/>付款',clickEvent: 'button_payment'}
                ],
                data: []
            }
        }, 
        components: {
            Scroll,
            FooterButtons,
            ListScrollWarrp
        },
        methods : {
            button_payment() {
                this.$pos_goPage('order_sale')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .height{
        height: 8rem;
    }
    .list-common{
        > div{
            word-break: break-all;
            padding: .2rem;
        }
        .tb-list01{
            width: 20%;
            @include font($color: $font-color-blue, $size: $font-small)
        }
        .tb-list02{
            width: 20%;
        }
        .tb-list03{
            width: 20%;
        }
        .tb-list04{
            text-align: center;
        }
    }
    .warrp{
        @include flex($grow:1, $direction: column, $shrink: 200);
        .header{
            flex-shrink: 0;
            padding: .2rem;
            @include font($color: $font-color-blue, $weight:bold)
            background-color: $white;
        } 
        .lists{
            flex-grow: 1;
            overflow: hidden;
            .list-scroll > div {
                padding: .2rem;
            }
        }   
        .common-list-layout{
            > span {
                display: inline-block;
                text-align: center; 
            }
            .col01{width: 2%; }
            .col02{width: 10%; }
            .col03{width: 10%; }
            .col04{width: 10%; }
            .col05{width: 10%; }
            .col06{width: 10%; }
            .col07{width: 10%; }
            .col08{width: 10%; }
            .col09{width: 10%; }
            .col10{width: 10%; }
            .col11{flex-grow:1; }
        }
    }
</style>
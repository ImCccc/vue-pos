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
            <div class="flex-column flex-grow-1 content-bg common-margin-top">
                <list-scroll-warrp class="flex-grow-1" 
                    :titles="titles" 
                    :data="data" 
                    @scrollToEnd="scrollToEnd">
                    <template v-for="(item,index) in data">
                        <div> 
                            <div class="tb-list01">{{index + 1}}</div>
                            <div class="tb-list02">
                                <a class="link">
                                    OO150120162501
                                </a>
                            </div> 
                            <div class="tb-list03">{{item}}</div> 
                            <div class="tb-list04">{{item}}</div> 
                            <div class="tb-list05">{{item}}</div> 
                        </div>
                    </template>
                </list-scroll-warrp>
                <div class="lineNum">
                    <p>
                        <span class="font">行號：</span>
                        <input class="ui-w-10" />
                    </p>
                </div>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import Scroll from 'base/scroll';
    import FooterButtons from 'base/footerButtons'
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data () {
            return {
                data : [] ,
                titles:[
                    '行',
                    '訂單編號',
                    '中心別',
                    '使用時間',
                    '金額'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '訂單<br/>明細',clickEvent: 'button_order_details'}
                ]

            }
        }, 
        created() {
            setTimeout(() => {
                this.data=[8,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,8];
            },20)
        },
        watch : {
        } ,
        components: {
            Scroll,
            FooterButtons,
            ListScrollWarrp
        },
        methods : {
            scrollToEnd() {
                this.data.push(8888888);
            },
            button_order_details() {
                this.$pos_goPage('query_details')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content-bg{
        background-color: $white;
    }
    .lineNum{
        text-align: center;
        p{
            margin: 0;
            padding-bottom:.8rem;
            .font{
                @include font($size: $font-small, $weight:bold, $color:$font-color-blue);
            }
        }
    }
    .tb-list01{
        width: 2rem;
        text-align: center;
    }
    .tb-list02{
        width: 8rem;
        padding-left: .2rem;
    }
    .tb-list03{
        width: 8rem;
        padding-left: .2rem;

    }
    .tb-list04{
        width: 8rem;
        padding-left: .2rem;

    }
    .tb-list05{
        padding-left: .2rem;

    }

</style>
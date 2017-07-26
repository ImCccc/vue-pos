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
            <div class="list-warrp common-padding common-margin-top">
                <h2>已選擇贈品資訊</h2>
                <list-scroll-warrp :padding="false" class="flex-grow-1" 
                    :titles="titles" 
                    :data="data" 
                >
                    <template v-for="(item,index) in data">
                        <div class="data-column"> 
                            <div class="tb-list01">{{index+1}}</div>
                            <div class="tb-list02">{{item}}</div> 
                            <div class="tb-list03">{{item}}</div> 
                            <div class="tb-list04">{{item}}</div> 
                            <div class="tb-list05">{{item}}</div> 
                            <div class="tb-list06">{{item}}</div> 
                        </div>
                    </template>
                </list-scroll-warrp>
            </div>

            <div class="list-warrp common-padding common-margin-top">
                <h2>未選擇贈品資訊</h2>
                <list-scroll-warrp :padding="false" class="flex-grow-1" 
                    :titles="titles" 
                    :data="data" 
                >
                    <template v-for="(item,index) in data">
                        <div class="data-column"> 
                            <div class="tb-list01 delete-border">{{index+1}}</div>
                            <div class="tb-list02">{{item}}</div> 
                            <div class="tb-list03">{{item}}</div> 
                            <div class="tb-list04">{{item}}</div> 
                            <div class="tb-list05">{{item}}</div> 
                            <div class="tb-list06">
                                <input type="number" class="ui-w-90 input-style">
                            </div> 
                        </div>
                    </template>
                </list-scroll-warrp>
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
                data : [] ,
                titles:[
                    '',
                    '推廣名稱',
                    '優惠名稱',
                    '產品編號',
                    '單價金額',
                    '促銷數量'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '確認<br/>付款',clickEvent: 'button_payment'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
                this.data=[8,88,888];
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
            button_payment() {
                this.$pos_goPage('payment')
            }

        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    
    .list-warrp{
        @include flex($grow: 1, $direction: column);
        background-color: $white;
        h2{
            @include font($color: $font-color-blue, $weight:bold);
            text-align: center;
            padding: .1rem;
            border:1px solid #959595;
            border-bottom: 0px;
        }
        .data-column{
            > div {
                height: 100%;
                display: flex;
                align-items:center;
                border-bottom:1px solid #959595;
                padding-left: .5rem;
            }
            > div:first-child{
                padding-left: 0rem;
                justify-content: center;
                /*background-color:$white;*/
            }
            /*.delete-border{
                border-bottom:transparent;
            }*/
            .input-style{
                height: 1.2rem;
            }
        }
    }
    .tb-list01{width: 5%; }
    .tb-list02{width: 18%; }
    .tb-list03{width: 18%; }
    .tb-list04{width: 18%; }
    .tb-list05{width: 18%; }
    .tb-list06{}
</style>
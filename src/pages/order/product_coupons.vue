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
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                :data="data" 
                @scrollToEnd="scrollToEnd">
                <template v-for="item in data">
                    <div> 
                        <div class="tb-list01">{{item}}</div>
                        <div class="tb-list02">{{item}}</div> 
                        <div class="tb-list03">{{item}}</div> 
                        <div class="tb-list04">{{item}}</div> 
                        <div class="tb-list05">{{item}}</div> 
                        <div class="tb-list06">{{item}}</div> 
                        <div class="tb-list07">{{item}}</div> 
                        <div class="tb-list08">{{item}}</div> 
                        <div class="tb-list09">{{item}}</div> 
                        <div class="tb-list10">{{item}}</div> 
                    </div>
                </template>
            </list-scroll-warrp>
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
                    'tb-list01',
                    'tb-list02',
                    'tb-list03',
                    'tb-list04',
                    'tb-list05',
                    'tb-list06',
                    'tb-list07',
                    'tb-list08',
                    'tb-list09',
                    'tb-list10'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '使用<br/>日誌',clickEvent: 'button_log'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
                this.data=[8,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,88,8];
            },20)
        },
        components: {
            Scroll,
            FooterButtons,
            ListScrollWarrp
        },
        methods : {
            scrollToEnd() {
                this.data.push(8888888);
            },
            button_log() {
                this.$pos_goPage('product_coupons_log')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .tb-list01{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list02{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list03{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list04{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list05{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list06{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list07{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list08{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list09{
        width: 4rem;
        padding-left: .2rem
    }
    .tb-list10{
        padding-left: .2rem
    }

</style>
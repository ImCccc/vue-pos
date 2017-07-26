<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <header class="section-header">
                <div>                  
                    <span>2007600 &nbsp&nbsp</span>
                    <span>辅导费打发第三方地方</span>
                </div>
            </header>
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                :data="data" 
                @scrollToEnd="scrollToEnd">
                <template v-for="item in data">
                    <div class="list-common"> 
                        <div class="tb-list01">{{item}}</div>
                        <div class="tb-list02">{{item}}</div> 
                        <div class="tb-list03">{{item}}</div> 
                        <div class="tb-list04">{{item}}</div> 
                        <div class="tb-list05">{{item}}</div> 
                        <div class="tb-list06">{{item}}</div> 
                        <div class="tb-list07">{{item}}</div> 
                        <div class="tb-list08">{{item}}</div> 
                        <div class="tb-list09">{{item}}</div> 
                    </div>
                </template>
            </list-scroll-warrp>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data() {
            return {
                data: [] ,
                titles:['產品編號', '訂貨代碼', '產品名稱', '數量', '產品狀態', '售價', '售貨額', '積分額', '總金額'],
                buttons: [
                    {clickEvent: 'back'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
                this.data=['s','ddddddddddddddddddddddd','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tt'];
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .list-common{
        > div{
            word-break: break-all;
            padding-left: .2rem
        }
        .tb-list01{width: 11%;}
        .tb-list02{width: 11%;}
        .tb-list03{width: 11%;}
        .tb-list04{width: 11%;}
        .tb-list05{width: 11%;}
        .tb-list06{width: 11%;}
        .tb-list07{width: 11%;}
        .tb-list08{width: 11%;}
    }
</style>
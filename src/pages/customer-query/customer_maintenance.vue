<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <header class="section-header">
                <div>                  
                    <span>顧客編號&nbsp&nbsp</span>
                    <input type="text">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                </div>
                <div>                   
                    <span>顧客姓名&nbsp&nbsp</span>
                    <input type="text">
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
                            </div> 
                            <div class="tb-list03">{{item}}</div> 
                            <div class="tb-list04">{{item}}</div> 
                            <div class="tb-list05">{{item}}</div> 
                        </div>
                    </template>
                </list-scroll-warrp>
                <div class="lineNum">
                    <div class="text-align-right">
                        <span class="">行號</span>&nbsp&nbsp
                        <input class="ui-w-20" />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    </div>
                    <div class="flex-grow-1">
                        <span class="">取消原因</span>&nbsp&nbsp
                        <input class="ui-w-60" />
                    </div>
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
                    {clickEvent: 'clear'},
                    {text: '訂單<br/>查詢',clickEvent: ''}
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
    .section-header{
        justify-content:center;
    }
    .lineNum{
        display: flex;
        justify-content:center;
        padding-bottom: .8rem;
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
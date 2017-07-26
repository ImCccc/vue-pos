<template>
    <section class="main-section">
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
                    '編碼',
                    '描述',
                    '金額',
                    '使用'
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
</style>
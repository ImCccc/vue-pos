<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                :data="data" 
                @scrollToEnd="scrollToEnd">
                <template v-for="(item, index) in data">
                    <div> 
                        <div class="tb-list01">{{index + 1}}</div>
                        <div class="tb-list02">{{item}}</div> 
                        <div class="tb-list03">{{item}}</div> 
                        <div class="tb-list04">
                            <i checkbox class="choose"></i>
                        </div> 
                    </div>
                </template>
            </list-scroll-warrp>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>

    </section>
</template>
<script>
    import Scroll from 'base/scroll';
    import ListScrollWarrp from 'base/listScrollWarrp';
    import FooterButtons from 'base/footerButtons'
    export default {
        data () {
            return {
                data : [] ,
                titles:[
                    '',
                    '描述',
                    '金額',
                    '使用'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '確認',clickEvent: 'button_confirm'}
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
            FooterButtons,
            Scroll,
            ListScrollWarrp
        },
        methods : {
            scrollToEnd() {
                this.data.push(8888888);
            },
            button_confirm() {
                this.back()
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .tb-list01{
        width: 2rem;
        text-align: center;
    }
    .tb-list02{
        width: 60%;
        padding-left: .2rem
    }
    .tb-list03{
        width: 30%;
        padding-left: .2rem
    }
    .tb-list04{
        text-align: center;
    }
</style>
<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <header class="section-header">
                <div>                  
                    <span>2007600 &nbsp&nbsp</span>
                    <input type="text">
                </div>
                <div>                   
                    <span>抵用券餘額:</span>
                    <span>555</span>
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
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll';
    import ListScrollWarrp from 'base/listScrollWarrp';
    export default {
        data () {
            return {
                data : [] ,
                titles:[
                    '顧客編號',
                    '顧客中文姓名',
                    '顧客英文姓名碼',
                    '身份證號碼',
                    '配偶中文姓名',
                    '配偶英文姓名',
                    '到期日',
                    '退出日'
                ],
                buttons: [
                    {clickEvent: 'back'},
                    {text: '查詢',clickEvent: 'button_query'}
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
            },
            button_query() {
                
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
</style>
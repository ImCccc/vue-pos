<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <list-scroll-warrp class="flex-grow-1 common-margin-top" 
                :titles="titles" 
                :data="data" 
                :height="height" 
                @scrollToEnd="scrollToEnd">
                <template v-for="item in data">
                    <div class="list-common"> 
                        <div class="tb-list01">{{item}}</div>
                        <div class="tb-list02">{{item}}</div> 
                        <div class="tb-list03">{{item}}</div> 
                        <div class="tb-list04">
                            <input type="text" class="ui-w-80">
                        </div> 
                        <div class="tb-list05">
                            <input type="text" class="ui-w-80">
                        </div> 
                    </div>
                </template>
            </list-scroll-warrp>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import Scroll from 'base/scroll'
    import ListScrollWarrp from 'base/listScrollWarrp'
    import FooterButtons from 'base/footerButtons'
    export default {
        data() {
            return {
                data: [] ,
                titles:[
                    '訂貨代碼',
                    '產品中文名稱',
                    '產品編號',
                    '機器條碼',
                    '電子模組條碼'
                ] ,
                height: '2rem',
                buttons: [
                    {clickEvent: 'back'},
                    {text: '保存',clickEvent: 'button_save'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
                this.data=['s','dddddddddddddddd','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tttt','tt']
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
            button_save() {
                this.back()
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
            padding: .2rem;
            input{
                height: 1.4rem;
            }
        }
        .tb-list01{
            width: 20%;
        }
        .tb-list02{
            width: 20%;
        }
        .tb-list03{
            width: 20%;
        }
        .tb-list04{
            width: 20%;
            text-align: center;
        }
        .tb-list05{
            text-align: center;
        }
    }
</style>
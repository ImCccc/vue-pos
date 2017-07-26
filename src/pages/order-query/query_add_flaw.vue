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
            <div class="content">
                <div class="height">
                    <h3>新增瑕疵</h3>
                    <div class="tit common-list-layout">
                        <div class="ui-w-5">行</div>
                        <div class="ui-w-17">SKU</div>
                        <div class="ui-w-17">中文</div>
                        <div class="ui-w-10">數量</div>
                        <div class="ui-w-30">瑕疵原因</div>
                        <div class="flex-grow-1">操作</div>
                    </div>
                    <scroll class="flex-grow-1 scroll-style">
                        <div>
                            <div class="common-list-layout">
                                <div class="ui-w-5 text-align-center">1</div>
                                <div class="ui-w-17"><input class='ui-w-95' type="text"></div>
                                <div class="ui-w-17"><input class='ui-w-95' type="text"></div>
                                <div class="ui-w-10"><input class='ui-w-95' type="text"></div>
                                <div class="ui-w-30"><input class='ui-w-95' type="text"></div>
                                <div class="flex-grow-1 text-align-center">
                                    <a class="dry-button">新增</a>
                                    <a class="dry-button">修改</a>
                                    <a class="dry-button">刪除</a>
                                </div>
                            </div>
                        </div>
                    </scroll>
                </div>
                <div class="">
                    <h3>誤訂更換</h3>
                    <div class="tit common-list-layout">
                        <div class="ui-w-5">行</div>
                        <div class="ui-w-26">SKU</div>
                        <div class="ui-w-26">中文</div>
                        <div class="ui-w-20">數量</div>
                        <div class="flex-grow-1">操作</div>
                    </div>
                    <scroll class="flex-grow-1 scroll-style">
                        <div>
                            <div class="common-list-layout">
                                <div class="ui-w-5 text-align-center">1</div>
                                <div class="ui-w-26"><input class='ui-w-95' type="text"></div>
                                <div class="ui-w-26"><input class='ui-w-95' type="text"></div>
                                <div class="ui-w-20"><input class='ui-w-95' type="text"></div>
                                <div class="flex-grow-1 text-align-center">
                                    <a class="dry-button">新增</a>
                                    <a class="dry-button">修改</a>
                                    <a class="dry-button">刪除</a>
                                </div>
                            </div>
                        </div>
                    </scroll>
                </div>
            </div>
        </div>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import FooterButtons from 'base/footerButtons'
    import Scroll from 'base/scroll';
    export default {
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {text: '保存',clickEvent: 'button_save'}
                ]
            }
        }, 
        created() {
        },
        watch : {
        } ,
        components: {
            Scroll,
            FooterButtons,
        },
        methods: {
            button_save() {
                this.back()
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content{
        @include flex($grow:1, $direction:column);
        > div{
            @include flex($direction: column, $grow: 1);
            .scroll-style{
                overflow: auto;
                .common-list-layout{
                    padding: .2rem 0;
                }
            }
            h3{
                font-size: 1.2rem;
                color: #2A2A2A;
                margin: .5rem 0;
            }
            .tit{
                flex-shrink:0;
                background-color: $btn-bgc-footer;
                text-align: center;
                color: $white;
                margin-bottom: .5rem;
            }
            .dry-button{
                padding: .15rem .4rem;
            }
        }
        .height{
            flex-shrink:0;
            height:8rem; 
        }
    }

</style>
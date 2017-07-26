<template>
    <section class="main-section">
        <div class="content-section flex-column">
            <div class="list-warrp padding-1 common-margin-top">
                <list-scroll-warrp :padding="false" class="flex-grow-1" 
                    :titles="titles" 
                    :data="data" 
                    @scrollToEnd="scrollToEnd">
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
            <div class="list-warrp padding-2">
                <h2 class="title title-1">刷讀數量為：</h2>
                <list-scroll-warrp :padding="false" class="flex-grow-1" 
                    :titlelength="6" 
                    :titles="[]" 
                    :data="data" 
                    @scrollToEnd="scrollToEnd">
                    <template v-for="(item,index) in data">
                        <div class="data-column"> 
                            <div class="tb-list01 delete-border">{{index + 1 }}</div>
                            <div class="tb-list02">www</div> 
                            <div class="tb-list03">www</div> 
                            <div class="tb-list04">www</div> 
                            <div class="tb-list05">www</div> 
                            <div class="tb-list04">{{item}}</div> 
                        </div>
                    </template>
                </list-scroll-warrp>
                <h2 class="title title-2">贈品數量為：<h2>
            </div>
            <div class="footer">
                <div>總數量：<span></span>&nbsp&nbsp&nbsp&nbsp&nbsp</div>
                <div>總金額：<span></span></div>
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
                    '推廣名稱',
                    '推廣名稱',
                    '優惠名稱',
                    '產品編號',
                    '單價金額',
                    '促銷數量'
                ],
                buttons: [
                    {clickEvent: 'back'}
                ]
            }
        }, 
        created() {
            setTimeout(() => {
                this.data=[8,88,888];
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

    .content-section{
        .footer{
            @include flex($shrink:0, $justify-content: flex-end, $align-items: center);
            @include font($color: $font-color-blue, $weight: bold);
            height: 2rem;
        }
        .padding-2{
            padding:0 .8rem .8rem;
        }
        .padding-1{
            padding:.8rem .8rem 0;
        }
        .list-warrp{
            @include flex($grow: 1, $direction: column);
            background-color: $white;
            .title{
                height: 1.5rem;
                line-height: 1.5rem;
                text-align: center;
                border-top: transparent;
                border: $border;
                @include font($color: $font-color-blue, $weight:bold, $size: $font-small);
            }
            .title-1{
                position: absolute;
                z-index: $common-z-index;
                background-color: $white;
                border-bottom:transparent; 
                width: 93%;
                left: 0;
                right: 0;
                margin: auto;
            }
            .title-2{
                width: 100%;
            }
            .data-column{
                > div {
                    padding-left: .5rem;
                }
            }
        }
        .tb-list01{width: 16%; }
        .tb-list02{width: 16%; }
        .tb-list03{width: 16%; }
        .tb-list04{width: 16%; }
        .tb-list05{width: 16%; }
        .tb-list06{}
    }
</style>
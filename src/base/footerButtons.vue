<template>
    <swiper :options="swiperOption" ref="mySwiper" class='content-footer'>
        <template v-for="button in buttons">
            <swiper-slide class="slider" >
                <a  v-html="butText(button.text, button.clickEvent)" @click="clickBut(button.clickEvent)"></a>
            </swiper-slide>
        </template>
        <div class="swiper-button swiper-button-prev" slot="button-prev" v-if="showFalg"></div>
        <div class="swiper-button swiper-button-next" slot="button-next" v-if="showFalg"></div>
    </swiper>
</template>
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    const screen = window.screen.width === 736 ? 'iphone-6plus' : window.screen.width === 667 ? 'iphone-6' : 'ipad'
    const SPACE_BETWEEN = 10
    var SLIDES_VIEW_NUMBER = screen === 'ipad' ? 8 : 7
    export default {
        name: 'carrousel',
        props: {
            buttons: {
                type: Array,
                default: []
            },
            freeMode: {
                type: Boolean,
                default: true
            }
        },
        computed: {
            showFalg() {
                return this.buttons.length > SLIDES_VIEW_NUMBER
            }
        },
        created() {
            this.$nextTick((vm) => {
                this.$refs.mySwiper.$el.style.position = 'static';
                this.$refs.mySwiper.$el.style.zIndex = 'initial';
            })
        },
        data() {
          return {
            swiperOption: {
                slidesPerView: SLIDES_VIEW_NUMBER,//显示多小个按钮
                prevButton:'.swiper-button-prev',//按钮
                nextButton:'.swiper-button-next',//按钮
                spaceBetween: SPACE_BETWEEN, //按钮间隔
                freeMode: this.freeMode // default false; false => slide滑动时只滑动一格，并自动贴合wrapper; true => slide会根据惯性滑动且不会贴合
            } 
          }
        },
        methods: {
            butText(text, clickEvent) {
                if (clickEvent === 'back') {
                    return "返回";
                }
                if (clickEvent === 'button_clear') {
                    return "畫面<br/>清除";
                }
                if (clickEvent === 'confirm') {
                    return '確認';
                }
                return text && text.replace(/(br|<br>|<br\/>)/g,'<br>')
            },
            clickBut(clickEvent) {
                this.$emit('footerMenuEvent',clickEvent)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'src/common/style/sprite.scss';
    @import 'src/common/style/variable.scss';
    @import 'src/common/style/mixin.scss';
    .content-footer{
        width: 96%;
        @include media((width: 94%), $iphone-6);
        padding: .8rem 0rem;
        flex-shrink: 0;
        .swiper-button{
            top: initial;
            margin-top: -2.5rem;
            @include media((margin-top: -3rem));

        }
        .swiper-button-prev,.swiper-button-next{
            z-index: $common-z-index;
        }
        .swiper-button-prev{
            background-image:url(../common/images/next.png);
        }
        .swiper-button-next{
            background-image:url(../common/images/prev.png);
        }
        .slider{
            display: inline-block;
            border-radius:10%;
            width: 5.5rem;
            height: 3rem;
            margin-left: 0.05rem;
            margin-right: 0.05rem;
            background-color: $btn-bgc-footer;
            justify-content: center;
            align-content: center;
            vertical-align: middle;
            a{  
                @include flex($justify-content: space-around, $align-items: center);
                -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
                width: 100%;
                height: 100%;
                color: $white;
                text-decoration: none;
            }
        }
    }
</style>
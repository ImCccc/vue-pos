<template>
    <transition name="animation-prompt">
        <div v-show="showFlag" class="warp">
            <div v-on:touchstart="popTouchstart($event)"
                 v-on:touchmove="popTouchmove($event)" 
                ref="pop_move" 
                class="move">
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { move_pop_touchstart , move_pop_init_startData , move_pop_touchmove } from 'common/util/utils.js'
    export default {
        props: {
            showFlag: {
                type: Boolean,
                default: false
            }
        },
        created() {
            this.startData = {
                initTop : 0,
                initLeft : 0,
                startTop : 0 , 
                startLeft : 0 , 
                startX : 0 , 
                startY : 0 
            }
        },
        watch: {
            showFlag(newval, oldval){
                if (newval === false) {
                    this.init_move_coordinate();
                }
            }
        },
        methods : {
            init_move_coordinate ( evt ) {
                var vm = this;
                setTimeout(function(){
                    move_pop_init_startData(  vm.$refs.pop_move , vm.startData) ; 
                },500);
            } , 
            popTouchstart ( evt ) {
                move_pop_touchstart( evt , this.$refs.pop_move , this.startData ); 
            } , 
            popTouchmove ( evt ) {
                move_pop_touchmove(evt , this.$refs.pop_move , this.startData ) ; 
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../common/style/variable.scss';
    .warp{
        z-index: $moveBox-z-index;
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        .move{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #ffffff;
            box-shadow: 0 0 0.5rem #000000;
            max-width: 70%;
            min-width: 21rem;
            min-height: 10rem;
            border-radius: .3rem;
        }
    }
    .animation-prompt-enter-active {
        animation: animation-prompt-in .5s;
    }
    .animation-prompt-leave-active {
        animation: animation-prompt-out .3s;
    }
    @keyframes animation-prompt-in {
        0% {transform: scale(0) ; }
        50% {transform: scale(1.3) ; }
        100% {transform: scale(1); }
    }
    @keyframes animation-prompt-out {
        0% {transform: scale(1); }
        100% {transform: scale(0); }
    }
    
</style>
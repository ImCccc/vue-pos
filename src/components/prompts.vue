<template>
    <transition name="animation-prompt">
        <div v-show="prompts.isShow" class="common-ui-pop_move">
            <div v-on:touchstart="popTouchstart($event)" v-on:touchmove="popTouchmove($event)" ref="pop_move" class="common-ui-pop-content_move">
                <div style="word-break:break-all">{{ prompts.msgs[0] && prompts.msgs[0].msg }}</div>
                <div class="common-ui-pop-btn">
                    <a class="common-btn" @click="confirm">{{prompts.msgs[0].button.confirm}}</a>
                    <a class="common-btn" v-if="prompts.msgs[0].button.cancel" @click="cancel" >{{prompts.msgs[0].button.cancel}}</a>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import { mapGetters } from 'vuex'
    import { move_pop_touchstart , move_pop_init_startData , move_pop_touchmove } from 'common/util/utils.js'
    export default {
        data () {
            return {
                startData : {
                    initTop:0,
                    initLeft:0,
                    startTop : 0 , 
                    startLeft : 0 , 
                    startX : 0 , 
                    startY : 0 
                }
            }
        } , 
        computed : mapGetters({
            prompts:'prompts' 
        }) , 
        methods : {
            confirm () {
                var vm = this ; 
                var confirmCallBack = vm.prompts.confirmCallBack ; 
                var msgs = vm.prompts.msgs.concat();
                this.init_move_coordinate();
                if ( msgs.length > 1 ) {
                    msgs.splice( 0,1 ) ; 
                    vm.$store.commit('UPDATE_PROMPTS' , { 
                        isShow : false ,
                        msgs : msgs ,
                        button : msgs[0].button
                    } ) ; 
                    setTimeout( function() {
                        vm.$store.commit('UPDATE_PROMPTS' , { 
                            isShow : true 
                        } ) ; 
                    } , 300 );
                } else {
                    if ( typeof confirmCallBack === 'function' ) {
                        confirmCallBack.call(vm);
                    }
                    vm.$store.commit('UPDATE_PROMPTS' , {
                        isShow : false,
                        msgs : [{
                            msg:'',
                            button:{confirm:'确定'}
                        }] ,
                        confirmCallBack : function () {} ,
                        cancelCallBack : function () {} 
                    } ) ; 
                }
            } , 
            cancel () {
                var vm = this ; 
                var cancelCallBack = vm.prompts.cancelCallBack ; 
                if ( typeof cancelCallBack === 'function' ) {
                    cancelCallBack.call(vm);
                }
                this.init_move_coordinate();
                vm.$store.commit('UPDATE_PROMPTS' , {
                    isShow : false,
                    msgs : [{
                        msg:'',
                        button:{confirm:'确定'}
                    }] ,
                    confirmCallBack : function () {} ,
                    cancelCallBack : function () {} 
                } ) ; 
            } , 
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

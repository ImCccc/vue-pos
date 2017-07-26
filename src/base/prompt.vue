<template>
    <move-box ref="movebox" :showFlag="showFlag">
        <div class="concent">
            <div style="word-break:break-all">{{prompt.msg}}</div>
            <div class="btn-warrp">
                <a class="dry-button" @click="confirm">{{prompt.button.confirm}}</a>
                <a class="dry-button" v-if="prompt.buttonNum === 2 " @click="cancel" >{{prompt.button.cancel}}</a>
            </div>
        </div>
    </move-box>
</template>
<script>
    import { mapGetters } from 'vuex';
    import MoveBox from 'base/moveBox'
    export default {
        data () {
            return {
            }
        } , 
        computed : {
            showFlag() {
                return this.prompt.isShow
            },
            ...mapGetters({prompt:'prompt'})
        },
        methods : {
            confirm () {
                var confirmCallBack = this.prompt.confirmCallBack ; 
                if ( typeof confirmCallBack === 'function' ) {
                    confirmCallBack.call(this);
                }
                this.$store.commit('UPDATE_PROMPT' , {
                    isShow : false,
                    msg:'',
                    buttonNum:1,
                    button: {
                        confirm : '確定' ,
                        cancel : '取消' 
                    } , 
                    confirmCallBack : function () {} ,
                    cancelCallBack : function () {} 
                } ) ; 
            } , 
            cancel () {
                var cancelCallBack = this.prompt.cancelCallBack ; 
                if ( typeof cancelCallBack === 'function' ) {
                    cancelCallBack.call(this);
                }
                this.$store.commit('UPDATE_PROMPT' ,{
                    isShow : false,
                    msg:'',
                    buttonNum:1,
                    button: {
                        confirm : '確定' ,
                        cancel : '取消' 
                    } , 
                    confirmCallBack : function () {} ,
                    cancelCallBack : function () {} 
                } ) ; 
            } 
        },
        components: {
            MoveBox
        }
    }
</script>
<style lang="scss" scoped>
    .concent{
        min-width: 21rem;
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }
</style>
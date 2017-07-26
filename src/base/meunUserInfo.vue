<template>
    <div class="login-informaction">
        <div>
            <span>店鋪名稱:</span>
            <span v-text="shopName"></span>
        </div>
        <div >
            <span>POS機編號:</span>
            <span v-text="posCode"></span>
        </div>
        <div>
            <span>本班職員:</span>
            <span v-text="staffName"></span>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed:mapGetters({
            userInfo:'userInfo'
        }),
        data () {
            return {
                staffName:'',
                shopName:'',
                posCode:''
            }
        } , 
        created:function(){
            this.shopName = this.userInfo.shopName ;
            this.posCode = this.userInfo.posCode ; 
            this.staffName = this.userInfo.staffName ; 
        },
    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/mixin.scss';
    .login-informaction{
        @include flex($justify-content: space-between);
        width: 100%;
        height: 2rem;
    }
</style>
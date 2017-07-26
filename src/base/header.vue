<template>
    <header class="header">
        <div @click="isShowMenuFun()" v-if="isShowMenuIcon"  class="menu absolute">
            <i class="sprite sprite-icon-menu"></i>
        </div>
        <h1 class="ui-large">
            <i class="sprite sprite-logo"></i>
            <span>店鋪銷售系統 POS</span>
        </h1>
    </header>
</template>
<script>
    import {mapGetters} from 'vuex'
    export default {
        computed:mapGetters([
            'isShowMenuIcon'
        ]),
        methods:{
            isShowMenuFun () {
                this.$store.commit('UPDATE_ISSHOWMENU')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/sprite.scss';
    @import 'src/common/style/variable.scss';
    @import 'src/common/style/mixin.scss';
    .sprite {
        @include spriteBackgroundImage($route: '../common/images');
        vertical-align: middle
    }
    .header{
        @include flex($justify-content: center, $align-items: center, $shrink: 0);
        height: 4rem;
        background-color: $white;
        overflow: hidden;
        box-shadow: 0 0 0.5rem #000000;
        .menu{
            left: 1rem;
            top: 1rem;
        }
        h1{
            font-size: 2rem;
        }
    }

</style>
<template>
    <transition name="animation-loading">
	    <div v-show="loading" class="common-ui-pop common-ui-loading">
	        <div class="iconf"></div>
	    </div>
    </transition>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed:mapGetters({
            loading : 'loading'
        })
    }
</script>
<style lang="scss" scoped>
    @import 'src/common/style/variable.scss';
    .common-ui-pop {
        background-color: transparent;
        z-index: $loading-z-index;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .common-ui-loading {
        background-color: rgba(0, 0, 0, 0.5);
    }
    .common-ui-loading .iconf {
        text-align: center;
        height: 4em;
        line-height: 4em;
        width: 4em;
        background-image: url("../common/images/loading.gif");
        background-size: 100%;
        border-radius: 0.3em;
    }
    .animation-loading-enter-active, .animation-loading-leave-active {transition: opacity .5s }
    .animation-loading-enter, .animation-loading-leave-active {  opacity: 0; }
</style>
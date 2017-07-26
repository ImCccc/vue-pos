export const initViewMixin = {
    activated() {
        // 实现返回不刷新，跳转刷新的关键，返回不调 POS_INIT_VIEW POS_方法，跳_转调用INITVIEW 方法
        if (this.$route.params.POS_INIT_VIEW === true && typeof this.POS_INIT_VIEW === 'function') {
            this.POS_INIT_VIEW()
        }
    }, 
    methods: {
        POS_INIT_VIEW() {
            throw new Error('component must implement POS_INIT_VIEW method')
        }
    }
}

export const prevRouteMixin = {
    activated() {
        // 实现根据不同路由，调用不同方法的关键，每次跳转页面，只要页面上有以上一个页面路由命名的方法，都会调用
        if (typeof this[this.prevRoute.toUpperCase()] === 'function') {
            this[this.prevRoute.toUpperCase()](this.$pos_getParams())
        } else {
            throw new Error('component must implement prevRouteMixin method')
        }
    }
}
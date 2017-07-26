<template>
    <div class="scroll-warrp" :class="{padding:padding}">
        <div class="ui-table-scroll">
            <div class="ui-t-h" ref="title">
            	<template v-for="title in titleList">
	                <div>
                        <span v-html="title"></span>
                    </div>
            	</template>
            </div>
            <scroll ref="listScroll" 
                    class="content-warrp" 
                    :data="data" 
                    :probeType="probeType" 
                    :click="click" 
                    :listenScroll="listenScroll" 
                    :refreshDelay="refreshDelay" 
                    :beforeScroll="beforeScroll" 
                    :pullup="pullup" 
                    @scroll="scroll" 
                    @beforeScroll="beforeScrollFun" 
                    @scrollToEnd="scrollToEnd">
                <div ref="content">
	            	<slot></slot>
                </div>
            </scroll>
        </div>
    </div>
</template>
<script>
    import Scroll from 'base/scroll';
    const IS_REFRESH = 40;
    export default {
        props: {
            // 是否添加样式padding
            padding: {
                type: Boolean,
                default: true
            },
            titleHeight: {
                type: String,
                default: ''
            },
            // 设置每一行的高度
            height: {
                type: String,
                default: '1.5rem'
            },
            // 是否开启上啦刷新
            pullupRefresh: {
                type: Boolean,
                default: false
            },
            // 是否开启下拉加载
            downRefresh: {
                type: Boolean,
                default: true
            },
            // scroll 的 probeType 属性，3就是实时监听scroll事件，不节流
            probeType: {
                type: Number,
                default: 3
            },
            click: {
                type: Boolean,
                default: true
            },
            // 是否监听scroll 插件的 scroll 事件
            listenScroll: {
                type: Boolean,
                default: true
            },
            // 是否监听scroll 的 scrollToEnd 事件
            pullup: {
                type: Boolean,
                default: true
            },
            // 是否监听scroll 的 beforeScroll 事件
            beforeScroll: {
                type: Boolean,
                default: false
            },
            // 当data 数据更新是，什么时候执行scroll 的refresh 方法
            refreshDelay: {
                type: Number,
                default: 20
            },
            // 列表数据
            data: {
                type: Array,
                default: []
            },
            // 列表每一列数据 的 含义
            titles: {
                type: Array,
                default: []
            },
            titlelength: {
                type: Number,
                default: 0
            }
        },
        computed: {
            titleList() {
                if (this.titles.length > 0) {
                    return this.titles;
                } else {
                    let len = this.titlelength;
                    let titleList = [];
                    while( 0 < len) {
                        titleList.push('');
                        len--;
                    }
                    return titleList;
                }
            }
        },
        created() {
            this.init_title_style_finish = false;
            this.init_index = 0;
            this.isRefresh = false;
            this.$nextTick(() => {
                this.init_content_style();
                this.init_title_style();
            });
        },
        watch : {
        	data() {
                this.$nextTick(() => {
                    this.init_content_style();
                    this.init_title_style();
                })
        	}
        } ,
        components: {
            Scroll
        },
        methods : {
            scrollToEnd() {
                if (this.isRefresh) {
                    this.isRefresh = false;
                    this.$emit('scrollToEnd');
                } 
            },
            scroll(pos, maxScrollY) {
                let y = pos.y;
                if (y > 0) {
                    if (this.pullupRefresh && y > IS_REFRESH) {
                        this.isRefresh = true;
                        return;
                    }
                } else {
                    if (this.downRefresh && pos.y < (maxScrollY - IS_REFRESH)) {
                        this.isRefresh = true;
                        return;
                    }
                }
            },
            beforeScrollFun() {
                this.$emit('beforeScroll');
            },
            init_content_style() {
            	let content_children = this.$refs.content.children;
                let length = content_children.length;
                let init_index = this.init_index;
        		for (let i = init_index; i < length; i++) {
                    // 当有列表添加，在开始添加的位置循环即可
                    this.init_index ++ ;
                    /*
                        给每一行数据列表 添加样式 ；不用样式添加时由于 列表的数据是父组件传递过来，在这里不能给外面的元素添加样式
                        display: flex;
                        align-items: center;
                        height : 1.5rem;
                    */
                    if (content_children[i].style.display !== 'flex') {
                        content_children[i].style.display = `flex`;
                        content_children[i].style.alignItems = 'center';
                        content_children[i].style.height = this.height;
                        // 交替背景
                        if (i % 2 !== 1 ) {
                        	content_children[i].style.backgroundColor = 'rgba(175,175,175,0.27)';
                        }
                        // 给每一行的最后一个元素添加自适应宽度
                        content_children[i].lastChild.style.flexGrow = 1;
                        content_children[i].lastChild.style.flexShrink = 200;
                    }
                }
            },
            init_title_style() {
                let title_children = this.$refs.title.children;
                let title_children_len = title_children.length;
                // 重置 title 的高度
                if (this.titleHeight) {
                    for (let i = 0; i < title_children_len; i++) {
                        title_children[i].children[0].style.height = this.titleHeight;
                        title_children[i].children[0].style.lineHeight = '1rem';
                    }
                }
                // 重置 title 的宽度，让每一行的宽度和每一行数据列表的宽的一一对应
                if ( !this.init_title_style_finish ) {
                    if (this.$refs.content.firstChild){
                        this.init_title_style_finish = true;
                        let content_firstChild = this.$refs.content.firstChild.children;
                        let content_firstChild_length = content_firstChild.length;
                        for (let i = 0; i < content_firstChild_length; i++) {
                            let offsetWidth = content_firstChild[i].offsetWidth;
                            title_children[i].style.width = `${offsetWidth}px`;
                        }
                    }
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../common/style/mixin';
    @import '../common/style/variable';
    .padding{
        padding: .8rem;
    }
    .scroll-warrp{
        background-color: $white;
        display: flex;
        flex-direction: column;
        .ui-table-scroll{
            position: relative;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            font-size: $font-small;
            .ui-t-h{
                height: 100%;
                display: flex;
                flex-grow: 1;
                align-items: stretch;
                > div{
                    border: $border;
                    border-left: none;
                    height: auto;
                    flex-shrink: 0;
                    color: #002f5f;
                    font-weight: bold;
                    flex-grow: 1;
                    >span{
                        display: flex;
                        justify-content:center;
                        align-items: center;
                        position: relative;
                        overflow: hidden;
                        height: 1.5rem;
                        line-height: 1.5rem;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        border-bottom: $border;
                    }
                }
                > div:first-child {
                    border-left: $border;
                }
                > div:last-child {
                    flex-grow: 1;
                    flex-shrink: 0;
                }
            }
            .content-warrp{
                top: 0;
                position: absolute;
                width: 100%;
                height: 99%;
                overflow: auto;
                border-top: transparent solid 1.5rem;
            }
        }
    }
</style>
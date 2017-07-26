<template>
    <section class="main-section">
        <scroll class="content-section">
            <div class="common-alt-bg2">
                <div class="common-list-layout">
                    <div class="ui-w-20"><i radio class="radio-absolute"></i>通訊地址</div>
                    <div class="ui-w-35"><input type="text" class="ui-w-100"/></div>
                    <div class="ui-w-15">電話號碼</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-100"/></div>
                </div>
				<div class="common-list-layout">
                    <div class="ui-w-20"><i radio class="radio-absolute"></i>宅配地址</div>
                    <div class="ui-w-35"><input type="text" class="ui-w-100"/></div>
                    <div class="ui-w-15">電話號碼</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-20"><i radio class="radio-absolute"></i>DD居住地址</div>
                    <div class="ui-w-35"><input type="text" class="ui-w-100"/></div>
                    <div class="ui-w-15">電話號碼</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-20"><i radio class="radio-absolute"></i>DD送貨地址</div>
                    <div class="ui-w-35"><input type="text" class="ui-w-100"/></div>
                    <div class="ui-w-15">電話號碼</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-100"/></div>
                </div>
                <div class="common-list-layout">
                    <div class="ui-w-20"><i radio class="radio-absolute"></i>自定義地址</div>
                    <div class="ui-w-35">
                    	<div class="common-list-layout">
	                    	<input type="text" class="ui-w-49"/>
	                    	<input type="text" class="ui-w-49"/>
                    	</div>
                    	<input type="text" class="ui-w-100 common-margin-top"/>
                    	<input type="text" class="ui-w-100 common-margin-top"/>
                    </div>
                    <div class="ui-w-15">電話號碼</div>
                    <div class="flex-grow-1"><input type="text" class="ui-w-100"/></div>
                </div>

				<div class="common-list-layout">
                    <div class="ui-w-20">期望送貨日期</div>
                    <div class="ui-w-80">
                    	<input type="text" class="ui-w-41"/>
					</div>
                </div>
				<div class="common-list-layout align-center">
                    <div class="ui-w-20">備註</div>
                    <div class="flex-grow-1">
                    	<textarea></textarea>
					</div>
                </div>
            </div>            
        </scroll>
        <footer-buttons :buttons="buttons" @footerMenuEvent="footerMenuEvent"></footer-buttons>
    </section>
</template>
<script>
    import { mapGetters } from 'vuex';
    import FooterButtons from 'base/footerButtons';
    import Scroll from 'base/scroll';
    export default {
        computed: {
        },
        data () {
            return {
                buttons: [
                    {clickEvent: 'back'},
                    {text: '更改臨<br />時地址',clickEvent: 'order_address_update'}
                ]
            }
        } , 
        components : {
            Scroll,
            FooterButtons
        },
        methods : {
            order_address_update() {
                this.$pos_goPage('order_address_update')
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '../../common/style/variable.scss';
    @import '../../common/style/mixin.scss';
    .content-section{
        overflow: auto;
        @include font($color: $font-color-blue, $weight: bold);
        input{
            @include font($color: $font-color-common, $weight: initial);
        }
        .common-alt-bg2{
            > div {
                padding:.45rem;
            }
            .common-list-layout{
                align-items:baseline;
                > div {
                    padding-right: .8rem;
                    flex-shrink:0;
                }
                > div:first-child{
                    padding-left: 1.2rem;
                }
                > div:last-child{
                    padding-right: 0rem;
                }
                textarea{
					width: 100%;
					border: $border;
					height: 6rem;
                }
            }
            .align-center{
            	align-items: flex-start;
            }
        }
    }

</style>
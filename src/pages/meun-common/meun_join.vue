<template>
	<div class="content-section">
        <v-meunUserInfo></v-meunUserInfo>
        <div class="menuButList-warp">
			<div class="menuButList">
				<div class="but-column">
					<div class="but-warp">
						<router-link tag="div" class="main-but" to="/join_main">
							<span class="subMenu-font-style">加入</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" class="main-but" to="/member_to_distributor_main">
							<span class="subMenu-font-style">會員轉<br>直銷商</span>
						</router-link>
					</div>
					<!-- <div class="but-warp"><div class="main-but transparent"></div></div> -->
				</div>
			</div>
        </div>
	</div>
</template>
<script>
    import meunUserInfo from 'base/meunUserInfo'
    import {initViewMixin} from 'mixins/mixin' 
	export default {
		mixins: [initViewMixin],
        components:{
            'v-meunUserInfo' : meunUserInfo 
        }
	}
</script>
<style lang="scss" scoped>
	@import 'src/common/style/meun/meun_sub.scss';
</style>
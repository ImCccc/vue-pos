<template>
	<div class="content-section">
        <v-meunUserInfo></v-meunUserInfo>
        <div class="menuButList-warp">
			<div class="menuButList">
				<div class="but-column">
					<div class="but-warp">
						<router-link tag="div" class="main-but" to="/renew_main">
							<span class="subMenu-font-style">續約</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" class="main-but" to="/renewal_setting_main">
							<span class="subMenu-font-style">帶檔續約<br>同意設定</span>
						</router-link>
					</div>
				</div>
			</div>
        </div>
	</div>
</template>
<script>
    import meunUserInfo from 'base/meunUserInfo'
	export default {
        components:{
            'v-meunUserInfo' : meunUserInfo 
        }
	}
</script>
<style lang="scss" scoped>
	@import 'src/common/style/meun/meun_sub.scss';
</style>
<template>
	<div class="content-section">
        <v-meunUserInfo></v-meunUserInfo>
        <div class="menuButList-warp">
			<div class="menuButList">
				<div class="but-column">
					<div class="but-warp"> 
						<router-link tag="div" class="main-but" to="/order_main">
							<span class="subMenu-font-style">訂單輸入</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" class="main-but" to="/password_send_main">
							<span class="subMenu-font-style">訂貨密碼<br>驗證&amp;開卡</span>
						</router-link>
					</div>
				</div>
				<div class="but-column">
					<div class="but-warp"> 
						<router-link tag="div" class="main-but" to="/customer_invoice_main">
							<span class="subMenu-font-style">顧客發票</span>
						</router-link>
					</div>
					<div class="but-warp"><div class="main-but transparent"></div></div>
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
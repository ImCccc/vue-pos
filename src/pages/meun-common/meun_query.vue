<template>
	<div class="content-section">
        <v-meunUserInfo></v-meunUserInfo>
        <div class="menuButList-warp">
			<div class="menuButList">
				<div class="but-column">
					<div class="but-warp">
						<router-link tag="div" to="/query_main" class="main-but">
							<span class="subMenu-font-style">訂單查詢</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" to="/customer_query_main" class="main-but">
							<span class="subMenu-font-style">客戶查詢</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" to="/shopping_point_query_main" class="main-but">
							<span class="subMenu-font-style">購物積點<br>查詢</span>
						</router-link>
					</div>
				</div>
				<div class="but-column">
					<div class="but-warp">
						<router-link tag="div" to="/product_coupons_query_main" class="main-but">
							<span class="subMenu-font-style">產品抵用券<br>查詢</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" to="/sku_query_main" class="main-but">
							<span class="subMenu-font-style">SKU買量<br>查詢</span>
						</router-link>
					</div>
					<div class="but-warp">
						<router-link tag="div" to="" class="main-but gray">
							<span class="subMenu-font-style">庫存查詢</span>
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
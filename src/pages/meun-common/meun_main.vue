<template>
	<div class="content-section">
        <v-meunUserInfo></v-meunUserInfo>
		<div class="menuButList">
			<div class="but-column">
				<div class="but-warp">
					<router-link tag="div" to="/meun_join" class="main-but">
						<i class="sprite sprite-icon-add-white"></i>
						<span class="homeMenu-font-style">加入</span>
					</router-link>
				</div>
				<div class="but-warp">
					<router-link tag="div" to="/meun_order" class="main-but">
						<i class="sprite sprite-icon-order-white"></i>
						<span class="homeMenu-font-style">訂貨</span>
					</router-link>
				</div>
				<div class="but-warp">
					<router-link tag="div" to="/meun_renew" class="main-but">
						<i class="sprite sprite-icon-renew-white"></i>
						<span class="homeMenu-font-style">續約</span>
					</router-link>
				</div>
			</div>
			<div class="but-column">
				<div class="but-warp">
					<router-link tag="div" to="/meun_query" class="main-but">
						<i class="sprite sprite-icon-query-white"></i>
						<span class="homeMenu-font-style">查詢</span>
					</router-link>
				</div>
				<div class="but-warp">
					<router-link tag="div" to="" class="main-but but-color">
						<i class="sprite sprite-icon-query-white"></i>
						<span class="homeMenu-font-style">退貨</span>
					</router-link>
				</div>
				<div class="but-warp">
					<router-link tag="div" to="" class="main-but but-color">
						<i class="sprite sprite-icon-query-white"></i>
						<span class="homeMenu-font-style">維修</span>
					</router-link>
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
	@import 'src/common/style/sprite.scss';
	@import 'src/common/style/variable.scss';
	@import 'src/common/style/mixin.scss';
	.content-section{
		flex-direction: column;
		padding: 0 1rem;
		.sprite{
			@include spriteBackgroundImage($route: '../../common/images');
		}
		.menuButList{
			flex-grow: 1;
			width: 100%;
			overflow: auto;
			.but-column{
				@include flex($justify-content:center);
				width: 100%;
			}
			.but-warp{
				margin: 2rem 2rem 1rem 2rem;
				width: 11rem;
				height: 9rem;
				@include media((margin: 1rem 1rem 0rem 1rem, width: 11rem, height: 8rem));
				overflow: hidden;
				.main-but{
					position: relative;
					width: 100%;
					height: 100%;
					overflow: hidden ;
					background-color: rgb(14, 65, 121);
					border-radius: 0.6rem ;
					i{
						display: block;
						width: 100%;
						width: 4.4rem;
						margin: 0.8rem;
					}
					.homeMenu-font-style {
						position: absolute;
						bottom: 1rem;
						right: 1rem;
						color: $white;
						font-size: 1.8rem;
					}
				}
				.but-color {
					background-color: #bfbfbf;
				}
			}
		}     
	}
</style>
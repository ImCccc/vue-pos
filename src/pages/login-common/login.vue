<template>
	<login-warrp @click.stop @login="login" :buttons="buttons" :title="title">
		<div class="row">
			<span class="span-left">地區代碼&nbsp:</span>
			<input v-model="regionCode" type="tel" readonly="readonly" />
		</div>
		<div class="row">
			<span class="span-left">中心編號&nbsp:</span>
			<input ref="shopCode" v-model="shopCode" type="tel"/>
		</div>
		<div class="row">
			<span class="span-left">員工編號&nbsp:</span>
			<input ref="staffNumber" v-model="staffNumber" type="text"/>
		</div>								
	</login-warrp>
</template>
<script>
    import LoginWarrp from 'base/loginWarrp'
    import {mapMutations} from 'vuex'
	export default {
		data () {
			return {
				shopCode : "" , 
				staffNumber : "" ,
				regionCode : "130"
			}
		} , 
		created() {
			this.title = '登錄'
			this.buttons = [{
                text: '登錄',
                click: 'login'
            }]
		},
        activated () {
        	this.shopCode = '01'
        	this.regionCode = '130'
        	this.staffNumber = 'test078'
        	this.$refs.shopCode.focus()
        }, 
		methods : {
			...mapMutations({
				update_user_info: 'UPDATE_USER_INFO'
			}),
            login() { 
				var vm = this
				if ( this.$check_inputIsNull('shopCode' , '請輸入中心編號' , 'shopCode') ) return 
				if ( this.$check_inputIsNull('staffNumber' , '請輸入員工編號' , 'staffNumber') ) return 
				this.$es6_post('checkCenterStatus',{
					shopCode : this.shopCode,
					staffNumber : this.staffNumber
				}).then((resp) => {
					this.update_user_info({
				        staffNumber: resp.staffNumber,
				        posCode: resp.posCode,
				        shopCode: resp.shopCode,
				        shopName: resp.shopName,
				        saleDate: resp.saleDate,
				        staffName: resp.staffName 
					})
					var gopage_router
					switch( +resp.loginReturnFlag ){
						case 0 : gopage_router = 'login' 
						 	break
						case 1 : gopage_router = 'login_pos' 
						 	break
						case 2 : gopage_router = 'login_pos_open' 
						 	break
						case 3 : gopage_router = 'login_center_open' 
						 	break
					}
					this.$pos_goPage(gopage_router)
				})
			}
		},
		components: {
			LoginWarrp
		}
	}
</script>
<style lang="scss" scoped>
	@import 'src/common/style/login/login.scss';
</style>
<template>
	<login-warrp @_login="_login" @back="back" :buttons="buttons" :title="title">
		<div class="row">
			<span class='span-left'>店鋪名稱&nbsp:</span>
			<span class='span-right' v-text="userInfo.shopName" ></span>
		</div>
		<div class="row">
			<span class='span-left'>POS編號&nbsp:</span>
			<input type="text" v-model="posCode" readonly/>
		</div>
		<div class="row">
			<span class='span-left'>員工編號&nbsp:</span>
			<input type="text" v-model="staffNumber" readonly/>
		</div>	
		<div class="row">
			<span class='span-left'>營業日期&nbsp:</span>
			<input type="text" v-model="saleDate" readonly/>
		</div>
		<div class="row">
			<span class='span-left'>密碼&nbsp:</span>
			<input ref="password" v-model="password" type="password"/>
		</div>
	</login-warrp>
</template>
<script>
    import LoginWarrp from 'base/loginWarrp'
    import {mapMutations} from 'vuex'
	export default {
		data() {
			return {
				title: 'POS登錄',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '登錄', click: '_login'}
				],
				shopName:'',
				posCode:'',
				staffNumber:'',
				saleDate:'',
				password:''
			}
		} , 
        activated () {
			this.$nextTick( () => {
				this.shopName = this.userInfo.shopName  
				this.posCode = this.userInfo.posCode  
				this.staffNumber = this.userInfo.staffNumber  
				this.saleDate = this.userInfo.saleDate  
				this.password=''
				this.$refs.password.focus()
			})  
        }, 
		methods : {
			// 在这里，请不要用login命名方法，如果这样做，会自动执行，
			// 因为全局的mixin里面有个判断，如果页面上方法的名字是以上一个路由命名，那么自动执行
            _login () { 
            	if ( this.$check_inputIsNull('password' , '密碼不能為空', 'password') ) return  
            	this.$es6_post('logonPOS',{
					shopName:this.shopName,
					posCode:this.posCode,
					staffNumber:this.staffNumber,
					saleDate:this.saleDate,
					password:this.password
            	}).then((resp) => {
					this.$pos_goPage('meun_main')
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
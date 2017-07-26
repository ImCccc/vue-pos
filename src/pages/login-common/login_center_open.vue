<template>
	<login-warrp @loginCenter="loginCenter" @back="back" :buttons="buttons" :title="title">
		<div class="row center">
			<span id="shopName">05台北體驗中心</span>
		</div>
		<div class="row">
			<span class='span-left'>系統日期&nbsp:</span>
			<input type="text" v-model="systemDate" readonly/>
		</div>
		<div class="row">
			<span class='span-left'>銷售日期&nbsp:</span>
			<input type="text" v-model="saleDate" />
		</div>
		<div class="row">
			<span class='span-left'>員工編號&nbsp:</span>
			<input type="text" v-model="staffNumber" readonly/>
		</div>	
		<div class="row">
			<span class='span-left'>員工姓名&nbsp:</span>
			<input type="text" v-model="staffName" readonly/>
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
		data () {
			return {
				title: '中心開業',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '繼續', click: 'loginCenter'}
				],
				staffName:'',
				shopName:'',
				staffNumber:'',
				saleDate:'',
				password:''
			} 
		} , 
	    activated () {
			this.$nextTick(() => {
				this.password=''
				this.$refs.password.focus()
			}) 
        } , 
        created:function(){ 
			this.shopName = this.userInfo.shopName  
			this.staffNumber = this.userInfo.staffNumber  
			this.saleDate = this.userInfo.saleDate  
			this.staffName = this.userInfo.staffName  
        },
		methods : {
            loginCenter() { 
            	if ( this.$check_inputIsNull('password' , '密碼不能為空', 'password') ) return  
            	this.$es6_post('centerLogin').then((resp) => {
					this.$pos_goPage('login_pos_open')
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
	.center{
		text-align: center;
	}
</style>
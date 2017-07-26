<template>
	<login-warrp @posOpen="posOpen" @centerOut="centerOut" @back="back" :buttons="buttons" :title="title">
		<div class="row">
			<span class='span-left'>店鋪名稱&nbsp:</span>
			<span class='span-right' v-text="userInfo.shopName" ></span>
		</div>
		<div class="row">
			<span class='span-left'>POS編號&nbsp:</span>
			<input type="text" ref="posCode" v-model="posCode"/>
		</div>
		<div class="row">
			<span class='span-left'>營業日期&nbsp:</span>
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
    import {mapMutations} from 'vuex'
    import LoginWarrp from 'base/loginWarrp'
	export default {
		data () {
			return {
				title: 'POS開業',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '開業', click: 'posOpen'}, 
					{text: '中心結業', click: 'centerOut'}
				],
				staffName:'',
				shopName:'',
				posCode:'',
				staffNumber:'',
				saleDate:'',
				password:''
			}
		} , 
        created:function(){
			this.shopName = this.userInfo.shopName  
			this.staffNumber = this.userInfo.staffNumber  
			this.saleDate = this.userInfo.saleDate  
			this.staffName = this.userInfo.staffName  
        },
	    activated () {
			this.$nextTick(() => {
				this.password=''
				this.$refs.posCode.focus()
			} )  
        } , 
		methods : {
			...mapMutations({
				update_user_info: 'UPDATE_USER_INFO'
			}),
            posOpen() { 
            	if (this.$check_inputIsNull('posCode' , 'POS編號', 'posCode')) return  
            	if (this.$check_inputIsNull('password' , '密碼不能為空', 'password')) return  
            	this.$es6_post('login' , {
            		password: this.password 
            	}).then((resp) => {
					this.update_user_info({
				        posCode: resp.posCode
					})
					this.$pos_goPage('meun_main')
            	})
			}, 
			centerOut() {
				this.$pos_goPage('login_graduation_center')
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
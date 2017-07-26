<template>
	<login-warrp @login="login" @back="back" :buttons="buttons" :title="title">
		<div class="row">
			<span class="span-left">地區代碼&nbsp:</span>
			<input v-model="regionCode" type="tel" readonly="readonly" />
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
				title: '暫時離開',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '登錄', click: 'login'}
				],
				regionCode:'',
				posCode:'',
				staffNumber:'',
				password:''
			}
		} , 
        activated () {
			this.$nextTick( () => {
				this.password=''
				this.$refs.password.focus()
			} )  
        } , 
        created:function(){
			this.regionCode = this.userInfo.regionCode  
			this.posCode = this.userInfo.posCode  
			this.staffNumber = this.userInfo.staffNumber  
        },
		methods : {
            login () { 
            	if ( this.$check_inputIsNull('password' , '密碼不能為空', 'password') ) return  
            	this.$es6_post('logonPOS',{
					staffNumber:this.staffNumber,
					password:this.password
            	}).then( ( resp ) => {
					this.$pos_goPage('meun_main')
				}).catch(function(res){})
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
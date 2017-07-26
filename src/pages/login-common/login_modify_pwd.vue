<template>
	<login-warrp @modify="modify" @back="back" :buttons="buttons" :title="title">
		<div class="row">
			<span class='span-left'>舊密碼&nbsp:</span>
			<input ref="password" v-model="password" type="password"/>
		</div>
		<div class="row">
			<span class='span-left'>新密碼&nbsp:</span>
			<input ref="newPassword" v-model="newPassword" type="password"/>
		</div>
		<div class="row">
			<span class='span-left'>確認密碼&nbsp:</span>
			<input ref="confirmPassword" v-model="confirmPassword" type="password"/>
		</div>
	</login-warrp>
</template>
<script>
    import LoginWarrp from 'base/loginWarrp'
	export default {
		data () {
			return {
				title: '修改密碼',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '修改', click: 'modify'}
				],
				shopName:'',
				posCode:'',
				staffNumber:'',
				saleDate:'',
				password:'',
				confirmPassword:'',
				newPassword:''
			}
		} , 
		activated () {
			this.$nextTick( () => {
				this.password = ''
				this.newPassword = ''
				this.confirmPassword = ''
				this.$refs.password.focus()
			} )  
        } , 
		methods : {
            modify () { 
        		var password = this.password
        		var newPassword = this.newPassword
        		var confirmPassword = this.confirmPassword
            	if ( this.$check_inputIsNull('password' , '密碼不能為空', 'password') ) {
            		return false
            	}
            	if ( this.$check_inputIsNull('newPassword' , '新密碼不能為空', 'newPassword') ) {
            		return false
            	}
            	if ( this.$check_inputIsNull('confirmPassword' , '確認密碼不能為空', 'confirmPassword') ) {
            		return false
            	}
				if( newPassword.length < 6 || newPassword.length > 16 ) {
					this.UPDATE_PROMPT({ msg : '新密碼長度必須是6到16位！' }) 
					return false
				}
				if( password === newPassword ){
					this.UPDATE_PROMPT({ msg : '新密碼與舊密碼不同。請重新輸入！' }) 
					return false
				}
				if( newPassword != confirmPassword ){				
					this.UPDATE_PROMPT({ msg : '新密碼與確認密碼不同。請重新輸入！' }) 
					return false
				}
				if( newPassword.search(/[a-zA-Z]/) === -1 ){
					this.UPDATE_PROMPT({ msg : '密碼必須至少包含(1)位字母' }) 
					return false
				}
            	this.$es6_post('doChangePassword',{
            		password : password , 
					confirmPassword : confirmPassword ,
					newPassword : newPassword
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
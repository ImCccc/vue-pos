<template>
	<login-warrp @graduation="graduation" @back="back" :buttons="buttons" :title="title">
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
	import LoginWarrp from 'base/loginWarrp';
	export default {
		data () {
			return {
				title: 'POS結業',
				buttons: [
					{text: '返回', click: 'back'}, 
					{text: '結業', click: 'graduation'}
				],
				staffNumber:'',
				password:''
			}
		} , 
        activated () {
			this.$nextTick( () => {
				this.password='';
				this.staffNumber = this.userInfo.staffNumber ; 
				this.$refs.password.focus();
			} ) ; 
        } , 
		methods : {
            graduation () { 
				if ( this.$check_inputIsNull('password' , '密碼不能為空', 'password') ) return ; 
				this.$es6_post( 'logOutPOS' ).then( (resp) => {
					this.$pos_goPage(resp.posclose == 'ToCenterClose' ? 'login_graduation_center' : 'login');
				}); 
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


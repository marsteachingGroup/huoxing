<template>
  <div class="config">

  	<div class="config-header">
			<img class="config-header_img" src="../assets/images/logo.png" alt="">
			<div class="config-header_word">HUO XING SHI JIAN</div>
		</div>

		<div class="config-content">

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/1.png" alt="">
				</div>
				<span class="config-content_word">参赛身份</span>
				<div class="config-content_radio">
					<label class="config-content_label">
						<div class="config-content_input">
							<span class="config-content_inner" :class="{'config-content_active': role_type === '2'}"></span>
							<span>队长</span>
						</div>
						<input v-model="role_type" type="radio" value="2"/>
					</label> 
					<label class="config-content_label">
						<div class="config-content_input">
						  <span class="config-content_inner" :class="{'config-content_active': role_type === '1'}"></span>
						  <span>队员</span>
						</div>
						<input v-model="role_type" type="radio" value="1" />
					</label> 
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/2.png" alt="">
				</div>
				<span class="config-content_word">个人手机</span>
				<div class="config-content_content">
					<input v-model="phone" maxlength="13" type="number" class="config-content_text">
				</div>
			</div>

			<!-- <div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/3.png" alt="">
				</div>
				<span class="config-content_word">验证码</span>
				<div class="config-content_content">
					<input v-model="code" maxlength="6" type="text" class="config-content_text" style="width: 77px;">
				</div>
				<span class="config-content_qrcode" @click="handleCode" v-if="timeBol">获取验证码</span>
				<span class="config-content_qrcode" v-else>{{time}}秒后再获取</span>
			</div> -->

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/4.png" alt="">
				</div>
				<span class="config-content_word">常用邮箱</span>
				<div class="config-content_content">
					<input v-model="email" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_button"><div @click="handleNext" class="home-button" >下一步</div></div>
		</div>

		<div class="config-content_step">
		  <div class="config-content_circular config-content_current"></div>
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular"></div>
		</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_FORM } from '../store/mutation-types'
export default {
	name: 'basic',
	data () {
	  return {
			role_type: '',
			phone: '',
			code: '',
			email: '',
			time: 60,
			timeBol: true
	  }
	},
	created () {
		if (!this.loaded) {
			this.$router.push('/')
		} else {
			this.role_type = this.form.role_type
			this.phone = this.form.phone
			this.code = this.form.code
			this.email = this.form.email
		}
	},
	methods: {
		...mapActions({
			updateForm: UPDATE_FORM
		}),
		handleNext () {
			if (this.role_type === '') {
				alert('请选择参赛身份')
			} else if (this.phone === '') {
				alert('请填写个人手机')
			} else if (this.email === '') {
				alert('请填写个人邮箱')
			} else {
				this.updateForm({
					key: 'role_type',
					value: this.role_type
				})
				this.updateForm({
					key: 'phone',
					value: this.phone
				})
				this.updateForm({
					key: 'code',
					value: this.code
				})
				this.updateForm({
					key: 'email',
					value: this.email
				})
				this.$router.push('/school')
			}
		},
		handleCode () {
			alert('验证码已发送，请注意查收')
			this.timeBol = false
			this.handleTime()
		},
		handleTime () {
			setTimeout(() => {
				if (!this.timeBol && this.time > 1) {
					this.time--
					this.handleTime()
				} else {
					this.timeBol = true
					this.time = 60
				}
			}, 1000)
		}
	},
	computed: {
		...mapGetters([
			'loaded',
			'form'
		])
	}
}
</script>
<style lang="scss">
@import '../assets/css/configure.scss';
</style>

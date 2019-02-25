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
			
			<div class="config-content_item jfk-flex" v-if="role_type === '2'">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/12.png" alt="">
				</div>
				<span class="config-content_word">团队名称</span>
				<div class="config-content_content">
					<input v-model="team_name" maxlength="20" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex" v-if="role_type === '1'">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/12.png" alt="">
				</div>
				<span class="config-content_word">团队编号</span>
				<div class="config-content_content">
					<input v-model="team_no" maxlength="13" type="text" class="config-content_text">
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

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/3.png" alt="">
				</div>
				<span class="config-content_word">验证码</span>
				<div class="config-content_content">
					<input v-model="sms" maxlength="6" type="text" class="config-content_text" style="width: 77px;">
				</div>
				<span class="config-content_qrcode" @click="handleCode" v-if="timeBol">获取验证码</span>
				<span class="config-content_qrcode" v-else>{{time}}秒后再获取</span>
			</div>

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

		<Loading v-if="Loading"></Loading>
  </div>
</template>

<script>
import Loading from '../components/loading'
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_FORM } from '../store/mutation-types'
import axios from 'axios'
const regEmail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
const regPhone = /^1[23456789]\d{9}$/
export default {
	name: 'basic',
	components: {
		Loading
	},
	data () {
	  return {
			role_type: '',
			phone: '',
			sms: '',
			email: '',
			time: 60,
			timeBol: true,
			team_name: '',
			team_no: '',
			Loading: false
	  }
	},
	created () {
		if (!this.loaded) {
			this.$router.push('/')
		} else {
			this.role_type = this.form.role_type
			this.phone = this.form.phone
			this.sms = this.form.sms
			this.email = this.form.email
			this.team_name = this.form.team_name
			this.team_no = this.form.team_no
		}
	},
	methods: {
		...mapActions({
			updateForm: UPDATE_FORM
		}),
		handleNext () {
			if (this.role_type === '') {
				alert('请选择参赛身份')
			} else if (this.team_name === '' && this.role_type === '2') {
				alert('请输入团队名称')
			} else if (this.team_no === '' && this.role_type === '1') {
				alert('请输入团队编码')
			} else if (this.phone === '') {
				alert('请填写个人手机')
			} else if (!regPhone.test(this.phone)) {
				alert('请输入正确的手机号码')
			} else if (this.email === '') {
				alert('请填写个人邮箱')
			} else if (!regEmail.test(this.email)) {
				alert('请输入正确的邮箱地址')
			} else if (this.sms === '') {
				alert('请输入验证码')
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
					key: 'sms',
					value: this.sms
				})
				this.updateForm({
					key: 'email',
					value: this.email
				})
				this.updateForm({
					key: 'team_name',
					value: this.team_name
				})
				this.updateForm({
					key: 'team_no',
					value: this.team_no
				})
				this.$router.push('/school')
			}
		},
		handleCode () {
			if (this.phone === '') {
				alert('请填写个人手机')
			} else if (!regPhone.test(this.phone)) {
				alert('请输入正确的手机号码')
			} else {
				this.Loading = true
				let arg = {
					scid: this.aid,
					phone: this.phone
				}
				axios.post('/api/activity/message/send', arg).then((response) => {
					this.Loading = false
					if (response.data.code === 0) {
						alert(response.data.msg)
					} else {
						alert('验证码已发送，请注意查收')
						this.timeBol = false
						this.handleTime()
					}
				})
			}
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
			'form',
			'aid'
		])
	}
}
</script>
<style lang="scss">
@import '../assets/css/configure.scss';
</style>

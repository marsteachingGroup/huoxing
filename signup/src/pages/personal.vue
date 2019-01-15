<template>
  <div class="config">

  	<div class="config-header">
			<img class="config-header_img" src="../assets/images/logo.png" alt="">
			<div class="config-header_word">HUO XING SHI JIAN</div>
		</div>

		<div class="config-content" style="padding-top: 0;padding-bottom: 44px;">
			
			<img class="config-content_head" src="../assets/images/head.png" alt="">
			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/10.png" alt="">
				</div>
				<span class="config-content_word">姓名</span>
				<div class="config-content_content">
					<input v-model="name" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/11.png" alt="">
				</div>
				<span class="config-content_word">性别</span>
				<div class="config-content_radio">
					<label class="config-content_label">
						<div class="config-content_input">
							<span class="config-content_inner" :class="{'config-content_active': sex === '1'}"></span>
						</div>
						<input v-model="sex" type="radio" value="1"/><span>男</span>
					</label> 
					<label class="config-content_label">
						<div class="config-content_input">
						  <span class="config-content_inner" :class="{'config-content_active': sex === '2'}"></span>
						</div>
						<input v-model="sex" type="radio" value="2" /><span>女</span>
					</label> 
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/12.png" alt="">
				</div>
				<span class="config-content_word">身份证号</span>
				<div class="config-content_content">
					<input v-model="identify_number" maxlength="18" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/13.png" alt="">
				</div>
				<span class="config-content_word">血型(选填)</span>
				<div class="config-content_content">
					<select v-model="blood_type" class="config-content_text">                                        
						<option v-for="(value, key) in info.blood_type" :value="value">{{value}}</option>             
					</select>
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/14.png" alt="">
				</div>
				<span class="config-content_word">籍贯</span>
				<div class="config-content_content">
					<input v-model="native_place" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_button"><div @click="handleNext" class="home-button">提交</div></div>
		</div>

		<div class="config-content_step">
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular config-content_current"></div>
		  <div class="config-content_circular"></div>
		</div>
		<Loading v-if="Loading"></Loading>
  </div>
</template>

<script>
import Loading from '../components/loading'
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_FORM, UPDATE_KEY } from '../store/mutation-types'
import axios from 'axios'
export default {
	name: 'personal',
	components: {
		Loading
	},
	data () {
	  return {
			name: '',
			sex: '',
			identify_number: '',
			blood_type: '',
			native_place: '',
			Loading: false
	  }
	},
	created () {
		if (!this.loaded) {
			this.$router.push('/')
		} else {
			this.name = this.form.name
			this.sex = this.form.sex
			this.identify_number = this.form.identify_number
			this.blood_type = this.form.blood_type
			this.native_place = this.form.native_place
		}
	},
	methods: {
		...mapActions({
			updateKey: UPDATE_KEY,
			updateForm: UPDATE_FORM,
			postData: 'postData'
		}),
		handleNext () {
			if (this.name === '') {
				alert('请填写姓名')
			} else if (this.sex === '') {
				alert('请选择性别')
			} else if (this.major === '') {
				alert('请填写身份证号')
			} else if (this.native_place === '') {
				alert('请填写籍贯')
			} else {
				this.updateForm({
					key: 'name',
					value: this.name
				})
				this.updateForm({
					key: 'sex',
					value: this.sex
				})
				this.updateForm({
					key: 'identify_number',
					value: this.identify_number
				})
				this.updateForm({
					key: 'blood_type',
					value: this.blood_type
				})
				this.updateForm({
					key: 'native_place',
					value: this.native_place
				})
				this.postData()
			}
		},
		postData () {
			this.Loading = true
			let arg = this.form
			arg['school_id'] = arg['school'].school_id
			arg['school_name'] = arg['school'].school_name
			axios.post('/api/activity/index/post', arg).then((response) => {
				this.Loading = false
				const data = response.data.data
				const code = response.data.code
				if (code === 0) {
					alert(response.data.msg)
				} else {
					this.updateKey({
						key: 'loaded',
						value: false
					})
					// 清空表单
					this.updateKey({
						key: 'form',
						value: {
							member: '',
							phone: '',
							code: '',
							email: '',
							school: '',
							college: '',
							major: '',
							degree_type: '',
							entrance_date: '',
							name: '',
							sex: '',
							identify_number: '',
							blood_type: '',
							native_place: ''
						}
					})
					this.$router.push('/success')
				}
			})
		}
	},
	computed: {
		...mapGetters([
			'loaded',
			'form',
			'info'
		])
	}
}
</script>
<style lang="scss">
@import '../assets/css/configure.scss';
</style>

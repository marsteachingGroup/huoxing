<template>
  <div class="config">

  	<div class="config-header">
			<img class="config-header_img" src="../assets/images/logo.png" alt="">
			<div class="config-header_word">HUO XING SHI JIAN</div>
		</div>

		<div class="config-content" style="padding-top: 0;padding-bottom: 44px;">


			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/5.png" alt="">
				</div>
				<span class="config-content_word">学校名称</span>
				<div class="config-content_content">
					<select v-model="school" class="config-content_text" @change="school_zone = ''">  
						<option value="" disabled style="display: none;"></option>                                       
						<option v-for="(value, key) in info.school" :value="value">{{value.school_name}}</option>             
					</select>
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/5.png" alt="">
				</div>
				<span class="config-content_word">校区名称</span>
				<div class="config-content_content">
					<select v-model="school_zone" class="config-content_text">  
						<option value="" disabled style="display: none;"></option>                                       
						<option v-for="(value, key) in school.school_zone" :value="value">{{value}}</option>             
					</select>
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>


			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/6.png" alt="">
				</div>
				<span class="config-content_word">院系名称</span>
				<div class="config-content_content">
					<input v-model="college" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/7.png" alt="">
				</div>
				<span class="config-content_word">专业名称</span>
				<div class="config-content_content">
					<input v-model="major" type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/8.png" alt="">
				</div>
				<span class="config-content_word">毕业学历</span>
				<div class="config-content_content">
					<select v-model="degree_type" class="config-content_text">   
						<option value="" disabled style="display: none;"></option>                                           
						<option v-for="(value, key) in info.degree_type" :value="value.type_id">{{value.name}}</option>             
					</select>
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/9.png" alt="">
				</div>
				<span class="config-content_word">入学年月</span>
				<div class="config-content_content">
					<input type="month" v-model="entrance_date" class="config-content_text" style="height: 13px;margin-top: 4px;">
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_button"><div @click="handleNext" class="home-button">下一步</div></div>
		</div>

		<div class="config-content_step">
		  <div class="config-content_circular" @click="handleBasic"></div>
		  <div class="config-content_circular config-content_current"></div>
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
			school: '',
			college: '',
			major: '',
			degree_type: '',
			entrance_date: '',
			school_zone: ''
	  }
	},
	created () {
		if (!this.loaded) {
			this.$router.push('/')
		} else {
			this.school = this.form.school
			this.college = this.form.college
			this.major = this.form.major
			this.degree_type = this.form.degree_type
			this.entrance_date = this.form.entrance_date
			this.school_zone = this.form.school_zone
		}
	},
	methods: {
		...mapActions({
			updateForm: UPDATE_FORM
		}),
		handleNext () {
			let time = this.entrance_date.split('-')
			let myDate = new Date()
			if (this.school === '') {
				alert('请选择学校名称')
			} else if (this.school_zone === '') {
				alert('请选择校区名称')
			} else if (this.college === '') {
				alert('请填写院系名称')
			} else if (this.major === '') {
				alert('请填写专业名称')
			} else if (this.degree_type === '') {
				alert('请选择毕业学历')
			} else if (this.entrance_date === '') {
				alert('请选择入学年月')
			} else if ((Number(myDate.getFullYear()) - Number(time[0])) > 5) {
				alert('入学日期必须5年内')
			} else {
				this.updateForm({
					key: 'school',
					value: this.school
				})
				this.updateForm({
					key: 'school_zone',
					value: this.school_zone
				})
				this.updateForm({
					key: 'college',
					value: this.college
				})
				this.updateForm({
					key: 'major',
					value: this.major
				})
				this.updateForm({
					key: 'degree_type',
					value: this.degree_type
				})
				this.updateForm({
					key: 'entrance_date',
					value: this.entrance_date
				})
				this.$router.push('/personal')
			}
		},
		handleBasic () {
			this.$router.push('/basic')
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

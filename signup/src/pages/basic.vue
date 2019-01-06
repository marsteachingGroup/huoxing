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
							<span class="config-content_inner" :class="{'config-content_active': member === '1'}"></span>
						</div>
						<input v-model="member" type="radio" value="1"/><span>队长</span>
					</label> 
					<label class="config-content_label">
						<div class="config-content_input">
						  <span class="config-content_inner" :class="{'config-content_active': member === '2'}"></span>
						</div>
						<input v-model="member" type="radio" value="2" /><span>队员</span>
					</label> 
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/2.png" alt="">
				</div>
				<span class="config-content_word">个人手机</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/3.png" alt="">
				</div>
				<span class="config-content_word">验证码</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text" style="width: 77px;">
				</div>
				<span class="config-content_qrcode">获取验证码</span>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/4.png" alt="">
				</div>
				<span class="config-content_word">常用邮箱</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_button"><a class="home-button" href="#/school">下一步</a></div>
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
export default {
	data () {
	  return {
		member: '1'
	  }
	}
}
</script>
<style lang="scss">
@import '../assets/css/configure.scss';
</style>

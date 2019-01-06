<template>
  <div class="config">

  	<div class="config-header">
			<img class="config-header_img" src="../assets/images/logo.png" alt="">
			<div class="config-header_word">HUO XING SHI JIAN</div>
		</div>

		<div class="config-content" style="padding-top: 0;padding-bottom: 44px;">
			

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/10.png" alt="">
				</div>
				<span class="config-content_word">姓名</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text">
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
					<input type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/13.png" alt="">
				</div>
				<span class="config-content_word">血型(选填)</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/14.png" alt="">
				</div>
				<span class="config-content_word">籍贯</span>
				<div class="config-content_content">
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_button"><a class="home-button" href="#/success">提交</a></div>
		</div>

		<div class="config-content_step">
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular config-content_current"></div>
		  <div class="config-content_circular"></div>
		</div>
  </div>
</template>

<script>
export default {
	data () {
	  return {
		  sex: ''
	  }
	}
}
</script>
<style lang="scss">
@import '../assets/css/configure.scss';
</style>

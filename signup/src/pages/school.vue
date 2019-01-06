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
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>


			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/6.png" alt="">
				</div>
				<span class="config-content_word">院系名称</span>
				<div class="config-content_content">
					
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/7.png" alt="">
				</div>
				<span class="config-content_word">专业名称</span>
				<div class="config-content_content">
					<input type="text" class="config-content_text">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/8.png" alt="">
				</div>
				<span class="config-content_word">毕业学历</span>
				<div class="config-content_content">
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_item jfk-flex">
				<div class="config-content_left">
				  <img class="config-content_icon" src="../assets/images/icon/9.png" alt="">
				</div>
				<span class="config-content_word">入学年月</span>
				<div class="config-content_content">
					<img class="config-content_right" src="../assets/images/icon/right.png" alt="">
				</div>
			</div>

			<div class="config-content_button"><a class="home-button" href="#/personal">下一步</a></div>
		</div>

		<div class="config-content_step">
		  <div class="config-content_circular"></div>
		  <div class="config-content_circular config-content_current"></div>
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

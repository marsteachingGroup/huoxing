<template>
  <div class="home">
  	<div class="home-header">
	  <img class="home-header_img" src="../assets/images/logo.png" alt="">
	  <div class="home-header_word">HUO XING SHI JIAN</div>
	</div>
	<div class="home-content">
			<p>恭喜您报名成功！</p>
		  <p>预祝取得好成绩！</p>
	</div>

  </div>
</template>

<script>
export default {
}
</script>
<style lang="scss" scoped>
.home{
	height: 100vh;
  background-color: #a41616;
}
.home{
  .home-header{
	text-align: center;
	padding-top: 100px;
	&_img{
	  height: 112.5px;
	  width: 112.5px;
	}
	&_word{
	  font-size: 14px;
	  color: #ffffff;
	  margin-top: 15px;
	}
  }
  &-content{
		margin-top: 260px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		font-weight: bold;
  }
}
</style>

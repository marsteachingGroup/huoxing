<template>
  <div class="home">
  	<div class="home-header">
	  <img class="home-header_img" src="../assets/images/logo.png" alt="">
	  <div class="home-header_word">HUO XING SHI JIAN</div>
	</div>
	<a class="home-button" href="#/basic">报名</a>
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
  &-button{
		width: 170px;
		height: 38px;
		line-height: 38px;
		border-radius: 20px;
		margin: 260px auto 0 auto;
		text-align: center;
		color: #fff;
		background-color: #ff0101;
		font-size: 16px;
		display: block;
		text-decoration: none;
  }
}
</style>

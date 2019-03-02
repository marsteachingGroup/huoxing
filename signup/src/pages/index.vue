<template>
  <div class="home">
  	<div class="home-header">
	  <img class="home-header_img" src="../assets/images/logo.png" alt="">
	  <div class="home-header_word">HUO XING SHI JIAN</div>
	</div>
		<input 
		v-if="inputBol" 
		v-model="ano" 
		class="home-input"
		placeholder="请输入比赛编号" type="text">
		<div :class="{'home-input_aid': !inputBol}" class="home-button" @click="handleStart">报名</div>
		<Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Loading from '../components/loading'
import { mapGetters, mapActions } from 'vuex'
import { UPDATE_KEY } from '../store/mutation-types'
import { formatUrlParams } from '@/utils/utils'
export default {
	name: 'index',
	components: {
		Loading
	},
	data () {
		return {
			inputBol: false,
			id: '',
			ano: ''
		}
	},
	created () {
		this.updateKey({
			key: 'loaded',
			value: false
		})
		this.updateKey({
			key: 'aid',
			value: ''
		})
		let params = formatUrlParams(location.search)
    	if (!params.ano || params.ano === '') {
			this.inputBol = true
		} else {
			this.id = params.ano
			this.updateKey({
				key: 'aid',
				value: params.ano
			})
		}
	},
	methods: {
		...mapActions({
			updateKey: UPDATE_KEY,
			getData: 'getData'
		}),
		handleStart () {
			if (this.id !== '') {
				this.getData()
			} else if (this.ano === '') {
				alert('请输入比赛id')
			} else {
				this.updateKey({
					key: 'aid',
					value: this.ano
				})
				this.getData()
			}
		}
	},
	computed: {
		...mapGetters([
			'loaded',
			'info',
			'aid',
			'loading'
		])
	},
	watch: {
		loaded (val) {
			if (val) {
				this.Loading = false
				this.$router.push('/basic')
			}
		}
	}
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
		margin: 30px auto 0 auto;
		text-align: center;
		color: #fff;
		background-color: #ff0101;
		font-size: 16px;
		display: block;
		text-decoration: none;
	}
	&-input{
		background-color: white;
		border-radius: 4px;
		display: block;
		margin: 100px auto 0 auto;
		padding: 5px 0;
		font-size: 14px;
		width: 160px;
		padding-left: 10px;
		color: #333333;
		&_aid{
			margin-top: 260px;
		}
	}
}
</style>

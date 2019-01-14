<template>
<div class="wrapper">
	 <Start v-if="step === 0"></Start>
	 <!-- <Basic></Basic>
	 <School></School>
	 <Personal></Personal>
	 <Success></Success> -->
</div>
</template>

<script>
import Start from './start'
import Basic from './basic'
import School from './school'
import Personal from './personal'
import Success from './success'
import { mapState } from 'vuex'
export default {
	components: {
		Start,
		Basic,
		School,
		Personal,
		Success
	},
	data () {
		return {
		}
	},
	computed: {
		...mapState([
			'step'
		])
	}
}
</script>
<style lang="scss" scoped>
</style>

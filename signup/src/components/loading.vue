<template>
	<div class="mask">
		<div class="loader loader4">
			<div>
				<div>
				<div>
					<div>
					<div>
						<div>
						<div>
							<div>
							<div>
								<div></div>
							</div>
							</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.mask{
	position: fixed;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    z-index: 100;
    padding-top: 50%;
}
.loader * {
  box-sizing: border-box;
}
@keyframes rotate2 {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    -webkit-transform: rotate(180deg);
            transform: rotate(180deg);
    border-top-color: #ff0101;
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
    border-top-color: #ff0101;
  }
}
	.loader {
	position: relative;
	margin: 75px auto;
	width: 80px;
	height: 80px;
	display: block;
	overflow: hidden;
	}
	.loader div {
	height: 100%;
	}
	.loader4, .loader4 div {
	border-radius: 50%;
	padding: 8px;
	border: 2px solid transparent;
	-webkit-animation: rotate linear 3.5s infinite;
			animation: rotate linear 3.5s infinite;
	border-radius: 50%;
	padding: 4px;
	-webkit-animation: rotate2 4s infinite linear;
			animation: rotate2 4s infinite linear;
}
</style>

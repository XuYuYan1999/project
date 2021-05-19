<template>
	<div class="headerWrap">
		<van-row>
			<!-- 搜索框 -->
			<van-col span="20">
				<van-search 
					v-model="value" 
					shape="round" 
					background="#d43d3d" 
					placeholder="请输入搜索关键词" />
			</van-col>
			<!-- 右侧按钮 -->
			<van-col span="4">
				<van-button 
					class='putBtnSty' 
					round type="info">+
					<i>发布</i>
				</van-button>
			</van-col>
		</van-row>

	</div>
</template>

<script>
	export default {
		name: "headerWrap",
		data() {
			return {
				msg: '今日头条头部',
				value: ''
			}
		},
	};
</script>

<style scoped lang="scss">
	.headerWrap {
		width: 100%;
		background: #d43d3d;
	}

	.putBtnSty {
		width: .6rem;
		height: .6rem;
		font-size: .6rem;
		background: #fff;
		color: #d43d3d;
		border: 0;
		position: relative;
		top: -0.5rem;
		left: .4rem;
	}

	.putBtnSty i {
		position: absolute;
		left: 0;
		font-size: .35rem;
		color: #fff;
		display: block;
		width: 1rem;
		font-style: normal;
		text-align: left;
	}
</style>

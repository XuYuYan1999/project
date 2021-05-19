<template>
	<div class="cinemaWrap">
		<!-- header头部 -->
		<div class="toTop">
			<headerWrap></headerWrap>

			<!-- nav导航栏 -->
			<navWrap></navWrap>

		</div>

		<!-- 筛选按钮 -->
		<div class="filterWrap">
			<ul>
				<li>爱情</li>
				<li>喜剧</li>
				<li>动作</li>
				<li>古装</li>
				<li @click="showPopup">筛选</li>
			</ul>
		</div>
		<!-- 筛选弹出窗口 -->
		<van-popup
			v-model="show" 
			position='right'
			closeable
			close-icon='arrow-left'
			close-icon-position="top-left"
			class='popUp'
			:style="{ height: '100%',width: '100%' }">
		
		<filterWrap></filterWrap>
		
		</van-popup>
		
		<!-- 内容列表 -->
		<div v-for="(n,inx) in dataObj" :key=inx class="videoWrap">
			<span>{{n.title}}</span>
			<img :src='n.pic' />
		</div>

		<!-- 底部栏目 -->
		<footerWrap></footerWrap>

	</div>
</template>

<script>
	import axios from 'axios'
	import headerWrap from './headerWrap'
	import navWrap from './navWrap'
	import footerWrap from './footerWrap'
	import filterWrap from './filterWrap'

	export default {
		name: "cinemaWrap",
		data() {
			return {
				msg: '放映厅栏目',
				dataObj: {},
				show:false
			}
		},
		created() {
			axios.get('/index/ding.json')
				.then(_d => {
					// console.log( _d.data );
					this.dataObj = _d.data.bangumi;
				});
		},
		components: {
			headerWrap,
			navWrap,
			footerWrap,
			filterWrap
		},
		methods: {
			showPopup() {
				this.show = true;
			}
		},
	};
</script>

<style scoped lang="scss">
	.cinemaWrap {
		position: relative;
		padding-top: 2.4rem;
	}

	.toTop {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
	}

	.videoWrap {
		clear: both;
	}

	.videoWrap span {
		font-size: .3rem;
	}

	.videoWrap img {
		display: block;
		width: 95%;
		margin: 0 auto;
	}

	.filterWrap {
		font-size: .4rem;
	}

	.filterWrap li {
		float: left;
		background: #eee;
		margin-right: .2rem;
		padding: 10px;
		border-radius: 20px;
	}
</style>

<template>
	<div class="filterWrap">
		<van-nav-bar title="影视剧" class='fititle'>
			<template #right>
				<van-icon name="search" size="18" />
			</template>
		</van-nav-bar>

		<!-- 滚动标签 -->
		<van-tabs v-model="active1" 
			type="card" 
			style="margin-bottom:.5rem;"
			@change='onChange1'>
			<van-tab name='a_1' title="全部分类"></van-tab>
			<van-tab name='a_2' title="电影"></van-tab>
			<van-tab name='a_3' title="电视剧"></van-tab>
			<van-tab name='a_4' title="纪录片"></van-tab>
			<van-tab name='a_5' title="少儿"></van-tab>
			<van-tab name='a_6' title="综艺"></van-tab>
		</van-tabs>

		<van-tabs v-model="active2" 
			type="card" 
			style="margin-bottom:.5rem;"
			@change='onChange2'>
			<van-tab name='b_1' title="全部地区"></van-tab>
			<van-tab name='b_2' title="内地"></van-tab>
			<van-tab name='b_3' title="港台地区"></van-tab>
			<van-tab name='b_4' title="美国"></van-tab>
			<van-tab name='b_5' title="泰国"></van-tab>
			<van-tab name='b_6' title="日本"></van-tab>
			<van-tab name='b_7' title="铁岭"></van-tab>
			<van-tab name='b_8' title="沈阳"></van-tab>
		</van-tabs>

		<van-tabs v-model="active3" 
			type="card" 
			style="margin-bottom:.5rem;"
			@change='onChange3'>
			<van-tab name='c_1' title="全部类型"></van-tab>
			<van-tab name='c_2' title="动作"></van-tab>
			<van-tab name='c_3' title="家庭"></van-tab>
			<van-tab name='c_4' title="爱情"></van-tab>
			<van-tab name='c_5' title="喜剧"></van-tab>
			<van-tab name='c_6' title="古装"></van-tab>
		</van-tabs>

		<van-tabs v-model="active4" 
			type="card" 
			style="margin-bottom:.5rem;"
			@change='onChange4'>
			<van-tab name='d_1' title="为你推荐"></van-tab>
			<van-tab name='d_2' title="最热"></van-tab>
			<van-tab name='d_3' title="最新"></van-tab>
			<van-tab name='d_4' title="最多评论"></van-tab>
		</van-tabs>
		
		<div class="videoWrap"
			v-for="(n,inx) in newsData.bangumi"
			:key=inx>
			<li>
				<img :src='n.pic'/>
				<label>
					<a target='_blank' :href="n.redirect_url">{{n.title}}</a>
				</label>
			</li>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "filterWrap",
		data() {
			return {
				msg: '放映厅-筛选组件',
				active1: 'a_1',
				active2: 'b_1',
				active3: 'c_1',
				active4: 'd_1',
				newsData: "",
				filterObj:{
					a:'',
					b:'',
					c:'',
					d:''
				}
			}
		},
		created(){
		  axios.get('/index/ding.json')
		      .then( _d=>{
		        // console.log( _d.data );
		        this.newsData = _d.data;
		      });
		},
		methods:{
			onChange1(_inx){
				// console.log(_inx)
				let _aObj = {
					_k:'a',
					_v: _inx
				}
				this.toFilterApiFn(_aObj)
			},
			onChange2(_inx){
				// console.log(_inx)
				let _bObj = {
					_k:'b',
					_v: _inx
				}
				this.toFilterApiFn(_bObj)
			},
			onChange3(_inx){
				// console.log(_inx)
				let _cObj = {
					_k:'c',
					_v: _inx
				}
				this.toFilterApiFn(_cObj)
			},
			onChange4(_inx){
				// console.log(_inx)
				let _dObj = {
					_k:'d',
					_v: _inx
				}
				this.toFilterApiFn(_dObj)
			},
			// 过滤接口,提交参数
			toFilterApiFn(_o){
				if(_o._k === 'a'){
					this.filterObj.a = _o._v;
				}
				if(_o._k === 'b'){
					this.filterObj.b = _o._v;
				}
				if(_o._k === 'c'){
					this.filterObj.c = _o._v;
				}
				if(_o._k === 'd'){
					this.filterObj.d = _o._v;
				}
				console.log(this.filterObj)
			}
		}
	};
</script>

<style scoped lang="scss">
	.filterWrap {
		padding: .3rem 0;
	}

	.fititle {
		border-bottom: 1px solid #666;
		padding-bottom: .4rem;
		margin-bottom: .3rem;
	}
	ol,ul,li{list-style: none;}
	
	.videoWrap{}
	.videoWrap li{
	  width: 31%;height: 4rem;overflow: hidden;
	  margin:0 10px 20px 0;
	  float: left;
	}
	.videoWrap li img{
	  width: 100%;border-radius: 10px;
	}
	.videoWrap li label{
	  display: block;font-size: .5rem;
	}
	.videoWrap li label a{
	  color: #000;
	}
</style>

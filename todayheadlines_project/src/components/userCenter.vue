<template>
	<div class="userCenter">
		<h1>{{msg}}</h1>
		<van-button type="primary" style="width:40%;margin:1rem auto;" @click='logOutFn'>退出登录
		</van-button>
		<!-- 底部栏目 -->
		<footerWrap></footerWrap>

	</div>
</template>

<script>
	import footerWrap from './footerWrap'
	import {
		Dialog
	} from 'vant';
	export default {
		name: "userCenter",
		data() {
			return {
				msg: '用户中心页'
			}
		},
		components: {
			footerWrap
		},
		methods:{
		  logOutFn(){
		
		    Dialog.alert({
		            message: '退出登录',
		          }).then(() => {
		            // 清除本地存储中的用户名、密码
		            localStorage.clear();
		            this.$router.push({path:'/loginWrap'});
		          });
		  }
		}
	};
</script>

<style scoped lang="scss">
	.mainIndex {
		position: relative;
		padding-top: 2.4rem;
	}

	.toTop {
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
	}
</style>

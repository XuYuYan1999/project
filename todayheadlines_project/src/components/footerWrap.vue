<template>
	<div class="footerWrap">
		<van-tabbar 
			v-model="active" 
			active-color="#f00" 
			inactive-color="#000"
			@change='footerOnChange'>
			<van-tabbar-item icon="home-o">
				<span>首页</span>
				<template #icon="props">
					<img :src="props.active ? icon.home_red : icon.home_grey" />
				</template>
			</van-tabbar-item>

			<van-tabbar-item icon="search"  badge="3">
				<span>西瓜视频</span>
				<template #icon="props">
					<img :src="props.active ? icon.play_red : icon.play_grey" />
				</template>
			</van-tabbar-item>

			<van-tabbar-item icon="friends-o">
				<span>放映厅</span>
				<template #icon="props">
					<img :src="props.active ? icon.cinema_red : icon.cinema_grey" />
				</template>
			</van-tabbar-item>

			<van-tabbar-item icon="setting-o">
				<span>{{loginStateTxt}}</span>
				<template #icon="props">
					<img :src="props.active ? icon.login_red : icon.login_grey" />
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	import home_red from '../assets/home_red.png'
	import home_grey from '../assets/home_grey.png'

	import play_red from '../assets/play_red.png'
	import play_grey from '../assets/play_grey.png'

	import cinema_red from '../assets/cinema_red.png'
	import cinema_grey from '../assets/cinema_grey.png'

	import login_red from '../assets/login_red.png'
	import login_grey from '../assets/login_grey.png'

	export default {
		name: "footerWrap",
		data() {
			return {
				msg: 'footer底部栏目',
				active: 0,
				loginStateTxt:'未登录',
				icon: {
					home_red:home_red,
					home_grey: home_grey,
					
					play_red: play_red,
					play_grey: play_grey,
					
					cinema_red: cinema_red,
					cinema_grey: cinema_grey,
					
					login_red: login_red,
					login_grey: login_grey
				},
			}
		},
		created(){
		    // console.log(typeof localStorage.getItem('switchTabInx', '_inx' ) )
		    this.active = Number(localStorage.getItem('switchTabInx', '_inx' ));
		
		    // 获得用户名，密码
		    // localStorage.clear();
		    console.log( localStorage.getItem('u_name') )
		    console.log( localStorage.getItem('p_word') )
		
		    let _u_name = localStorage.getItem('u_name');
		    let _p_word = localStorage.getItem('p_word');
		
		    if( _u_name !== null && _p_word !== null ){
		        // 已经登录成功
		        // this.active = 0;
		        this.loginStateTxt = '已登录';
		    }
			
			// 输出当前路由
			// console.log(this.$route)
			let _routeObj = this.$route;
			if(_routeObj.path === '/loginWrap'){
				this.active = 3;
			}else if(_routeObj.path === '/userCenterWrap'){
				this.active = 3;
			}
		},
		methods: {
			footerOnChange(_inx) {
				// 将索引本地存储
				localStorage.setItem('switchTabInx', _inx );
				
				// console.log(_inx)
				if( _inx === 0){
					this.$router.push({path: "/"})
				}else if(_inx === 1){
					this.$router.push({path: "/playWrap"})
				}else if(_inx === 2){
					this.$router.push({path: "/cinemaWrap"})
				}else if(_inx === 3){
					this.$router.push({path: "/loginWrap"})
				}
				
			}
		},
	};
</script>

<style scoped lang="scss">

</style>

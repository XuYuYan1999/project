<template>
  <div class="loginWrap">
	  <div class="loginBtn" @click="showLoginFn">
		  登录
	  </div>
	  <div class="inputWrap" v-show="isShow">
		  <van-field v-model="username" label='用户名:' placeholder="请输入用户名" />
		  <van-field v-model="password" label='密码:' placeholder="请输入密码" />
		  <van-button type="primary"
					style="width:40%;margin:1rem .4rem;"
					@click='enterLoginFn'>确定
			</van-button>
			<van-button type="primary"
								style="width:40%;margin:1rem auto;"
								@click='cancelLoginFn'>取消
						</van-button>
	  </div>
	  
	  <!-- 底部栏目 -->
	  <footerWrap></footerWrap>
	  
  </div>
</template>

<script>
import footerWrap from './footerWrap'
import { Dialog } from 'vant';
export default {
  name: "loginWrap",
  data() {
  	return {
  		msg: '登录组件',
		isShow:false,
		username:'',
		password:''
  	}
  },
  components:{footerWrap},
  created(){
      // 获得用户名，密码
      let _u_name = localStorage.getItem('u_name');
      let _p_word = localStorage.getItem('p_word');
  
      if( _u_name !== null && _p_word !== null ){
          // 已经登录成功
          this.$router.push({path:'/userCenter'});
      }
  },
  methods:{
	  showLoginFn(){
		  this.isShow = true
	  },
	  enterLoginFn(){
		  // console.log(this.username,this.password)
		  if(this.username === '' || this.password === ''){
			  Dialog({ message: '请输入用户名、密码' });
			  return false;
		  }
		  // 假设用户名为abc,密码123
		  if(this.username === 'abc' && this.password === '123'){
			  Dialog.alert({
			    title: '标题',
			    message: '登录成功',
			  }).then(() => {
				  // 没有后台,本地存储
				  localStorage.setItem('u_name',this.username)
				  localStorage.setItem('p_word',this.password)
				  
				  this.$router.push({path:'/userCenter'})
			  });
		  }else{
			  Dialog.alert({
			    title: '标题',
			    message: '用户名、密码错误',
			  }).then(() => {
			    this.username = '';
				this.password = '';
			  });
		  }
	  },
	  
	  cancelLoginFn(){
		  this.isShow = false
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
.loginBtn{
    width: 3rem;height: 3rem;background: #f00;margin:2rem auto;
    font-size: .8rem;color: #fff;line-height: 3rem;text-align: center;
    border-radius: 100%;
}
.inputWrap {
	width: 70%;
	margin: 0 auto;
}
</style>

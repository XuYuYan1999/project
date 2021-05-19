<template>
  <div class="mainIndex">
	  <!-- header头部 -->
	  <div class="toTop">
		  <headerWrap></headerWrap>
		  
		  <!-- nav导航栏 -->
		  <navWrap></navWrap>
		  
	  </div>
	 
	  <!-- 列表组件 -->
	  <listWrap>111</listWrap>
	  
	  <!-- 底部栏目 -->
	  <footerWrap></footerWrap>
	  
  </div>
</template>

<script>
import headerWrap from './headerWrap'
import navWrap from './navWrap'
import listWrap from './listWrap'
import footerWrap from './footerWrap'
import '../assets/reVant.css'

export default {
  name: "mainIndex",
  data() {
  	return {
  		msg: '今日头条APP'
  	}
  },
  components:{headerWrap,navWrap,listWrap,footerWrap}
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

<template>
  <div class="playWrap">
	  <!-- header头部 -->
	  <div class="toTop">
		  <headerWrap></headerWrap>
		  
		  <!-- nav导航栏 -->
		  <navWrap></navWrap>
		  
	  </div>
	  
	  <filterWrap></filterWrap>
	 
	  <!-- 底部栏目 -->
	  <footerWrap></footerWrap>
	  
  </div>
</template>

<script>
import headerWrap from './headerWrap'
import navWrap from './navWrap'
import footerWrap from './footerWrap'
import filterWrap from './filterWrap'

export default {
  name: "playWrap",
  data() {
  	return {
  		msg: '西瓜视频组件'
  	}
  },
  components:{headerWrap,navWrap,footerWrap,filterWrap}
};
</script>

<style scoped lang="scss">
.playWrap {
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

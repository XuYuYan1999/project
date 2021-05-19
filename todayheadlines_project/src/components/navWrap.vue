<template>
  <div class="navWrap">
	  <van-tabs>
	    <van-tab v-for="(n,inx) in navData" 
		:key=inx
		:title="n.n">
	    </van-tab>
	  </van-tabs>
  </div>
</template>

<script>
export default {
  name: "navWrap",
  data() {
  	return {
  		msg: 'nav导航栏',
		navData:[
			{
			  n:'关注',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'推荐',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'热榜',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'抗疫',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'视频',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'免费小说',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'抗疫1',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'视频1',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			},{
			  n:'免费小说1',
			  hot:0,
			  link:'http://www.sina.com.cn/a'
			}
		]
  	}
  },
};
</script>

<style scoped lang="scss">
.navWrap{
  padding: .3rem 0;
  border-bottom: 1px solid #666;
}
</style>
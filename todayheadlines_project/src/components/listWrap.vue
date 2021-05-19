<template>
	<div class="listWrap">
		<div class="newWrap"
			v-for="(n,inx) in newsData.bangumi"
			:key=inx>
			<label>
				<img :src='n.pic' style="width: 1rem; height: 1rem; margin-top: .1rem;"/>
				<a target='_blank' :href="n.redirect_url">{{n.title}}</a>
			</label>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "listWrap",
		data() {
			return {
				msg: '新闻列表组件',
				newsData: ""
			}
		},
		created(){
			axios.get('/index/ding.json')
				.then(_d =>{
					// console.log(_d.data)
					this.newsData = _d.data;
				})
		}
		
	};
</script>

<style scoped lang="scss">
.newWrap label a{
  font-size: .6rem;color: #000;
}
</style>

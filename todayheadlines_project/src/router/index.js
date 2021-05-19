import Vue from "vue";
import VueRouter from "vue-router";
import mainIndex from '@/components/mainIndex'
import playWrap from '@/components/playWrap'
import cinemaWrap from '@/components/cinemaWrap'
import filterWrap from '@/components/filterWrap'
import loginWrap from '@/components/loginWrap'
import userCenter from '@/components/userCenter'

Vue.use(VueRouter);

const routes = [{
		path: "/",
		name: "mainIndex",
		component: mainIndex,
	},
	{
		path: "/playWrap",
		name: "playWrap",
		component: playWrap,
	},
	{
		path: "/cinemaWrap",
		name: "cinemaWrap",
		component: cinemaWrap,
	},
	{
		path: "/filterWrap",
		name: "filterWrap",
		component: filterWrap,
	},
	{
		path: "/loginWrap",
		name: "loginWrap",
		component: loginWrap,
	},
	{
		path: "/userCenter",
		name: "userCenter",
		component: userCenter,
	}
];

const router = new VueRouter({
	routes,
});

const VueRouterPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(to) {

	return VueRouterPush.call(this, to).catch(err => err)

}

export default router;

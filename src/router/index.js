import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// 一级路由：主页面
		{
			path: "/",
			name: "layout",
			component: () => import("@/views/Layout/index.vue"),
			// 二级路由
			children: [
				{
					// 首页
					path: "",
					name: "home",
					component: () => import("@/views/Home/index.vue"),
				},
				{
					// 导航分类
					path: "category/:id",
					name: "category",
					component: () => import("@/views/Category/index.vue"),
				},
				{
					// 分类类别
					path: "category/sub/:id",
					name: "subCategory",
					component: () => import("@/views/SubCategory/index.vue"),
				},
				{
					// 商品详情
					path: "detail/:id",
					name: "detail",
					component: () => import("@/views/Detail/index.vue"),
				},
				{
					// 本地购物车列表
					path: "carList",
					name: "carList",
					component: () => import("@/views/CarList/index.vue"),
				},
				{
					// 订单结算
					path: "checkout",
					name: "checkout",
					component: () => import("@/views/CheckOut/index.vue"),
				},
				{
					// 支付页
					path: "pay",
					name: "pay",
					component: () => import("@/views/Pay/index.vue"),
				},
				{
					// 支付成功返回页面
					path: "paycallback",
					name: "paycallback",
					component: () => import("@/views/Pay/PayBack.vue"),
				},
				{
					// 会员中心页
					path: "member",
					name: "member",
					component: () => import("@/views/Member/index.vue"),
					// 三级路由
					children: [
						{
							// 个人中心页
							path: "",
							name: "user_info",
							component: () => import("@/views/Member/components/UserInfo.vue"),
						},
						{
							// 订单页
							path: "user_order",
							name: "user_order",
							component: () => import("@/views/Member/components/UserOrder.vue"),
						},
					],
				},
			],
		},
		// 一级路由：登录页
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/Login"),
		},
	],
	// 路由滚动行为定制
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;

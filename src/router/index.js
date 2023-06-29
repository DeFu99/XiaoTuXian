import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "layout",
			component: () => import("@/views/Layout/index.vue"),
			children: [
				{
					// 首页
					path: "",
					name: "home",
					component: () => import("@/views/Home/index.vue"),
				},
				{
					// 类别(一级路由)
					path: "category/:id",
					name: "category",
					component: () => import("@/views/Category/index.vue"),
				},
				{
					// 类别(二级路由)
					path: "category/sub/:id",
					name: "subCategory",
					component: () => import("@/views/SubCategory/index.vue"),
				},
				{
					// 商品详情路由
					path: "detail/:id",
					name: "detail",
					component: () => import("@/views/Detail/index.vue"),
				},
			],
		},
		{
			path: "/login",
			name: "login",
			component: () => import("@/views/Login/index.vue"),
		},
	],
	// 路由滚动行为定制
	scrollBehavior() {
		return { top: 0 };
	},
});

export default router;

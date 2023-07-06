import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";
import { useCartStore } from "./cartStore";
import { mergeCartAPI } from "@/apis/cart";

// 存储用户登录数据
export const useUserStore = defineStore(
	"user",
	() => {
		// 引入购物车仓库
		const cartStore = useCartStore();

		// 用户信息
		const userInfo = ref({});

		// 获取用户登录信息
		const getUserInfo = async ({ account, password }) => {
			const res = await loginApi({ account, password });
			userInfo.value = res.result;
			// 合并购物车(.map 映射操作)
			await mergeCartAPI(
				cartStore.cartList.map(item => {
					return {
						skuId: item.skuId,
						selected: item.selected,
						count: item.count,
					};
				})
			);
			cartStore.updateNewList();
		};

		// 退出时清除用户信息
		const clearUserInfo = () => {
			userInfo.value = {};
			cartStore.clearCart();
		};

		return {
			userInfo,
			getUserInfo,
			clearUserInfo,
		};
	},

	// 刷新不丢失，保存到本地
	{
		persist: true,
	}
);

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user";
import { findNewCartAPI, addCartAPI, delCartAPI } from "@/apis/cart";

export const useCartStore = defineStore(
	"cart",
	() => {
		// 商品列表
		const cartList = ref([]);

		// 获取购物车最新列表
		const updateNewList = async () => {
			const res = await findNewCartAPI();
			cartList.value = res.result;
		};

		// 获取用户token值
		const userStore = useUserStore();
		const isLogin = computed(() => userStore.userInfo.token);

		// 添加购物车
		const addCart = async goods => {
			const { skuId, count } = goods;
			if (isLogin.value) {
				// api逻辑(已经登录)
				await addCartAPI({ skuId, count });
				const res = await findNewCartAPI();
				cartList.value = res.result;
			} else {
				// 本地逻辑（未登入）
				const item = cartList.value.find(item => goods.skuId === item.skuId);
				if (item) {
					item.count++;
				} else {
					cartList.value.push(goods);
				}
			}
		};

		// 删除购物车
		const delCart = async skuId => {
			if (isLogin.value) {
				// 已经登录
				await delCartAPI([skuId]);
				const res = await findNewCartAPI();
				cartList.value = res.result;
			} else {
				// 未登录
				const idx = cartList.value.findIndex(item => skuId === item.skuId);
				cartList.value.splice(idx, 1);
			}
		};

		// 退出清空购物车
		const clearCart = () => (cartList.value = []);

		// 计算购物车商品总数
		const allCount = computed(() =>
			cartList.value.reduce((pre, current) => {
				return pre + current.count;
			}, 0)
		);

		// 计算购物车商品总价
		const allCountPrice = computed(() =>
			cartList.value.reduce((pre, current) => {
				return pre + current.count * current.price;
			}, 0)
		);

		// 单选功能
		const singleCheck = (skuId, selected) => {
			const item = cartList.value.find(item => item.skuId === skuId);
			item.selected = selected;
		};

		// 是否全选（单选点击后自动全选）
		const isAll = computed(() => {
			return cartList.value.every(item => item.selected);
		});

		// 点击全选 (一键全选)
		const allCheck = selected => {
			return cartList.value.forEach(item => {
				return (item.selected = selected);
			});
		};

		// 已选数量
		const selectedCount = computed(() =>
			cartList.value
				.filter(item => item.selected)
				.reduce((pre, current) => pre + current.count, 0)
		);

		// 已选数量价格合计
		const selectedPrice = computed(() =>
			cartList.value
				.filter(item => item.selected)
				.reduce((pre, current) => pre + current.count * current.price, 0)
		);

		return {
			cartList,
			addCart,
			delCart,
			allCount,
			allCountPrice,
			singleCheck,
			isAll,
			allCheck,
			selectedCount,
			selectedPrice,
			clearCart,
			updateNewList,
		};
	},
	{
		persist: true,
	}
);

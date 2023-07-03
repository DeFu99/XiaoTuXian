import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
	"cart",
	() => {
		// 商品
		const cartList = ref([]);
		// 添加购物车
		const addCart = goods => {
			const item = cartList.value.find(item => goods.skuId === item.skuId);
			if (item) {
				item.count++;
			} else {
				cartList.value.push(goods);
			}
		};
		return {
			cartList,
			addCart,
		};
	},
	{
		persist: true,
	}
);

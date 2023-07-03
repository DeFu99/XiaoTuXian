import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
    // 商品
	const cartList = ref([]);
    // 添加购物车
	const addCart = () => {};
	return {
		cartList,
		addCart,
	};
});

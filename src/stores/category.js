import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout.js";

export const useCategoryStore = defineStore("category", () => {
	// 保存导航列表数据
	const categoryList = ref([])
	// 获取商品种类
	const getCategory = async () => {
		const res = await getCategoryAPI();
		categoryList.value = res.result;
	};
	return {
		categoryList,
		getCategory,
	};
});

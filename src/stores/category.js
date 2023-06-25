import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/layout.js";

export const useCategoryStore = defineStore("category", () => {
	// 导航列表数据，相当于state
	const categoryList = ref([])
	// 获取数据的方法
	const getCategory = async () => {
		const res = await getCategoryAPI();
		categoryList.value = res.result;
	};
	return {
		categoryList,
		getCategory,
	};
});

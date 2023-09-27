// 封装商品相关业务
import { getTopCategoryAPI } from "@/apis/category";
import { onMounted, ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

export const useCategoryData = () => {

	const categoryData = ref({});

	// 接收路由传来的参数
	const route = useRoute();
	// 默认id，之后路由参数变化，id变化
	const getCategory = async (id = route.params.id) => {
		// 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
		const res = await getTopCategoryAPI(id);
		categoryData.value = res.result;
	};
	onMounted(() => getCategory());

	// 路由参数变化时，重新调用获取商品的方法
	onBeforeRouteUpdate(to => {
		getCategory(to.params.id);
	});
	return {
		categoryData,
	};
};

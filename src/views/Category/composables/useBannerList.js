// 封装banner轮播图相关业务

import { onMounted, ref } from "vue";
import { getBannerAPI } from "@/apis/home";

export const useBannerList = () => {
	const bannerList = ref([]);
	const getBanner = async () => {
		const res = await getBannerAPI({
			distributionSite: "2",
		});
		bannerList.value = res.result;
	};
	onMounted(() => getBanner());
	return {
		bannerList,
	};
};

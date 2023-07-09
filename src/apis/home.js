import request from "@/untils/http";
// 获取banner
export function getBannerAPI(params = {}) {
	// 默认为1 商品为2
	const { distributionSite = "1" } = params;
	return request({
		url: "home/banner",
		params: { distributionSite },
	});
}

// 获取新鲜好物
export const findNewAPI = () => request({ url: "/home/new" });
// 获取人气推荐
export const getHotAPI = () => request({ url: "home/hot" });
// 获取产品
export const getGoodsAPI = () => request({ url: "/home/goods" });

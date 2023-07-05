import request from "@/untils/http";

export const getTopCategoryAPI = id => request({ url: "/category", params: { id } });

// 获取二级分类列表数据,id:分类id
export const getCategoryFilterAPI = id =>
	request({ url: "/category/sub/filter", params: { id } });

// 获取导航数据
export const getSubCategoryAPI = data => {
	return request({
		method: "post",
		url: "/category/goods/temporary",
		data,
	});
};

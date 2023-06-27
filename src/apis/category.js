import request from "@/untils/http";

/**
 * @description: 获取分类数据
 * @param {*} id 分类id
 * @return {*}
 */
export const getTopCategoryAPI = id => {
	return request({
		url: "/category",
		params: { id },
	});
};

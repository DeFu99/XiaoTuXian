import request from "@/untils/http";

// 获取详情
export const getDetailAPI = id => request({ url: "/goods", params: { id } });

// 获取列表商品
export const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
	return request({
		url: "/goods/hot",
		params: {
			id,
			type,
			limit,
		},
	});
};

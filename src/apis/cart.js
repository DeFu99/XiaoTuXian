// 封装购物车相关接口
import request from "@/untils/http";

// 加入-购物车
export const addCartAPI = ({ skuId, count }) =>
	request({
		url: "/member/cart",
		method: "post",
		data: { skuId, count },
	});

// 获取-购物车列表(最新)
export const findNewCartAPI = () => request({ url: "/member/cart" });

// 删除购物车
export const delCartAPI = ids =>
	request({
		method: "DELETE",
		url: "/member/cart",
		data: {
			ids,
		},
	});

// 合并购物车
export const mergeCartAPI = data => {
	return request({
		method: "post",
		url: "/member/cart/merge",
		data,
	});
};

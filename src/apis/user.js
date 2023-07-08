import request from "@/untils/http";

export const loginApi = ({ account, password }) =>
	request({
		url: "/login",
		method: "post",
		data: { account, password },
	});

// 封装'猜你喜欢'接口
export const getLikeListAPI = ({ limit = 4 }) => {
	return request({
		url: "/goods/relevant",
		params: {
			limit,
		},
	});
};

// 获取用户订单信息
/*
params: {
  orderState:0,
  page:1,
  pageSize:2
}
*/
export const getUserOrder = params => request({ url: "/member/order", params });

import request from "@/untils/http";
// 支付页
export const getOrderAPI = id => {
	return request({
		url: `/member/order/${id}`,
	});
};

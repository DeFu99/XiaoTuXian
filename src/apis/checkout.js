import request from "@/untils/http";

// 生成订单结算页
export const getCheckInfoAPI = () => request({ url: "/member/order/pre" });

// 创建订单
export const createOrderAPI = data => {
	return request({
		url: "/member/order",
		method: "POST",
		data,
	});
};

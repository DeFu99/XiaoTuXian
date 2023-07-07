import request from "@/untils/http";

// 生成订单结算页
export const getCheckInfoAPI = () => request({ url: "/member/order/pre" });

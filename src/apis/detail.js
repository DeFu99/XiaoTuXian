import request from "@/untils/http";

// 获取详情
export const getDetailAPI = id => request({ url: "/goods", params: { id } });

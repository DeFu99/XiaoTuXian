import request from "@/untils/http";

export const loginApi = ({ account, password }) =>
	request({
		url: "/login",
		method: "post",
		data: { account, password },
	});

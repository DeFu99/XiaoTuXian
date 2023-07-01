// 登录数据
import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";
// 用户登录数据存储
export const useUserStore = defineStore(
	"user",
	() => {
		const userInfo = ref({});
		// 定义获取接口的action函数
		const getUserInfo = async ({ account, password }) => {
			const res = await loginApi({ account, password });
			userInfo.value = res.result;
		};
		return {
			userInfo,
			getUserInfo,
		};
	},
	{
		persist: true,
	}
);

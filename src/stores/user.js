import { defineStore } from "pinia";
import { ref } from "vue";
import { loginApi } from "@/apis/user";

// 存储用户登录数据
export const useUserStore = defineStore(
	"user",
	() => {
		const userInfo = ref({});
		// 获取用户登录信息
		const getUserInfo = async ({ account, password }) => {
			const res = await loginApi({ account, password });
			userInfo.value = res.result;
		};
		// 退出时清除用户信息
		const clearUserInfo = () => (userInfo.value = {});

		return {
			userInfo,
			getUserInfo,
			clearUserInfo,
		};
	},
	// 刷新不丢失，保存到本地
	{
		persist: true,
	}
);

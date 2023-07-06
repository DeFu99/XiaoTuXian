import request from "@/untils/http";
// 获取轮播图上的分类数据
export const getCategoryAPI = () => request({ url: "/home/category/head" });

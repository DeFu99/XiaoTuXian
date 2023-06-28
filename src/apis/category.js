import httpInstance from "@/untils/http";

export const getTopCategoryAPI = id => httpInstance({ url: "/category", params: { id } });

// 获取二级分类列表数据,id:分类id
export const getCategoryFilterAPI = id =>
	httpInstance({ url: "/category/sub/filter", params: { id } });

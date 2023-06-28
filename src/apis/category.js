import httpInstance from "@/untils/http";

export const getTopCategoryAPI = id => httpInstance({ url: "/category", params: { id } });

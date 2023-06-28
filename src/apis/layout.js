import httpInstance from "@/untils/http";

export const getCategoryAPI = () => httpInstance({ url: "/home/category/head" });

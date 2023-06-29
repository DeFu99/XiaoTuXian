import request from "@/untils/http";

export const getCategoryAPI = () => request({ url: "/home/category/head" });

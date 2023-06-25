import httpInstance from "@/untils/http";

export function getCategoryAPI() {
	return httpInstance({
		url: "/home/category/head",
	});
}

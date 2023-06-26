// 定义懒加载插件
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
	install(app) {
		// 定义全局指令
		app.directive("img-lazy", {
			// el：指令绑定的元素 img
			mounted(el, binding) {
				console.log(el, binding.value);
				// 结构赋值
				const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
					console.log(isIntersecting);
					if (isIntersecting) {
						// 进入视口区域
						el.src = binding.value;
						stop();
					}
				});
			},
		});
	},
};

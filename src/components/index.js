// 把components中的组件以插件的形式，进行全局注册

import ImageView from "@/components/ImageView/index.vue";
import XtxSku from "@/components/XtxSku/index.vue";

export const componentPlugin = {
	install(app) {
		app.component("XtxImageView", ImageView);
		app.component("XtxSku", XtxSku);
	},
};

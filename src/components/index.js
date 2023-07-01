
// 把components中的组件以插件的形式，进行全局注册

import XtxImageView from "@/components/XtxImageView/index.vue";
import XtxSku from "@/components/XtxSku/index.vue";
// import XtxGoodsItem from "@/components/XtxGoodsItem/index.vue";

export const componentPlugin = {
	install(app) {
		app.component("XtxImageView", XtxImageView);
		app.component("XtxSku", XtxSku);
		// app.component("XtxGoodsItem", XtxGoodsItem);
	},
};

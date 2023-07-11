// import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import App from "./App.vue";
import router from "./router";

// 初始化样式
import "@/styles/common.scss";

// 引入弹框消息样式
import "element-plus/theme-chalk/el-message.css";

// 引入懒加载指令
import { lazyPlugin } from "@/directives";

// 引入全局组件插件
import { componentPlugin } from "@/components";

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.use(router);
app.use(lazyPlugin);
app.use(componentPlugin);
app.mount("#app");

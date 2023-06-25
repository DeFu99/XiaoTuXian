import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// 按需引入组件库
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 不用每次都导入ref，onmounted等

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [
				// 配置sass颜色样式
				ElementPlusResolver({ importStyle: "sass" }),
			],
		}),
		AutoImport({
			// 要使用此插件的文件
			include: [
				"src/views/**/*.vue", // 这里代表src/views/目录下面的所有vue文件
			],
			imports: [
				"vue", // Vue全部API
				"vue-router", //Vue路由全部API
				{
					axios: [
						["default", "axios"], // import { default as axios } from 'axios'
					],
				},
			],
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	// vite的配置
	css: {
		preprocessorOptions: {
			scss: {
				// 自动导入定制化样式文件进行样式覆盖
				additionalData: `
				@use "@/styles/element/index.scss" as *;
				@use "@/styles/var.scss" as *;
				`,
			},
		},
	},
});

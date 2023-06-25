<template>
	<LayoutFixed />
	<LayoutNav />
	<LayoutHeader />
	<RouterView />
	<LayoutFooter />
</template>

<script setup>
	import LayoutFixed from "./components/LayoutFixed.vue";
	import LayoutNav from "./components/LayoutNav.vue";
	import LayoutHeader from "./components/LayoutHeader.vue";
	import LayoutFooter from "./components/LayoutFooter.vue";

	// 触发列表导航的action方法
	import { useCategoryStore } from "@/stores/category";
	import { onMounted } from "vue";
	// 调取方法
	const categoryStore = useCategoryStore();
	onMounted(() => categoryStore.getCategory());
</script>

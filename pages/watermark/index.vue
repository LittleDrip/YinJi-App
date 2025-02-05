<template>
	<view class="container">
		<uni-nav-bar :fixed="true" :border="false" status-bar title="印迹" style="font-weight: bold;" />
		<!-- <view class=" status_bar">
	</view> //状态栏 -->
		<scroll-view scroll-top="0" scroll-y="true" class="scroll-Y">
			<view class="uni-bg-blue">
				YinJi is great
			</view>
			<view id="demo1" class="scroll-view-item uni-bg-red">A</view>
			<view id="demo2" class="scroll-view-item uni-bg-green">B</view>
			<view id="demo3" class="scroll-view-item uni-bg-blue">C</view>
		</scroll-view>
		<button type="primary" @click="openWin">打开子窗体</button>
		<view class="edgeInsetBottom"></view>
		<!-- 绝对定位的视图需要考虑 tabBar 遮挡的问题，bottom 应该加上 tabBar 的高度 -->
		<view class="fixedView"></view>
	</view>

</template>

<script setup>
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
import { ref, onMounted } from 'vue';

// 定义 tabBar 高度
const tabbarHeight = ref(0);
const openWin = () => {
	// 通过 id 获取 nvue 子窗体  
	const subNVue = uni.getSubNVueById('concat')
	// 打开 nvue 子窗体  
	subNVue.show('slide-in-left', 300, function () {
		// 打开后进行一些操作...  
		//   
		console.log('subNVue 原生子窗体显示成功');
	});
}
// 在 onMounted 生命周期中获取 tabBar 高度
onMounted(() => {
	tabbarHeight.value = uni.getSystemInfoSync().windowBottom;
});


</script>

<style>
.edgeInsetBottom {
	width: 750rpx;
	height: var(--window-bottom);
	background-color: #FFFFFF;
}

.fixedView {
	position: fixed;
	width: 750rpx;
	height: 30px;
	/* background-color: #4CD964; */
	bottom: var(--window-bottom);
}

/*  .status_bar {
        height: var(--status-bar-height);
        width: 100%;
    } */
.scroll-Y {
	height: 300rpx;
}

.container {
	/* height: 100vh; */
	font-family: 'MiSans';
}

.scroll-view_H {
	white-space: nowrap;
	width: 100%;
}

.scroll-view-item {
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
	font-size: 36rpx;
}

.scroll-view-item_H {
	display: inline-block;
	width: 100%;
	height: 300rpx;
	line-height: 300rpx;
	text-align: center;
	font-size: 36rpx;
}
</style>

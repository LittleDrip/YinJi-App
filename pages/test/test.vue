<template>
	<view class="container">
		<uni-nav-bar :fixed="true" shadow status-bar left-icon="left" left-text="返回" title="自定义导航栏" @clickLeft="back" />
		<uni-card is-full :isShadow="false">
			<button @click="test">23</button>
		</uni-card>
		<uni-section title="基本用法" subTitle="使用 title 属性设置导航栏标题" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar title="标题" />
			</view>
		</uni-section>
		<uni-section title="开启阴影" subTitle="使用 shadow 属性启用阴影" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" title="开启阴影" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="开启暗黑模式" subTitle="使用 dark 属性设置暗黑模式" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" dark title="暗黑模式" @clickLeft="back" />
			</view>
		</uni-section>
		<uni-section title="带返回箭头+右侧图标" subTitle="使用 left-icon/right-icon 设置左右图标" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" right-icon="cart" title="标题" />
			</view>
		</uni-section>
		<uni-section title="左侧文字+右侧文字" subTitle="使用 left-text/right-text 设置左右文字" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar shadow left-icon="left" leftText="返回" rightText="设置" title="标题" />
			</view>
		</uni-section>
		<uni-section title="自定义颜色" subTitle="使用 color/background-color 属性设置前景背景色" type="line"
			style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar dark color="#999" backgroundColor="#f5f5f5" shadow left-icon="left" leftText="返回"
						rightText="设置" title="自定义颜色" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义高度" subTitle="使用 height 修改组件高度" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<view class="box-bg">
					<uni-nav-bar height="65px" dark shadow left-icon="left" leftText="返回" rightText="设置"
						title="自定义高度" />
				</view>
			</view>
		</uni-section>
		<uni-section title="自定义内容" subTitle="使用 left/right/default 插槽自定义内容" type="line" style="margin-bottom: 3px;">
			<view class="box-bg">
				<uni-nav-bar>
					<template #left>
						<view class="city">
							<view>
								<text class="uni-nav-bar-text">{{ city }}</text>
							</view>
							<uni-icons type="arrow-down" size="18"></uni-icons>
							<uni-icons type="arrow-left" size="30"></uni-icons>

						</view>
					</template>
					<view class="input-view">
						<uni-icons t="input-uni-icon" type="search" size="18" color="#999" />
						<input confirm-type="search" class="nav-bar-input" type="text" placeholder="输入搜索关键词"
							@confirm="confirm" />
					</view>
					<template #right>
						<view class="city">
							搜索
						</view>
					</template>
				</uni-nav-bar>
			</view>
		</uni-section>


	</view>
</template>
<script setup>
import { ref } from 'vue'
import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'

// 响应式数据
const city = ref('北京')

// 方法定义
const back = () => {
	uni.navigateBack({
		delta: 1
	})
}

const test = () => {
	uni.showActionSheet({
		itemList: ['A', 'B', 'C'],
		success: function (res) {
			console.log('选中了第' + (res.tapIndex + 1) + '个按钮');
		},
		fail: function (res) {
			console.log(res.errMsg);
		}
	});
}

const showMenu = () => {
	uni.showToast({
		title: '菜单'
	})
}

const clickLeft = () => {
	uni.showToast({
		title: '左侧按钮'
	})
}

const search = () => {
	uni.showToast({
		title: '搜索'
	})
}

const showCity = () => {
	uni.showToast({
		title: '选择城市'
	})
}

const scan = () => {
	uni.showToast({
		title: '扫码'
	})
}

const confirm = () => {
	uni.showToast({
		title: '搜索'
	})
}


</script>
<style lang="scss">
$nav-height: 30px;

.box-bg {
	background-color: #F5F5F5;
	padding: 5px 0;
}

.city {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	// width: 160rpx;
	margin-left: 4px;
}

.input-view {
	/* #ifndef APP-PLUS-NVUE */
	display: flex;
	/* #endif */
	flex-direction: row;
	// width: 500rpx;
	flex: 1;
	background-color: #f8f8f8;
	height: $nav-height;
	border-radius: 15px;
	padding: 0 15px;
	flex-wrap: nowrap;
	margin: 7px 0;
	line-height: $nav-height;
}

.input-uni-icon {
	line-height: $nav-height;
}

.nav-bar-input {
	height: $nav-height;
	line-height: $nav-height;
	/* #ifdef APP-PLUS-NVUE */
	width: 370rpx;
	/* #endif */
	padding: 0 5px;
	font-size: 12px;
	background-color: #f8f8f8;
}
</style>

<template>
	<scroll-view enable-back-to-top="true" class="container">
		<!-- 原有内容包裹v-if -->
		<view>
			<uni-nav-bar :fixed="true" :border="false" status-bar title="模版" style="font-weight: bold;" />
			<view class="content">

				<view class="section" v-for="(section, index) in sections" :key="index">
					<text class="section-title">{{ section.title }}</text>
					<br>
					<text class="section-subtitle">{{ section.subtitle }}</text>
					<scroll-view v-if="section.type === 'phone'" scroll-x="true" class="image-scroll">
						<view class="photo-frame" v-for="(image, imgIndex) in section.images" :key="imgIndex">
							<view class="image-container">
								<!-- <image :src="image" class="image-content" /> -->
								<!-- 修改图片元素，添加点击事件 -->
								<image :src="image" class="image-content" @click="openFullscreen(image, section)" />
							</view>
							<view class="frame-footer">
								<!-- <text class="watermark-line">{{ section.watermark.brand }}</text> -->
								<image :src="section.watermark.brandLogo" class="watermark-brand-logo"
									mode="aspectFit" />

								<text class="watermark-line">{{ section.watermark.camera }}</text>
								<text class="watermark-line">{{ section.watermark.lens }}</text>
							</view>
						</view>
					</scroll-view>
					<scroll-view v-else-if="section.type === 'pc'" scroll-x="true" class="image-scroll pc-scroll">
						<view class="photo-frame" v-for="(image, imgIndex) in section.images" :key="imgIndex">
							<view class="image-container pc-container">
								<!-- <image :src="image" class="image-content pc-content" /> -->
								<!-- 修改图片元素，添加点击事件 -->
								<image :src="image" class="image-content pc-content"
									@click="openFullscreen(image, section)" />
							</view>
							<view class="frame-footer">
								<!-- <text class="watermark-line">{{ section.watermark.brand }}</text>
							  -->
								<image :src="section.watermark.brandLogo" class="watermark-brand-logo"
									mode="aspectFit" />
								<text class="watermark-line">{{ section.watermark.camera }}</text>
								<text class="watermark-line">{{ section.watermark.lens }}</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
		<view>
			<!-- 全屏展示层 -->
			<uni-transition mode-class="fade" duration="400" :show="showFullscreen" class="fullscreen-container"
				@click="closeFullscreen">
				<view class="photo-frame fullscreen-frame" :class="{ 'pc-frame': selectedSection?.type === 'pc' }">
					<view class="image-container" :class="{ 'pc-container': selectedSection?.type === 'pc' }">
						<image :src="selectedImage" class="image-content"
							:class="{ 'pc-content': selectedSection?.type === 'pc' }" />
					</view>
					<view class="frame-footer" :class="{ 'pc-footer': selectedSection?.type === 'pc' }">
						<image :src="selectedSection?.watermark.brandLogo" class="watermark-brand-logo"
							mode="aspectFit" />
						<text class="watermark-line">{{ selectedSection?.watermark.camera }}</text>
						<text class="watermark-line">{{ selectedSection?.watermark.lens }}</text>
					</view>
				</view>
			</uni-transition>
		</view>

		<view class="edgeInsetBottom"></view>
		<view class="fixedView"></view>
	</scroll-view>
</template>

<script setup>
	import uniIcons from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
	import {
		ref
	} from 'vue';
	// 添加状态
	const showFullscreen = ref(false);
	const selectedImage = ref('');
	const selectedSection = ref(null);
	const touchStartX = ref(0);

	const openFullscreen = (image, section) => {
		selectedImage.value = image;
		selectedSection.value = section;
		showFullscreen.value = true;
		// 调用hideTabBar方法
		uni.hideTabBar();
	};

	const closeFullscreen = () => {
		showFullscreen.value = false;

		uni.showTabBar();
	};


	const sections = ref([{
			title: '富士胶韵',
			subtitle: '在时光长廊，留下复古影像。',
			type: 'phone',
			images: [
				'https://pic1.imgdb.cn/item/67a63dafd0e0a243d4fca7ec.jpg',
				'https://haowallpaper.com/link/common/file/getCroppingImg/5daf14db79a4176a7875155879eaf76d',
				'https://haowallpaper.com/link/common/file/getCroppingImg/c141f81b305795fd463216030ecd244d',

			],
			watermark: {
				brandLogo: '/static/brands/Fujifilm_Color.png',
				camera: 'Shot on X-T5',
				lens: 'XF33mmF1.4R LM WR'
			},
		},
		{
			title: '徕镜传奇',
			subtitle: '于岁月长河，留下经典影像。',
			type: 'pc',
			images: [
				'https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592',
				'https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592',
				'https://haowallpaper.com/link/common/file/getCroppingImg/16144648753630592',
			],
			watermark: {
				brandLogo: '/static/brands/Leica_Color.png',
				camera: 'Shot on M11',
				lens: 'Summilux-M 35mm f/1.4'
			},
		}
	]);
</script>

<style lang="scss">
	::-webkit-scrollbar {
		display: none;
	}

	uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
		display: none
	}

	.container {
		font-family: 'MiSans';
		overflow: hidden;
		/* 隐藏滚动条并禁用滚动 */
	}

	.content {
		padding: 20rpx;
		display: flex;
		flex-direction: column;

	}

	.section {
		margin-bottom: 40rpx;
	}

	.section-title {
		font-size: 36rpx;
		margin-left: 10rpx;
		font-weight: bold;
		margin-bottom: 10rpx;
	}

	.section-subtitle {
		margin-left: 10rpx;
		font-size: 28rpx;
		color: #888;
		margin-bottom: 20rpx;
	}

	.image-scroll {
		white-space: nowrap;
		width: 100%;
		margin-top: 10rpx;
		height: 680rpx;
		overflow-x: auto;



		.image-container {
			display: inline-block;
			margin-right: 10rpx;

			.image-wrapper {
				position: relative;
				background-color: white; // 白色背景
				padding: 10rpx; // 白框宽度
				border-radius: 12rpx; // 圆角
				box-shadow: 0 4rpx 8rpx rgba(0, 0, 0, 0.1); // 可选：添加阴影

				.image-item {
					display: block;
					height: 500rpx;
					width: 40vw;
					border-radius: 8rpx; // 图片圆角
				}

				.watermark {
					position: absolute;
					bottom: 10rpx; // 调整水印位置到白框底部
					left: 10rpx; // 水印靠左对齐
					right: 10rpx; // 水印靠右对齐
					text-align: center; // 水印居中
					color: rgba(0, 0, 0, 0.8); // 水印文字颜色
					font-family: Arial, sans-serif;
					pointer-events: none;



					.watermark-brand {
						font-size: 24rpx;
						font-weight: bold;
						display: block;
					}

					.watermark-camera {
						font-size: 20rpx;
						display: block;
						margin-top: 4rpx;
					}

					.watermark-lens {
						font-size: 18rpx;
						display: block;
						margin-top: 2rpx;
						color: rgba(0, 0, 0, 0.7);
					}
				}
			}
		}
	}

	.photo-frame {
		display: inline-block;
		background: white;
		border-radius: 12rpx;
		margin-right: 20rpx;
		box-shadow: 0 4rpx 12rpx rgba(0, 0, 0, 0.1);

		// 手机样式
		.image-container {
			padding: 12rpx;

			.image-content {
				display: block;
				height: 500rpx;
				width: 40vw;
				border-radius: 8rpx;
			}
		}

		// 白底水印区域
		.frame-footer {
			padding: 16rpx 20rpx;
			text-align: center;

			// border-top: 2rpx solid #eee;
			.watermark-brand-logo {
				width: 120rpx;
				height: 40rpx;
				// margin-bottom: 8rpx;
				// display: block;
				// margin: 0 auto;
			}

			.watermark-line {
				display: block;
				font-family: Arial, sans-serif;
				text-align: center;

				&:nth-child(1) {
					font-size: 24rpx;
					font-weight: bold;
					color: #333;
				}

				&:nth-child(2) {
					font-size: 20rpx;
					color: #666;
					margin-top: 4rpx;
				}

				&:nth-child(3) {
					font-size: 18rpx;
					color: #888;
					margin-top: 2rpx;
				}
			}
		}
	}

	// 电脑样式
	.pc-scroll {
		.photo-frame {
			.pc-container {
				padding: 12rpx;

				.pc-content {
					height: 460rpx;
					width: 80vw;
					// width: 100%;
				}
			}

			.frame-footer {
				padding: 20rpx 30rpx;
				text-align: center;

				.watermark-brand-logo {

					width: 140rpx;
					height: 48rpx;
				}

				.watermark-line {
					&:nth-child(1) {
						font-size: 28rpx;
					}

					&:nth-child(2) {
						font-size: 24rpx;
					}

					&:nth-child(3) {
						font-size: 22rpx;
					}
				}
			}
		}
	}

	// 全屏容器样式
	.fullscreen-container {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: white;
		z-index: 999;
		display: flex;
		justify-content: center;
		align-items: center;
		// animation: fade-in .3s ease;
		overflow: hidden;
	}

	// 复用原有photo-frame样式
	.fullscreen-frame {
		width: 90%;
		max-width: 800rpx;
		margin: 0 auto;
		box-shadow: 0 8rpx 24rpx rgba(0, 0, 0, 0.1);

		// 手机全屏样式
		.image-container {
			padding: 20rpx;
			display: flex !important; // 启用flex布局
			justify-content: center; // 水平居中

			.image-content {
				width: 80% !important;
				height: 70vh;


				border-radius: 12rpx;
			}
		}

		// 电脑全屏样式
		&.pc-frame {
			max-width: 1200rpx;

			.pc-container {
				padding: 30rpx;

				.pc-content {
					height: 460rpx;
					width: 80vw !important;
				}
			}

			.pc-footer {
				padding: 30rpx 40rpx;

				.watermark-brand-logo {
					width: 160rpx !important;
					height: 48rpx !important;
				}

				.watermark-line {
					&:nth-child(2) {
						font-size: 28rpx !important;
					}

					&:nth-child(3) {
						font-size: 26rpx !important;
					}
				}
			}
		}
	}

	// 动画效果
	@keyframes fade-in {
		from {
			transform: scale(0.5);
			opacity: 0;
		}

		to {
			transform: scale(1);
			opacity: 1;
		}
	}

	.edgeInsetBottom {
		width: 750rpx;
		height: var(--window-bottom);
		background-color: #FFFFFF;
	}

	.fixedView {
		position: fixed;
		width: 750rpx;
		height: 30px;
		bottom: var(--window-bottom);
	}
</style>
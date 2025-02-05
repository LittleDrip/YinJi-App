<template>
    <view class="container">
        <custom-navbar title="个人信息" />
        <view class="content">
            <!-- 个人信息内容 -->	<view class="container">
				13123123
			</view><view class="container">
				13123123
			</view><view class="container">
				13123123
			</view>
        </view>
    </view>
</template>

<script setup>
import CustomNavbar from '@/components/custom-navbar/custom-navbar.vue'
</script>

<style lang="scss">
.container {
    // min-height: 100vh;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));

    .content {
        margin-top: calc(var(--status-bar-height) + 44px);
        padding: 20px;
    }
}
</style>
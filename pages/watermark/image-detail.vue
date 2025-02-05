<template>
    <view class="detail-container">
        <image src="/static/logo.png" class="detail-image" :class="{ 'image-show': isShow }" />
        <text class="detail-text" :class="{ 'text-show': isShow }">123</text>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isShow = ref(false);

onMounted(() => {
    setTimeout(() => {
        isShow.value = true;
    }, 100);
});
</script>

<style>
.detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #000;
}

.detail-image {
    width: 750rpx;
    height: 750rpx;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
}

.image-show {
    opacity: 1;
    transform: scale(1);
}

.detail-text {
    margin-top: 30rpx;
    color: #fff;
    font-size: 32rpx;
    opacity: 0;
    transform: translateY(20rpx);
    transition: all 0.3s ease 0.2s;
}

.text-show {
    opacity: 1;
    transform: translateY(0);
}
</style>
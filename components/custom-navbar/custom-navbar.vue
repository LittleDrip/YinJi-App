<template>
    <view class="custom-navbar" :style="{ paddingTop: statusBarHeight + 'px' }">
        <view class="navbar-content">
            <text class="navbar-title">{{ title }}</text>
        </view>
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
    title: {
        type: String,
        default: ''
    }
})

const statusBarHeight = ref(0)

onMounted(() => {
    // 获取状态栏高度
    uni.getSystemInfo({
        success: (res) => {
            statusBarHeight.value = res.statusBarHeight
        }
    })
})
</script>

<style lang="scss">
.custom-navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    .navbar-content {
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);

        .navbar-title {
            font-size: 16px;
            font-weight: 500;
            color: #333;
        }
    }
}
</style>
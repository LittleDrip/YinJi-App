<template>
    <view class="container">
        <uni-nav-bar  :fixed="true" shadow status-bar left-icon="left" left-text="返回" title="自定义导航栏"
        	@clickLeft="back" />
        <view class="">
        	
        </view>
    </view>
</template>

<script setup>
import { ref } from 'vue'
import uniIcons  from '@/uni_modules/uni-icons/components/uni-icons/uni-icons.vue'
import uniNavBar from '@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.vue'
</script>

<style lang="scss">
// .container {
//     min-height: 100vh;
//     background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.4));

// }
</style>
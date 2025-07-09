<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition 
        :name="route.meta?.transition || 'fade'"
        mode="out-in"
        appear
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
}

#app {
  height: 100%;
}

/* 路由转场动画 */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-100px) scale(0.98);
  filter: blur(2px);
}

.slide-left-leave-to {
  opacity: 0;
  transform: translateX(50px) scale(1.02);
  filter: blur(2px);
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(100px) scale(0.98);
  filter: blur(2px);
}

.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-50px) scale(1.02);
  filter: blur(2px);
}

/* 页面进入动画 */
.page-enter-active {
  animation: pageSlideIn 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
}

@keyframes pageSlideIn {
  0% {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
    filter: blur(4px);
  }
  50% {
    opacity: 0.8;
    transform: translateY(10px) scale(0.98);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
}

/* 加载状态动画 */
.loading-enter-active {
  animation: loadingPulse 0.8s ease-in-out;
}

@keyframes loadingPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
}

/* 平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 优化渲染性能 */
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* 减少重绘 */
.router-view {
  will-change: transform, opacity;
}
</style>
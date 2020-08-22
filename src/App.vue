<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="彩虹阅读"></mt-header>

    <!-- 主体 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab app-bottom">
      <router-link id="defaultTab" class="mui-tab-item" to="/bookshelf">
        <span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/concentration">
        <span class="mui-icon mui-icon-navigate"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/discovery">
        <span class="mui-icon mui-icon-search">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">发现</span>
      </router-link>
      <router-link class="mui-tab-item" to="/myself">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">我</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
  import mui from "./lib/mui/js/mui.js";

  export default {
    mounted() {
      mui("body").on("tap", "a", function () {
        document.location.href = this.href;
      });
    },
  };
</script>

<style lang="scss" scoped>
  .app-container {
    padding-top: 40px;
    overflow-x: hidden;
  }
  * {
    touch-action: pan-y;
  }
  .mui-segmented-control .mui-control-item {
    line-height: 50px;
    width: 100%;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.3s ease;
  }
</style>
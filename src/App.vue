<template>
  <div class="app-container">
    <!-- 顶部 -->
    <mt-header fixed title="彩虹阅读"></mt-header>

	<!-- 主体 -->
	<router-view></router-view>

    <!-- 顶部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link id="defaultTab" class="mui-tab-item" to="/bookshelf">
				<span class="mui-icon mui-icon-extra mui-icon-extra-xiaoshuo"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/concentration">
				<span class="mui-icon mui-icon-navigate"></span>
				<span class="mui-tab-label">精选</span>
			</router-link>
			<router-link class="mui-tab-item" to="/discovery">
				<span class="mui-icon mui-icon-navigate"><span class="mui-badge">9</span></span>
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
  
</script>

<style lang="scss" scoped>
  .app-container {
    padding-top: 40px;
  }
</style>
<template>
  <div class="app">
    <nav class="nav">
      <router-link to="/" class="nav-link">首页</router-link>
      <router-link to="/about" class="nav-link">关于</router-link>
    </nav>
    <router-view class="view" />
  </div>
</template>

<script>
/**
 * 根组件
 * @description 提供应用的基础布局和导航
 */
export default {
  name: 'App'
};
</script>

<template>
  <div class="home-page">
    <van-card
      title="欢迎来到首页"
      desc="这是一个使用 Vue 2.x + Webpack 构建的 SPA 示例项目"
    />
    <van-divider />
    <van-row gutter="20">
      <van-col span="12">
        <van-tag type="primary" size="large">Vue Router</van-tag>
        <p class="mt-2">使用 Vue Router 进行页面导航</p>
      </van-col>
      <van-col span="12">
        <van-tag type="success" size="large">Tailwind CSS</van-tag>
        <p class="mt-2">使用 Tailwind CSS 构建现代化界面</p>
      </van-col>
    </van-row>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
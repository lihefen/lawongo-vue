<template>
  <div class="home-page">
    <common-header title="首页" />
    <div class="content">
      <van-cell-group>
        <van-cell title="Vue 2.7 + Vant" value="多页面应用" />
        <van-cell title="技术栈" value="Sass + vw适配" />
      </van-cell-group>
      <van-button type="primary" block @click="showToast">点击测试</van-button>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
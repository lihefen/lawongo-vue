<template>
<div class="banner">
  <div class="banner-left">
    <div class="banner-left-title">
      <span class="banner-left-title-time">10 s</span> call back from an online lawyer
    </div>
    <div class="banner-left-desc">
      Number of lawyers online：<span class="banner-left-desc-number">500</span> people
    </div>
  </div>
  <div class="banner-right">
    <img src="../assets/banner.png" alt="">
  </div>
</div>
</template>

<style lang="scss" scoped>
.banner {
  background: linear-gradient(180.00deg, rgba(50, 255, 78, 0.27),rgba(255, 255, 255, 0.27) 99%);
  width: 100%;
  height: 658px;
  display: flex;
  position: relative;
  overflow: hidden;

  &-left {
    margin-top: 72px;
    margin-left: 44px;
    &-title {
      width: 414px;
      font-size: 44px;
      line-height: 50px;
      font-weight: 700;
      font-style: italic;
      color: rgba(6, 148, 86, 1);
      &-time {
        color: rgba(255, 125, 20, 1);
      }
    }
    &-desc {
      margin-top: 44px;
      width: 308px;
      font-size: 24px;
      line-height: 34px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
      &-number {
        color: rgba(255, 59, 59, 1);
      }
    }
  }

  &-right {
    width: 486px;
    // height: 400px;
    position: absolute;
    right: -50px;
    top: -90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
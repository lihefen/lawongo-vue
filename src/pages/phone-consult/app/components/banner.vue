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
  height: 329px;
  display: flex;
  position: relative;
  overflow: hidden;

  &-left {
    margin-top: 36px;
    margin-left: 22px;
    &-title {
      width: 207px;
      font-size: 22px;
      line-height: 25px;
      font-weight: 700;
      font-style: italic;
      color: rgba(6, 148, 86, 1);
      &-time {
        color: rgba(255, 125, 20, 1);
      }
    }
    &-desc {
      margin-top: 22px;
      width: 154px;
      font-size: 12px;
      line-height: 17px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      &-number {
        color: rgba(255, 59, 59, 1);
      }
    }
  }

  &-right {
    width: 243px;
    // height: 200px;
    position: absolute;
    right: -25px;
    top: -45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
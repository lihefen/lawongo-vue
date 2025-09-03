<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-08-08 12:52:51
-->
<template>
  <div class="main">
        <div class="step">
            <div class="bar" :style="{width: (activeIndex + 1) * 20 + '%'}"></div>
        </div>
        <div class="stepText">{{activeIndex + 1 }}/5</div>
        <div class="title">
            <span class="tag">{{ activeIndex + 1 }}</span>{{questionList[activeIndex].title }}
        </div>
        <div class="content">
            <a href="javascript:;"  class="item" :class="{'active': Number(currentNum) === index}" @click="selectOption(index)" v-for="(item,index) in questionList[activeIndex].options" :key="index + 88787">
               {{ item }}
            </a>
          
        </div>
        <a href="javascript:;" class="backBtn" v-if="activeIndex > 0" @click="back"></a>
        <a href="javascript:;" class="submitBtn" @click="submit"></a>

        <div class="btmLogo"></div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
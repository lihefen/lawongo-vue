<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-07-28 19:33:12
-->
<template>
  <div class="main">
        <div class="banner"></div>
        <div class="title1"></div>
        <div class="bar"></div>
        <div class="registerMain">
            <div class="input phoneInput">
                <span class="phoneIcon"></span>
                <input type="text" placeholder="Phone Number"></input>
            </div>

            <div class="input sendInput">
                <input type="text" placeholder="Verification Code"></input>
                <a href="javascript:;" class="sendBtn">send</a>
            </div>
            <div class="privacy">
                <van-checkbox v-model="checked"></van-checkbox>
                I accept these <span>Terms of Use</span> and <span> Privacy Policy</span>
            </div>
            <a href="javascript:;" class="suggestionsBtn"></a>
        </div>
        <!-- <van-popup v-model="showSuccessDialog">内容</van-popup> -->
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-08-08 12:49:05
-->
<template>
  <div class="main">
        <div class="resultMain">
            <div class="resultTitle">Quiz Result：</div>
            <div class="resultContent">
                <div class="circle">
                    <div class="circleText">20<span>/100</span></div>
                    <div class="tag"></div>
                </div>
            </div>
        </div>
        <div class="resultText">High debt risk.Immediate </br>mediation is strongly advised！</div>
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
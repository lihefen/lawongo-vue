<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-08-23 10:50:53
-->
<template>
  <div class="main">
        <div class="step">
            <div class="stepItem active">
                <span>1</span>
                Questions
            </div>
            <div class="stepItem">
                <span>1</span>
                Questions
            </div>
            <div class="stepItem">
                <span>1</span>
                Questions
            </div>
        </div>
        <div class="dataWrap">
            
        </div>
        <div class="assistantTitle">— Assistant Lawyer in Communication —</div>
        <div class="robot">
            <div class="robotContent">
                <div class="robotPhoto"></div>
                <div class="robotText">
                    Hello, local lawyers are currently online, offering 24-hour legal advice, what questions would you like to ask?
                </div>
            </div>

            <div class="robotContent">
                <div class="robotPhoto"></div>
                <div class="robotText">
                    Many <span>local</span> lawyers are online.
                </div>
            </div>
        </div>
        <div class="lawerList">
            <Swiper class="lawerSwiper" :options="swiperOptionLawer">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
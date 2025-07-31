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

        </div>
        <div class="title2"></div>
        <div class="teamMain">
            <Swiper class="teamSwiper" :options="swiperOptionTeam">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo1"></div>
                                <div class="name">Lawyer Zhang </div>
                                <div class="starList">
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                    <span class="star"></span>
                                </div>
                            </div>
                            <div class="info">
                                <div class="year"><span>Duration：</span>8 years</div>
                                <div class="served"><span>served：</span>1000+person</div>
                                <div class="work">
                                    <span>Work area：</span>P2P Overdue，Credit Card Default，Multiple Loans
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="title3"></div>
        <div class="partnerMain">
            <Swiper class="partnerSwiper" :options="swiperOptionPartner">
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem1">
                    </div>
                </SwiperSlide>




            </Swiper>
        </div>
        <div class="title4"></div>
        <div class="voiceMain">
            <Swiper class="voiceSwiper" :options="swiperOptionVoice">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
        <div class="title5"></div>
        <div class="about-text1">-Core members of our team-</div>
        <div class="aboutImg"></div>
        <div class="about-text2">-A Trusted Debt Relief Partner-</div>
        <div class="platWrap">
            <div class="inner">
                <div>
                    <div class="num">170000<span>+</span></div>
                    <div class="text">Clients Enrolled</div>
                </div>

                <div>
                    <div class="num">500<span>+</span></div>
                    <div class="text">Dedicated Team</div>
                </div>

                <div>
                    <div class="num">500<span>4.8</span></div>
                    <div class="text">Dedicated Team</div>
                </div>
            </div>
        </div>
        <div class="title6"></div>
        <div class="fagMain">
            <van-collapse v-model="activeNames">
                <van-collapse-item title="标题1" name="1">
                    代码是写出来给人看的，附带能在机器上运行。
                </van-collapse-item>
                <van-collapse-item title="标题2" name="2">
                    技术无非就是那些开发它的人的共同灵魂。
                </van-collapse-item>
                <van-collapse-item title="标题3" name="3">
                    在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。
                </van-collapse-item>
            </van-collapse>
        </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
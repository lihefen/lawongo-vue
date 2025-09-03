<!--
 * @Description: 
 * @version: 
 * @Author: hean
 * @Date: 2025-07-28 11:42:11
 * @LastEditors: hean
 * @LastEditTime: 2025-08-08 12:55:13
-->
<template>
  <div class="main">
        <div class="banner"></div>
        <div class="title1"></div>
        <a href="javascript:;" @click="showeValuation = true" class="bar"></a>
        <div class="registerMain">
            <div class="input phoneInput">
                <span class="phoneIcon"></span>
                <input type="text" placeholder="Phone Number" v-model="mobileVal"></input>
            </div>

            <div class="input sendInput">
                <input type="text" v-model="codeVal" placeholder="Verification Code"></input>
                <a href="javascript:;" class="sendBtn" @click="sendCode">send</a>
            </div>
            <div class="privacy">
                <van-checkbox v-model="checked"></van-checkbox>
                I accept these <span>Terms of Use</span> and <span> Privacy Policy</span>
            </div>
            <a href="javascript:;" class="suggestionsBtn"></a>
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

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo2"></div>
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

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="person">
                                <div class="photo3"></div>
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
                            <img src="./images/photo_1.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_2.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_3.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_4.png" width="100%"  alt="">
                        </div>
                        <div class="text">
                            “When they said I qualified, it was like a stone had been lifted off of me that I had been carrying around.”
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="photo">
                            <img src="./images/photo_5.png" width="100%"  alt="">
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
                <div class="item">
                    <div class="num">170000<span>+</span></div>
                    <div class="text">Clients Enrolled</div>
                </div>

                <div class="item">
                    <div class="num">500<span>+</span></div>
                    <div class="text">Dedicated Team</div>
                </div>

                <div class="item">
                    <div class="num">500<span>4.8</span></div>
                    <div class="text">Dedicated Team</div>
                </div>
            </div>
        </div>
        <div class="title6"></div>
        <div class="fagMain">
            <van-collapse v-model="activeNames">
                <van-collapse-item :title="item.title" name="1" v-for="(item,index) in faqList" :key="index + 88787">
                   <div v-html="item.content"></div>
                </van-collapse-item>
             
            </van-collapse>
        </div>

        <div class="btmText">
            LawOnGo, Your legal advisor！
        </div>
        <a href="javascript:;" class="contactBtn"></a>

        <van-popup v-model="showeValuation">
            <div class="valuationDialog">
                <div class="main">
                    <a href="javascript:;" class="btn"></a>
                </div>
                <a href="javascript:;" class="closeBtn" @click="showeValuation = false"></a>
            </div>
        </van-popup>


        <van-popup v-model="showSuccessDialog">

            <div class="successDialog">
                <div class="successIcon"></div>
                <div class="successTitle">Successfully</div>
                <div class="successText">Our mediation advisor will <br/>
                    contact you via WhatsApp.
                </div>
                <a href="javascript:;" class="successBtn1"></a>
                <a href="javascript:;" class="successBtn2"></a>
                <a href="javascript:;" class="closeBtn" @click="showSuccessDialog = false"></a>
            </div>
        </van-popup>

        <van-popup v-model="showAgreementDialog" position="bottom">
            <div class="agreementDialog">
                <div class="main">
                    <div class="content">
                        MOHON UNTUK MEMBACA SELURUH KEBIJAKAN PRIVASI DENGAN CERMAT DAN SEKSAMA SEBELUM MENGGUNAKAN LAYANAN YANG TERSEDIA DALAM LOWONGO.

                        PERTIWI sangat menghargai dan menjunjung tinggi perlindungan data dan Informasi Pribadi Anda, sehingga PERTIWI berkomitmen untuk melindungi privasi Anda dan memastikan bahwa privasi Anda tidak dapat digunakan oleh pihak-pihak yang tidak bertanggung jawab. Kebijakan Privasi ini memuat penMOHON UNTUK MEMBACA SELURUH KEBIJAKAN PRIVASI DENGAN CERMAT DAN SEKSAMA SEBELUM MENGGUNAKAN LAYANAN YANG TERSEDIA DALAM LOWONGO.

                    </div>
                    <a href="javascript:;" class="agreementBtn">Get It</a>
                </div>
                <a href="javascript:;" class="closeBtn" @click="showAgreementDialog = false"></a>
               
            </div>
        </van-popup>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
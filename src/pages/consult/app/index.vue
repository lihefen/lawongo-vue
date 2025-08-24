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
            <div class="dataContent">
                <div class="dataItem">
                    <div class="dataNum">800<span>+</span></div>
                    <div class="dataText">Consultants</div>
                </div>
                <div class="dataItem">
                    <div class="dataNum">50<span>+</span></div>
                    <div class="dataText">Lawyers</div>
                </div>
                <div class="dataItem">
                    <div class="dataNum"><span class="star"></span>4.9<span>/5.0</span></div>
                    <div class="dataText">Assessment</div>
                </div>
            </div>
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
                            <div class="photo">
                                <div class="photoImg photoImg1"></div>
                                <div class="logo"></div>
                            </div>
                            <div class="info">
                                <div class="name">
                                    <div class="nameText">Lawyer Riza</div>
                                    <div class="star"><span></span>4.8</div></div>
                                <div class="experience">
                                    <span class="year">3 years</span>
                                    <span class="order">80 Consultants</span>
                                </div>
                                <div class="tagList">
                                    <div class="tagItem">
                                        <span class="tag">Family Wedding</span>
                                    </div>
                                    <div class="tagItem">
                                        <span class="tag">Criminal cases</span>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="photo">
                                <div class="photoImg photoImg2"></div>
                                <div class="logo"></div>
                            </div>
                            <div class="info">
                                <div class="name">
                                    <div class="nameText">Lawyer Riza</div>
                                    <div class="star"><span></span>4.8</div></div>
                                <div class="experience">
                                    <span class="year">3 years</span>
                                    <span class="order">80 Consultants</span>
                                </div>
                                <div class="tagList">
                                    <div class="tagItem">
                                        <span class="tag">Family Wedding</span>
                                    </div>
                                    <div class="tagItem">
                                        <span class="tag">Criminal cases</span>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="content">
                            <div class="photo">
                                <div class="photoImg photoImg3"></div>
                                <div class="logo"></div>
                            </div>
                            <div class="info">
                                <div class="name">
                                    <div class="nameText">Lawyer Riza</div>
                                    <div class="star"><span></span>4.8</div></div>
                                <div class="experience">
                                    <span class="year">3 years</span>
                                    <span class="order">80 Consultants</span>
                                </div>
                                <div class="tagList">
                                    <div class="tagItem">
                                        <span class="tag">Family Wedding</span>
                                    </div>
                                    <div class="tagItem">
                                        <span class="tag">Criminal cases</span>
                                    </div>
                                </div>
                               
                               
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div class="guardBar">
            <div class="guardIcon"></div>
            <div class="guardText">Guardian mode enabled</div>
            <a href="javascript:;" class="arrow"></a>
        </div>

        <div class="askInfo">
            <div class="askTop">
                <div class="askTitle">Suppose you want to ask.</div>
                <a href="javascript:;" class="changeBtn"><span></span>change</a>
            </div>
           <div class="askContent">
                <span class="askTag">Work accident</span>
                <span class="askTag">Criminal cases</span>
                <span class="askTag">Labor Disputes</span>
                <span class="askTag">Property Disputes</span>
                <span class="askTag">Family Wedding</span>
           </div>
        </div>
        <div class="consultListWrap">
            <div class="consultList">
                <div class="consultTop">
                    <div class="consultTitle">
                        Next Work Injury Treatment Process Attorneys Waiting for Access
                    </div>
                    <div class="position"><span></span>Peradi</div>
                </div>
                
                <Swiper class="consultSwiper" :options="swiperOptionConsult">
                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="content">
                                <div class="photo">
                                    <div class="photoImg photoImg1"></div>
                                    <div class="logo"></div>
                                    <div class="topInfo">
                                        <div class="star"><span></span>4.8</div>
                                        <div class="name">Lawyer Riza</div>
                                        <div class="tahun">
                                            30 tahun
                                        </div>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="infoItem">
                                        <div class="sec"><span>18</span> sec.</div>
                                        <div class="secText">Response <br/>Speed</div>
                                    </div>
                                    <div class="infoItem">
                                        <div class="case"><span>9939</span> products</div>
                                        <div class="caseText">Resolved <br/>cases</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="askInput">
            <input class="askInputText" type="text" placeholder="Send message...">
            <a href="javascript:;" class="askInputBtn">
            </a>
        </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
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
            <div class="stepArrowWrap">
                <div class="stepArrow"></div>
            </div>
            <div class="stepItem">
                <span>2</span>
                Match
            </div>
            <div class="stepArrowWrap">
                <div class="stepArrow"></div>
            </div>
            <div class="stepItem">
                <span>3</span>
                Consultation
            </div>
        </div>
        <div class="timeWrap">
            <div class="text">You have 40 minutes to consult with a lawyer.</div>
            <div class="time"><div class="timeIcon"></div><van-count-down  format="mm:ss" :time="time" @finish="finish" /></div>
        </div>
        <div class="personWrap">
            <div class="personContent">
                <div class="personInfo">
                    <div class="name">Riza zafita rizki</div>
                    <div class="tagWrap">
                        <span class="tag">Currently Online</span>
                        <span class="tag">1V1 Service</span>
                        <span class="tag">Currently Online</span>
                    </div>
                    <div class="other">
                        <div class="yearWrap"><span class="yarIcon"></span>Served: 8 years </div>
                        <div class="faceWrap"><span class="faceIcon"></span>4.8<span class="starIcon"></span></div>
                    </div>

                </div>
                <div class="logo"></div>
                <div class="avatar avatar1"></div>
                
            </div>
           
           
        </div>
        <div class="dataWrap">
            <div class="dataContent">
                <div class="dataItem">
                    <div class="dataNum">8000<span>+</span></div>
                    <div class="dataText">Suceess stories</div>
                </div>
                <div class="dataItem">
                    <div class="dataNum">50<span>+</span></div>
                    <div class="dataText">Registered Lawyers</div>
                </div>
                <div class="dataItem">
                    <div class="dataNum"><span class="star"></span>4.9<span>/5.0</span></div>
                    <div class="dataText">Excellent rating</div>
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
                <SwiperSlide v-for="(item, index) in lawyerList" :key="index + 189">
                    <div class="swiperItem">
                        <div class="content">
                            <div class="photo">
                                <div class="photoImg" :class="`photoImg${index + 1}`"></div>
                                <div class="logo"></div>
                            </div>
                            <div class="info">
                                <div class="name">
                                    <div class="nameText">{{ item.name }}</div>
                                    <div class="star"><span></span>4.8</div></div>
                                <div class="experience">
                                    <span class="year">{{ item.year }} years</span>
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
                    <SwiperSlide v-for="(item, index) in consultList" :key="index + 389">
                        <div class="swiperItem">
                            <div class="content">
                                <div class="photo">
                                    <div class="photoImg" :class="`photoImg${index + 1}`"></div>
                                    <div class="logo"></div>
                                    <div class="topInfo">
                                        <div class="star"><span></span>4.8</div>
                                        <div class="name">{{ item.name }}</div>
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
                                <div class="rp">Rp100<a href="javascript:;" class="consultBtn"  @click="consultHandle(6)" >Consult</a></div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div v-for="(item, index) in messageList" :key="index + 989">
            <div class="commentWrap" v-if="item.type == 'user'">
                <div class="commentList">
                    <div class="textContent">
                        {{ item.text }}
                    </div>
                    <div class="avatar"></div>
                </div>
            </div>

            <div class="lawyerWrap" v-if="item.type == 'lawyer'">
                <div class="lawyerList">
                    <div class="avatar1"></div>
                    <div class="textContent" v-html="item.text">
                    </div>
                </div>
            </div>
        </div>
        
        <div class="overText">— The consultation is over —</div>

        <div class="evaluationText">Overall Service Evaluation</div>
        
        <div class="evaluationWrap">
            <div class="evaluationList">
                <a href="javascript:;" class="evaluationBtn evaluationIcon1"></a>
                <a href="javascript:;" class="evaluationBtn evaluationIcon2"></a>
                <a href="javascript:;" class="evaluationBtn evaluationIcon3"></a>
                <a href="javascript:;" class="evaluationBtn evaluationIcon4"></a>
                <a href="javascript:;" class="evaluationBtn evaluationIcon5"></a>
            </div>
            <div class="evaluationTypeTitle">Select Project Type</div>
            <div class="evaluationTypeList">
                <a href="javascript:;" class="evaluationType evaluationTypeBtn">Contract disputes</a>
                <a href="javascript:;" class="evaluationType evaluationTypeBtn">Family Wedding</a>
            </div>
            <div class="evaluationTypeList">
                <a href="javascript:;" class="evaluationType evaluationTypeBtn">Property Disputes</a>
                <a href="javascript:;" class="evaluationType evaluationTypeBtn">Labor Disputes</a>
            </div>
        </div>

        <a href="javascript:;" class="continueBtn">Continue with Lawyer</a>

        <a href="javascript:;" class="chooseBtn">Choose another lawyer</a>

        <div class="legalWrap">
            <div class="legalMain">

            </div>
            
        </div>

        <div class="askInputWrap">
            <div class="askInput">
                <!-- <input class="askInputText" type="text" placeholder="Send message..." >
                -->
                <van-field
                v-model="message"
                rows="1"
                autosize
                type="textarea"
                placeholder="Send message..."
                />
                <a href="javascript:;"
                @click="sendMessage"
                class="askInputBtn" :class="message ? 'active' : ''" >
                </a>
            </div>
        </div>
        
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
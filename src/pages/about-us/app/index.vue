<template>
    <div class="main">
        <!-- <common-header title="Konsultasi Telepon Cepat" :showBack="true" backPath="/" /> -->
        <div class="banner">
        </div>

        <div class="videoContainer">
            <div class="videoList" ref="videoList">
                <div class="videoItem" v-for="item in videos" :key="item.id">
                    <iframe :src="item.url" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen />
                </div>
                <!-- 底部渐变遮罩，未展开时显示 -->
                <div class="list-fade" :class="{ 'is-hidden': isExpanded }"></div>
            </div>
            <!-- 展开更多按钮，未展开时显示 -->
            <div class="more-radios" @click="toggleList">
                <span>{{ isExpanded ? 'Show Less' : 'More Radios' }}</span>
                <van-icon name="arrow" class="more-radios-arrow" :class="{ 'is-rotated': isExpanded }" />
            </div>
        </div>
        <div class="mod team">
            <div class="title"><span></span>Core members of our team</div>

            <div>
                <Swiper class="teamSwiper" :options="swiperOptionTeam">
                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="photo photo1"></div>
                            <div class="mask">
                                <div class="name">Ettyta<br/> Ramadhani</div>
                                <div class="position">CEO</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="photo photo2"></div>
                            <div class="mask">
                                <div class="name">Nadya Nasya <br/>&nbsp</div>
                                <div class="position">BOC</div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="photo photo3"></div>
                            <div class="mask">
                                <div class="name">Riza Zafita<br/>&nbsp</div>
                                <div class="position">Lawyer</div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>


        <div class="mod swiperText">
            <div class="swiperWrap">
                <Swiper class="missionSwiper" :options="swiperOption">
                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="title"><span></span>Vision</div>
                            <div class="text">
                                <span> To</span> become Indonesia's leading online legal consultation
                                platform,centered
                                on delivering exceptional customer experience. We aim to set the industry benchmark,
                                promote fair access to legal services, and lead the digital transformation of the
                                legal
                                sector.
                            </div>
                        </div>

                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="title"><span></span>Values</div>

                            <div class="list">
                                <div class="item"><span class="icon2"></span>
                                    <div>Customers are priority</div>
                                </div>

                                <div class="item"><span class="icon3"></span>
                                    <div>Professionalism Transparency</div>
                                </div>

                                <div class="item"><span class="icon4"></span>
                                    <div>Fairness Innovation and Technology</div>
                                </div>
                            </div>
                        </div>

                    </SwiperSlide>


                    <SwiperSlide>
                        <div class="swiperItem">
                            <div class="title"><span></span>Mission</div>
                            <div class="text">
                                <span>Focus</span> on customer service,continuously providing legal services that
                                meet
                                user needs,supported by exceptional innovation and technology.Our goal is to make
                                our
                                platform the first choice for Indonesians to access high-quality,convenient,and
                                personalized legal services.
                            </div>
                        </div>

                    </SwiperSlide>

                </Swiper>
                <div class="swiper-pagination" slot="pagination"></div>
            </div>
        </div>
        

        <div class="mod journey">
            <div class="title"><span></span>Our Development Journey</div>
            <div class="journeyListWrap" :class="{ 'is-hidden': !showJourney }">
                <div class="journeyList">
                    <div class="journeyItem">
                        <div class="titleText">
                            <div class="tag">2023<div class="dot"></div></div>
                            <div>
                                <div>
                                    <div class="t1"><span class="innerText">Initial Concept:Responding to </span><span class="line"></span></div>
                                    
                                </div>
                                <div>
                                    <div class="t2"><span class="innerText">the"Silent Need"</span><span class="line"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="journeyText">
                            <div>As Indonesia's fintech industry rapidly develops,an increasing number of individual users and small merchants are falling into the quagmire of multiple lending and debt collection.We have observed that a significant number of users,when confronted with debt,are left in a state of confusion,fear,and a lack of resources or viable solutions.</div>

                            <div>Our team of passionate legal experts sees this as a mission, not just a job. We provide personalized, convenient consultations for issues like family matters or contract disputes, aiming to simplify legal support for everyone.</div>
                        </div>
                    </div>

                    <div class="journeyItem">
                        <div class="titleText">
                            <div class="tag">2024<div class="dot"></div></div>
                            <div>
                                <div>
                                    <div class="t1"><span class="innerText">The Launch of the </span><span class="line"></span></div>
                                    
                                </div>
                                <div>
                                    <div class="t2"><span class="innerText"> LawOnGo Platform</span><span class="line"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="journeyText">
                            <div>
                                • The LawOnGo project team was officially established in Jakarta,<br/>
                                • The prototype of the first-generation AI legal Q&A engine was developed.,<br/>
                                • Preliminary cooperation mechanisms were established with more than 10 local law firms.,<br/>
                                The debt mediation model process was designed, including:,<br/>
                                • User profile collection,<br/>
                                • Case pre-assessment,<br/>
                                • Generation of standardized mediation agreements,<br/>
                                • Verification of the successful payment mechanism,<br/>
                                Our services began to be open for testing to the first batch of real users.
                            </div>
                        
                        </div>
                    </div>


                    <div class="journeyItem">
                        <div class="titleText">
                            <div class="tag">2024<div class="dot"></div></div>
                            <div>
                                <div>
                                    <div class="t1"><span class="innerText">Completing the Integrated Loop </span><span class="line"></span></div>
                                    
                                </div>
                                <div>
                                    <div class="t2"><span class="innerText"> of"Consultation-Mediation-Signing"</span><span class="line"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="journeyText">
                            <div>
                                Over 30 law firms,creditor institutions,and mediation experts in Indonesia were partnered with to form a professional network.</br>
                                The total number of user consultations exceeded 10,000.Diversified service packages were introduced.</br>
                                The platform began to be recognized by the media and the industry as an"innovative representative in the debt mediation field.
                            </div>
                        </div>
                    </div>


                    <div class="journeyItem">
                        <div class="titleText">
                            <div class="tag">2025<div class="dot"></div></div>
                            <div>
                                <div>
                                    <div class="t1"><span class="innerText">Evolving into an </span><span class="line"></span></div>
                                    
                                </div>
                                <div>
                                    <div class="t2"><span class="innerText">"Intelligent Legal Platform"</span><span class="line"></span></div>
                                </div>
                            </div>
                        </div>
                        <div class="journeyText">
                            <div>
                                Upgraded the AI legal Q&A system to support preliminary screening of complex cases and situational simulation responses.<br/>
                                Established channels for synchronizing mediation agreements with financial institutions and arbitration bodies.<br/>
                                Expanded the contract service module to support the entire chain of contract drafting,review,translation,and signing.<br/>
                                Formed long-term partnerships with law schools and legal organizations to expand the impact of legal accessibility.<br/>
                                Launched the LawOnGo B2B service line to address compliance and debt management issues for small and medium-sized enterprises.<br/>
                                We are evolving from a"debt mediation tool"to a"legal partner in everyones pocket."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="javascript:;" @click="showJourneyList" class="journeyBtn" :class="{ 'active': showJourney }"></a>
        </div>


        <div class="mod life">
            <div class="title">
                <span class="lifeLeftIcon"></span>
                <span class="lifeText">Life at LawOnGo</span>
                <span class="lifeRightIcon"></span>
                <span class="lifeLine"></span>
            </div>
            <div class="text">Life in Pursuit of Dreams at LawOnGo</div>


            <div>
                <Swiper class="lifeSwiper" :options="swiperOptionLife">
                    <SwiperSlide>
                        <div class="swiperItem">
                            <img src="./images/life_img_1.png" width="100%" alt="">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="swiperItem">
                            <img src="./images/life_img_2.png" width="100%" alt="">
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div class="swiperItem">
                            <img src="./images/life_img_3.png" width="100%" alt="">
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>

        <div class="mod platform">
            <div class="title"><span></span>A Trustworthy Platform</div>
            <div class="brand">

            </div>
            <div class="line"></div>
            <div class="platData">
                <div class="leftFower"></div>
                <div class="dataContent">
                   <div>
                        <div class="data">Rp 93000000</div>
                        <div class="dataName">Total Debt Resolved</div>
                   </div>


                   <div>
                        <div class="data">4800+</div>
                        <div class="dataName">Clients Served</div>
                   </div>

                   <div >
                        <div  class="data">86.7%</div>
                        <div class="dataName">Success Rate</div>
                   </div>
                </div>
                <div class="rightFower"></div>
            </div>
        </div>


        <div class="logoBottom">

        </div>

    </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
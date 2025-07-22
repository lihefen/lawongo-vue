<template>
  <div class="main">
    <!-- <common-header title="Konsultasi Telepon Cepat" :showBack="true" backPath="/" /> -->
    <div class="banner">
    </div>
 
    <div class="videoList">
        <div>

            <iframe width="500" height="300" src="https://m.youtube.com/embed/Sy4ROOthOg4"frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
    <div class="mod team">
        <div class="title"><span></span>Core members of our team</div>
    </div>


    <div class="mod swiperText">
        <div class="swiperWrap">
            <Swiper class="missionSwiper" :options="swiperOption">
                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="title"><span></span>Vision</div>
                        <div class="text">
                            <span> To</span> become Indonesia's leading online legal consultation platform,centered on delivering exceptional customer experience. We aim to set the industry benchmark, promote fair access to legal services, and lead the digital transformation of the legal sector.
                        </div>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="title"><span></span>Values</div>
                        
                        <div class="list">
                            <div class="item"><span class="icon2"></span><div>Customers are priority</div></div>

                            <div class="item"><span class="icon3"></span><div>Professionalism Transparency</div></div>

                            <div class="item"><span class="icon4"></span><div>Fairness Innovation and Technology</div></div>
                        </div>
                    </div>

                </SwiperSlide>


                <SwiperSlide>
                    <div class="swiperItem">
                        <div class="title"><span></span>Mission</div>
                        <div class="text">
                            <span>Focus</span> on customer service,continuously providing legal services that meet user needs,supported by exceptional innovation and technology.Our goal is to make our platform the first choice for Indonesians to access high-quality,convenient,and personalized legal services.
                        </div>
                    </div>

                </SwiperSlide>
               
		    </Swiper>
		    <div class="swiper-pagination" slot="pagination"></div>
        </div>
    </div>


    <div class="logoBottom">

    </div>

  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
    components: {
        Swiper, 
        SwiperSlide,
    },
    name: 'consult',
    data() {
        return {
            swiperOptionLawer:{
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            swiperOptionConsult:{
                slidesPerView: "auto",
                spaceBetween: 10,
            }
        };
    },
    methods: {
        consultHandle(id){
           window.location.href = `lawongo://lawyerPayOneActivity?chatType=1&lawyerId=${id}`;
        }
    }
};
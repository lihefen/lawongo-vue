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
            }
        };
    },
    methods: {
    }
};
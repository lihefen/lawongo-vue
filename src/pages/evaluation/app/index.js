import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { Toast ,Checkbox,Popup} from 'vant';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
/**
 * 首页应用组件
 * @description 展示首页内容，包含Vant组件示例
 */
export default {
    components: {
        CommonHeader,
        Swiper, 
        SwiperSlide,
        Checkbox,
        Popup
    },
    name: 'HomeApp',
    data() {
        return {
            activeNames: ['1'],
            swiperOptionTeam:{
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            swiperOptionPartner:{
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            swiperOptionVoice:{
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            checked: false,
            showSuccessDialog:false,
            showAgreementDialog:false
        };
    },
    methods: {
    }
};
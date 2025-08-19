import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { sendCode } from 'services/sendCode';  
import { loginCode } from 'services/loginCode';
import { encryptDataWithRSA } from 'utils/encryptDataWithRSA.js';
import publicKey from 'utils/publicKey.js';
import { Toast ,Checkbox,Popup} from 'vant';
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
console.log(sendCode)
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
            showAgreementDialog:false,
            showeValuation:false,
            mobileVal: '',
            codeVal: '',
        };
    },
    methods: {
        async sendCode() {
            await sendCode({
                mobile: this.mobileVal,
            }).then(res => {
                console.log(res);
            });
        }
    }
};
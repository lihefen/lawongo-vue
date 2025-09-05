import CommonHeader from '@/components/CommonHeader.vue';
import { get } from 'lodash';
import { sendCode } from 'services/sendCode';  
import { loginCode } from 'services/loginCode';
import { encryptDataWithRSA } from 'utils/encryptDataWithRSA.js';
import publicKey from 'utils/publicKey.js';
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
            activeNames: ['0'],
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
            showPrivacyDialog:false,
            showeValuation:false,
            showUseAgreementDialog:false,
            mobileVal: '',
            codeVal: '',
            faqList: [
                
                {
                    title: 'How can LOG help to reduce your debt burden?',
                    content: 'LOG provides debt mediation, consolidation, relief, and credit advisory services. Our professional solutions help clients reduce financial pressure and rebuild strong credit.',
                    name: '0'
                },
                {
                    title: 'How to start consultation?',
                    content: `Simply click the 'Add Debt Information' button on the homepage to submit your basic debt details. Our specialist will reach out to you via phone or WhatsApp within 24 business hours. We appreciate your patience.`,
                    name: '1'
                },
                {
                    title: 'How much will LOG service charge?',
                    content: `LOG offers highly affordable consulting services with a two-part fee structure: consultation fee and success fee. The consultation fee is charged upfront before LOG initiates mediation services, while the success fee is only collected after the successful mediation. Our consultation fee is just Rp50,000 per 40-minute session`,
                    name: '2'
                },
                {
                    title: 'How long will it take to get the results after the consultation?',
                    content: `For your initial consultation, LOG will contact you within one business day to thoroughly understand and analyze your debt situation. The duration of the mediation process will depend on the complexity of your debts. Please rest assured that LOG will make every effort to provide you with the highest quality service`,
                    name: '3'
                },
                {
                    title: 'Is my private information at risk of leaking?',
                    content: `At LOG, we place the highest priority on user data security. The following stringent measures ensure your private information remains absolutely protected with zero risk of leakage:<br/>
                    1.All user data is stored using AES-256 encryption technology,the same standard employed by financial institutions.<br/>
                    2.Principle of Minimal Access:Only licensed lawyers/mediators who have passed thorough background checks may access information
                    Your Privacy is Guaranteed：Your disclosed debt details will never be used for any other purposes and all information remains protected under strict confidentiality protocols`,
                    name: '4'
                }
            ],
        };
    },
    methods: {
        async sendCode() {
           try {
                console.log(this.mobileVal)
                const dataText = JSON.stringify({
                    channel: 'io.lawongo.app',
                    mobile: this.mobileVal,
                    appName: 'LawOnGo'
                });
                const dataBody = encryptDataWithRSA(dataText,publicKey)
                const res = await sendCode({
                    data:dataBody,
                    env: 'proxyDev',
                });
                const msg = get(res,'msg','');
                const code = get(res,'code','-9999');
                if(code != '00000' ) {
                    Toast(msg)
                }else {
                    // showCode.value = true
                }
           } catch (error) {
                console.log(error)
           }
        },
        async loginCode() {
           try {
                const dataText = JSON.stringify({
                    aesKey:'rMM+4uHIkgfbhk2qOqPxzw==',
                    appName:'LawOnGo',
                    channel:'io.lawongo.app',
                    mobile:this.mobileVal,
                    vcode: this.codeVal
                });
                const dataBody = encryptDataWithRSA(dataText,publicKey)
                const res = await loginCode({
                    data:dataBody,
                    env: 'proxyDev',
                });
                const msg = get(res,'msg','');
                const code = get(res,'code','-9999');
                if(code != '00000' ) {
                    Toast(msg)
                }else {
                    this.showSuccessDialog = true
                }
           } catch (error) {
                console.log(error)
           }

        }
    }
};
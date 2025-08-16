import CommonHeader from '@/components/CommonHeader.vue';
import Banner from './components/banner.vue';
import ConsultationForm from './components/consultation-form/index.vue';
import { navigateTo } from '@/utils';
import { Toast } from 'vant';
import { officialInfo } from 'services/officialInfo.js';
export default {
    components: {
        CommonHeader,
        Banner,
        ConsultationForm
    },
    name: 'HomeApp',
    methods: {
        submit(data) {
            this.officialInfo();
            console.log('表单提交成功:', data);
        },
        async officialInfo() {
            await officialInfo({
                data:{
                    "type": "app", 
                    "mobileNumber": '081234567890',
                    "legalServices": '', 
                    "typeOfService": '',
                    "businessField": '',
                    "detailOfRequired": ''
                },
                env: 'proxyDev',
            });
        }
  }
};
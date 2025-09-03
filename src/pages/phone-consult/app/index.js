import CommonHeader from '@/components/CommonHeader.vue';
import Banner from './components/banner.vue';
import ConsultationForm from './components/consultation-form/index.vue';
import { Toast } from 'vant';
import { officialInfo } from 'services/officialInfo.js';
export default {
    components: {
        CommonHeader,
        Banner,
        ConsultationForm
    },
    data() {
        return {
            data:{
                mobileNumber:'',
                typeOfService:''
            }
        };
    },
    name: 'HomeApp',
    methods: {
        submit(data) {
            
            this.data = {
                ...this.data,
                mobileNumber:data.mobileNumber || '',
                typeOfService:data.typeOfService || ''
            }
            this.officialInfo();
        },
        async officialInfo() {
            console.log('this.data',this.data);
            const res = await officialInfo({
                data:{
                    "type": "app", 
                    "mobileNumber": this.data.mobileNumber,
                    "legalServices": '', 
                    "typeOfService": this.data.typeOfService.join(','),
                    "businessField": '',
                    "detailOfRequired": ''
                },
                env: 'proxyDev',
            });
            console.log('res',res);
            if(res == 'success'){
                Toast.success('Your request has been sent!');
                window.location.href = `lawongo://lawyerPayOneActivity?chatType=1&lawyerId=4`;
            }else{
                Toast.fail('Something went wrong!');
            }
        }
  }
};
import { get } from 'lodash';
import { sendCode } from 'services/sendCode';  
import { loginCode } from 'services/loginCode';
import { encryptDataWithRSA } from 'utils/encryptDataWithRSA.js';
import publicKey from 'utils/publicKey.js';
import { Toast ,Checkbox,Popup} from 'vant';
export default {
    components: {
        Popup
    },
    name: 'HomeApp',
    data() {
        return {
            checked: false,
            showUseAgreementDialog:false,
            showPrivacyDialog:false,
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
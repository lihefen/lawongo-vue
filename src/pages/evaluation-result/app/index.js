import CommonHeader from '@/components/CommonHeader.vue';
import { sendCode } from 'services/sendCode';  
import { loginCode } from 'services/loginCode';
import { encryptDataWithRSA } from 'utils/encryptDataWithRSA.js';
import publicKey from 'utils/publicKey.js';
import { Toast ,Checkbox,Popup} from 'vant';
export default {
    components: {
        CommonHeader,
        Popup
    },
    name: 'HomeApp',
    data() {
        return {
            checked: false,
        };
    },
    methods: {
    }
};
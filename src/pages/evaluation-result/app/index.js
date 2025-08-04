import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { Toast ,Popup} from 'vant';
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
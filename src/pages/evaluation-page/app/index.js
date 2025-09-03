import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { Toast } from 'vant';

/**
 * 首页应用组件
 * @description 展示首页内容，包含Vant组件示例
 */
export default {
    components: {
        CommonHeader,
    },
    name: 'HomeApp',
    data() {
        return {
            questionList: [
                {
                    title:"What is your approximate total debt amount?",
                    options: [
                        "A.Less than Rp 10 juta",
                        "B.Rp 10–50 million",
                        "C.More than Rp 50 juta"
                    ]
                },
                {
                    title:"Q2. Do you have multiple sources of debt?",
                    options: [
                        "A.Only 1 type",
                        "B.2–3 types",
                        "C.More than 3 types"
                    ]
                },
                {
                    title:"Q3.Do your monthly repayments exceed 50% of your income?",
                    options: [
                       "A.No",
                       "B.Nearly",
                       "C.Yes"
                    ]
                },
                {

                    title:"Q4:Have you recently received frequent collection calls?",
                    options: [
                       "A.No",
                       "B.Occasionally",
                       "C.Frequently"
                    ]
                },
                {
                    title:"Q5:Are you willing to resolve your debt through mediation?",
                    options: [
                       "A.Yes",
                       "B.Perhaps",
                       "C.No"
                    ]
                }
            ],
            activeIndex: 0,
            currentNum: -1
        };
    },
    methods: {
        selectOption(index) {
            console.log(index)
            this.currentNum = index;
            
        },
        submit() {
            if(this.activeIndex == 4) {
                window.location.href = '/h5/evaluation-result/index.html';    
                return;
            }
            this.activeIndex ++;
            this.currentNum = -1;
        },
        back() {
            this.activeIndex --;
            this.currentNum = -1;
        }
    }
};
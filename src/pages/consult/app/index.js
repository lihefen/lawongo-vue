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
            time: 3000000,
            showLoading:false,
            showLawyerList:false,
            swiperOptionLawer:{
                slidesPerView: "auto",
                spaceBetween: 10,
            },
            swiperOptionConsult:{
                slidesPerView: "auto",
                spaceBetween: 8,
            },
            message: '',
            userMessage: [],
            lawyerList: [
                {
                    name:'Lawyer Edo',
                    year: '7'
                },
                {
                    name:'Lawyer Farouq',
                    year: '6'
                },
                {
                    name:'Lawyer Riza',
                    year: '8'
                }
            ],
            consultList: [
                {
                    name:'Lawyer Edo'
                },
                {
                    name:'Lawyer Riza'
                },
                {
                    name:'Lawyer Farouq'
                }
               
            ],
            messageList:[
                // {
                //     type: 'user',
                //     text: 'Hello, how are you?',
                // },
                // {
                //     type: 'lawyer',
                //     text: 'Hello, what question do you want to ask?',
                // }
            ],
            showGuard:true,
            loadingProgress:0,
            loadingTimer:null,
            test:false,
            step:0
        };
    },
    methods: {
        consultHandle(id){
           window.location.href = `lawongo://lawyerPayOneActivity?chatType=1&lawyerId=${id}`;
        },
        startLoading() {
            this.step = 1;
            this.showLoading = true;
            this.scrollToBottom();
            if(this.loadingTimer) {
                clearInterval(this.loadingTimer);
            }
            this.loadingTimer = setInterval(() => {
                if (Number(this.loadingProgress) >= 100) {
                    clearInterval(this.loadingTimer);
                    this.showLoading = false;
                    setTimeout(() => {
                        this.talkEvent();
                    }, 300);
                    return;
                }
                this.loadingProgress += 5;
            }, 100);
        },
        sendMessage() {
            this.messageList.push({
                type: 'user',
                text: this.message,
            });
            this.message = '';
            setTimeout(() => {
                this.startLoading();
            }, 300);
            
        },
        talkEvent() {
            setTimeout(() => {
                this.messageList.push({
                    type: 'lawyer',
                    text: 'Question has been posted, currently more free consultations, you are ranked <span style="color: rgba(255, 59, 59, 1);">189</span>, expected to wait<span span style="color: rgba(255, 59, 59, 1);"> 02 hours 59 minutes 33 seconds</span>'
                });
            }, 300);
            this.showLawyerList = true;
            setTimeout(() => {
                this.scrollToBottom();
            }, 50);
        },

        //滚动条滚动到底部
        scrollToBottom:function(){
            window.scrollTo(0, document.body.scrollHeight);
        },
        finish() {
            //
        },
        guardHandle() {
            //
            this.showGuard = !this.showGuard;
        }
        
    }
};
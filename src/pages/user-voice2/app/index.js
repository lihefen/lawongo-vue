import CommonHeader from '@/components/CommonHeader.vue';
import { navigateTo } from '@/utils';
import { Toast } from 'vant';
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  components: {
    CommonHeader,
    Swiper,
    SwiperSlide
  },
  name: 'HomeApp',
  data() {
    return {
        swiperOption: {
            // 显示分页
            pagination: {
                el: '.swiper-pagination',
            },
        },
    };
  },
  methods: {
    /**
     * 显示提示信息
     * @returns {void}
     */
    showToast() {
      Toast('页面应用示例');
    }
  }
};
import CommonHeader from "@/components/CommonHeader.vue";
import { navigateTo } from "@/utils";
import { Toast } from "vant";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    CommonHeader,
    Swiper,
    SwiperSlide,
  },
  name: "HomeApp",
  data() {
    return {
      isExpanded: false,
      showJourney: false,
      videos: [
        {
            id: 3,
            title: "Rima",
            url: "https://www.youtube.com/embed/zq83AsGKCA0",
          },
        {
          id: 1,
          title: "Nadia",
          url: "https://www.youtube.com/embed/Sy4ROOthOg4",
        },
        {
            id: 5,
            title: "Riza",
            url: "https://www.youtube.com/embed/gM0JwcBT9fM",
        },
        {
            id: 6,
            title: "Edo",
            url: "https://www.youtube.com/embed/2NU1o2yATrU",
          },
        // {
        //   id: 2,
        //   title: "Tita",
        //   url: "https://www.youtube.com/embed/81FNi23lrbc",
        // },
       
        {
          id: 4,
          title: "Farouq",
          url: "https://www.youtube.com/embed/cT7RI7m3nsw",
        },
       
       
      ],
      swiperOption: {
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
        },
      },
      swiperOptionTeam:{
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      swiperOptionLife:{
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    };
  },
  methods: {
    toggleList() {
      // 切换状态
      this.isExpanded = !this.isExpanded;

      const listElement = this.$refs.videoList;
      if (listElement) {
        if (this.isExpanded) {
          // 展开：将 max-height 设置为内容的实际滚动高度
          listElement.style.maxHeight = `${listElement.scrollHeight}px`;
        } else {
          // 收起：移除内联的 max-height 样式，使其恢复到 CSS 中定义的初始折叠高度
          listElement.style.maxHeight = null;
        }
      }
    },
    showToast() {
      Toast("页面应用示例");
    },
    showJourneyList() {
        this.showJourney = true;
    },
  },
};

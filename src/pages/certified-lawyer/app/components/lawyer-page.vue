<template>
  <div class="lawyer-page">
    <!-- 1. 顶部搜索栏 -->
    <van-search v-model="searchValue" shape="round" background="#ffffff" placeholder="Find a lawyer"
      class="top-search-bar" />
    <div class="page-content">
      <!-- 2. 按类型查找律师 -->
      <div class="find-by-type">
        <h2>Find a lawyer by type</h2>
        <div class="type-scroll-container">
          <div class="type-list">
            <div v-for="item in lawyerTypes" :key="item.text" class="type-item">
              <div class="icon-wrapper">
                <img :src="item.image" :alt="item.text" />
              </div>
              <!-- 使用 v-html 来处理换行 -->
              <span class="text" v-html="item.text"></span>
            </div>
          </div>
        </div>
      </div>


      <!-- 3. AI + 法律咨询广告横幅 -->
      <div class="ai-banner">
        <img src="../assets/adron.png" alt="banner-bg" class="banner-adron-left" />
        <img src="../assets/adron.png" alt="banner-bg" class="banner-adron-right" />
        <div class="banner-content">
          <img src="../assets/robot.png" alt="AI Robot" class="ai-robot-img" />
          <div class="banner-text">
            <img src="../assets/logo.svg" alt="LawOnGo" class="logo" />
            <p>AI + Legal Consulting</p>
          </div>
        </div>
        <!-- <van-icon name="arrow" class="banner-arrow" /> -->
        <img src="../assets/button.png" alt="arrow" class="banner-arrow" />
      </div>

      <!-- 4. 已选律师列表 -->
      <div class="selected-lawyer-section">
        <div class="list-header">
          <h2>Selected Lawyer</h2>
          <div class="filters">
            <van-dropdown-menu class="filter-dropdown">
              <van-dropdown-item v-model="filterArea" :options="areaOptions" />
              <van-dropdown-item v-model="filterType" :options="typeOptions" />
              <van-dropdown-item v-model="filterRanking" :options="rankingOptions" />
            </van-dropdown-menu>
          </div>
        </div>

        <!-- 律师卡片列表 -->
        <div class="lawyer-list">
          <!-- AI Agent 卡片 -->
          <div class="lawyer-card ai-agent-card">
            <div class="lawyer-card-content">
              <div class="card-left">
                <div class="ai-agent-avatar">
                  <img src="../assets/ai-robot.png" alt="AI Agent" class="avatar" />
                </div>
                <span class="online"><span class="dot">●</span>online</span>
              </div>
              <div class="card-right">
                <div class="name-rating">
                  <span class="name">AI Agent</span>
                  <span class="rating"><img src="../assets/star.svg" alt="star" /> 5.0</span>
                </div>
                <p class="firm-info">xxx Law Firm <span class="separator">|</span> 3 years</p>
                <div class="tags">
                  <span class="tag">Credit Debt</span>
                  <span class="tag">Property Disputes</span>
                  <span class="tag">Criminal cases</span>
                  <span class="tag">Labor Disputes</span>
                  <span class="tag">Labour Disputes</span>
                </div>

              </div>
            </div>
            <div class="dash-line" />
            <div class="consultings-info">
              <span>5000+ Consultings</span>
              <div class="icon-wrapper ai">
                <img src="../assets/chat.svg" alt="chat" />
              </div>
            </div>
          </div>

          <!-- 普通律师卡片 -->
          <div v-for="lawyer in lawyers" :key="lawyer.name" class="lawyer-card">
            <div class="lawyer-card-content">
              <div class="card-left">
                <div class="lawyer-avatar">
                  <img :src="lawyer.avatar" :alt="lawyer.name" class="lawyer-avatar-img" />
                </div>
                <span class="online"><span class="dot">●</span>online</span>
              </div>
              <div class="card-right">
                <div class="name-rating">
                  <span class="name">{{ lawyer.name }} <span class="title">{{ lawyer.title }}</span></span>
                  <span class="rating"><img src="../assets/star.svg" alt="star" /> {{ lawyer.rating }}</span>
                </div>
                <p class="firm-info">
                  {{ lawyer.firm }} <span class="separator">|</span> {{ lawyer.experience }} years
                </p>
                <div class="tags">
                  <span v-for="tag in lawyer.tags" :key="tag" class="tag">{{ tag }}</span>
                </div>
              </div>
            </div>
            <div class="dash-line" />
            <div class="consultings-info">
              <span>{{ lawyer.consultings }} Consultings</span>
              <div class="action-icons">
                <div class="icon-wrapper">
                  <img src="../assets/phone.svg" alt="phone" />
                </div>
                <div class="icon-wrapper chat">
                  <img src="../assets/chat.svg" alt="chat" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { navigateTo } from '@/utils';

export default {
  name: 'LawyerPage',
  data() {
    return {
      searchValue: '',
      lawyerTypes: [
        {
          text: 'Wedding<br>Family',
          // 请确保图片路径正确
          image: require('../assets/jiatingguanxi.svg'),
        },
        {
          text: 'Debt<br>Credit',
          image: require('../assets/zhaiquanzhaiwu.svg'),
        },
        {
          text: 'Disputes<br>Contract',
          image: require('../assets/laodonghetong.svg'),
        },
        {
          text: 'Disputes<br>Workers',
          image: require('../assets/gongrenjiufen.svg'),
        },
        {
          text: 'Consu<br>Integr',
          image: require('../assets/zonghe.svg'),
        },
      ],
      filterArea: 'area1',
      filterType: 'type1',
      filterRanking: 'rank1',
      areaOptions: [
        { text: 'Area', value: 'area1' },
      ],
      typeOptions: [
        { text: 'Type', value: 'type1' },
      ],
      rankingOptions: [
        { text: 'Ranking', value: 'rank1' },
      ],
      lawyers: [
        {
          name: 'Nadya',
          title: 'Peradi',
          avatar: require('../assets/lawyer.png'),
          rating: '4.8',
          firm: 'xxx Law Firm',
          experience: 3,
          tags: ['Credit Debt', 'Property Disputes', 'Criminal cases', 'Labor Disputes', 'Labour Disputes'],
          consultings: 80,
        },
        {
          name: 'Farouq',
          title: 'Peradi',
          avatar: require('../assets/lawyer.png'),
          rating: '4.8',
          firm: 'xxx Law Firm',
          experience: 3,
          tags: ['Credit Debt', 'Property Disputes', 'Criminal cases', 'Labor Disputes', 'Labour Disputes'],
          consultings: 80,
        },
      ],
    };
  },
  created() {
    this.getLawyerList();
  },
  methods: {
    getLawyerList() {
      // TODO: 获取律师列表
    },
    navigateTo(value) {
      const params = {
        id: value,
      };
      navigateTo("lawyer-introduction", params);
    },
  },
};
</script>
<style lang="scss" src="./index_module.scss" scoped></style>
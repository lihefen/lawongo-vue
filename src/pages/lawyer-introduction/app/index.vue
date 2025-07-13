<template>
  <div class="lawyer-detail-page">
    <!-- 1. Top Navigation Bar -->
    <van-nav-bar title="Lawyer Introduction" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <img src="./assets/navbar-right.svg" alt="call" />
      </template>
    </van-nav-bar>

    <div class="content-container">

      <!-- 2. Lawyer Profile Header -->
      <div class="profile-header">
        <div class="profile-card">
          <!-- Background with curve -->
          <div class="background-curve">
            <img src="./assets/card-bg.png" alt="card-bg" />
          </div>
          <!-- Lawyer Info -->
          <div class="info-section">
            <h1 class="name">Riza zafita rizki</h1>
            <div class="meta-info">
              <span><van-icon name="clock-o" /> 3 years</span>
              <span><van-icon name="location-o" /> Peradi</span>
            </div>
            <div class="meta-info">
              <span><van-icon name="wap-home-o" /> xxx Law Firm</span>
            </div>
            <div class="tags">
              <span class="tag">Credit Debt</span>
              <span class="tag">Property Disputes</span>
              <span class="tag">Criminal cases</span>
              <span class="tag">Labour Disputes</span>
            </div>
          </div>
          <!-- Lawyer Image -->
          <div class="lawyer-image">
            <img src="./assets/profile.png" alt="Riza zafita rizki" />
          </div>
        </div>
        <div class="dash-line" />
        <!-- Stats Grid -->
        <van-grid :border="false" :column-num="4" class="stats-grid">
          <van-grid-item>
            <span class="stat-value">800+</span>
            <span class="stat-label">Amount <br />Services</span>
          </van-grid-item>
          <van-grid-item>
            <span class="stat-value">13 detik</span>
            <span class="stat-label">Speed <br />Response</span>
          </van-grid-item>
          <van-grid-item>
            <span class="stat-value">86.7%</span>
            <span class="stat-label">Level <br />Success</span>
          </van-grid-item>
          <van-grid-item>
            <span class="stat-value"><van-icon name="star" color="#ff976a" /> 4.8</span>
            <span class="stat-label">Ranking <br />Users</span>
          </van-grid-item>
        </van-grid>
      </div>

      <!-- Main Content Area -->
      <div class="main-content">
        <!-- 3. Selected Services Card -->
        <div class="content-card">
          <div class="card-header">
            <h2>Selected Services</h2>
            <a href="#">All Services <van-icon name="arrow" /></a>
          </div>
          <div class="services-container">
            <div class="service-card green">
              <img src="./assets/service-mask.svg" class="service-mask" />
              <div class="service-content">
                <div class="service-title">Telephone<br />Consultation</div>
                <div class="service-price">Rp<span>50,000</span></div>
              </div>
              <div class="service-content">
                <div class="service-desc">Very fast 1-1 communication</div>
                <img src="./assets/phone.svg" alt="phone" class="service-bg-icon" />
              </div>
            </div>
            <div class="service-card orange">
              <img src="./assets/service-mask.svg" class="service-mask" />
              <div class="service-content">
                <div class="service-title">Graphic Consulting</div>
                <div class="service-price">Rp<span>40,000</span></div>
              </div>
              <div class="service-content">
                <div class="service-desc">Professional Online Guide</div>
                <img src="./assets/chat.svg" alt="chat" class="service-bg-icon" />
              </div>
            </div>
          </div>
        </div>

        <!-- 4. About Lawyers Card -->
        <div class="content-card">
          <div class="card-header">
            <h2>About Lawyers</h2>
          </div>
          <p class="about-text">
            Riza zafita rizki is a highly skilled legal professional with over six years of experience, specializing in
            matters of public companies, mergers and acquisitions (M&A), complex financial transactions, financial
            technology, data privacy, capital markets, and foreign direct investment.
          </p>
        </div>

        <!-- 5. Comments Card -->
        <div class="content-card" style="margin-top: 20px;">
          <div class="card-header">
            <h2>Comments <span class="header-meta">(92 Comments)</span></h2>
            <a href="#">All Messages <van-icon name="arrow" /></a>
          </div>
          <div class="comment" v-for="i in 2" :key="i">
            <div class="comment-header">
              <div class="comment-rating">
                <van-icon name="star" color="#FF7B00" />
                <span>4.8</span><span class="rating-max">/5</span>
              </div>
              <span class="comment-date">16-01-2025</span>
            </div>
            <div class="user-name">A*****</div>
            <div class="comment-tag">Debt consolidation</div>
            <p class="comment-body">TextTextTextTextTextTextTextTextTextTextTextText</p>
          </div>
        </div>

        <!-- 6. Success Stories Card -->
        <div class="content-card">
          <div class="card-header">
            <h2>Success stories</h2>
            <a href="#">All cases <van-icon name="arrow" /></a>
          </div>
          <van-steps direction="vertical" :active="-1" class="success-stories">
            <!-- 循环渲染每一个故事 -->
            <van-step v-for="(story, index) in stories" :key="index">
              <!-- 在步骤插槽内自定义布局 -->
              <div class="story-item">
                <div class="story-header">
                  <span class="story-date">{{ story.date }}</span>
                  <div class="story-title">
                    <img src="./assets/university-full.svg" alt="university" />
                    <span>{{ story.title }}</span>
                  </div>
                </div>
                <p class="story-body">{{ story.body }}</p>
              </div>
            </van-step>
          </van-steps>
        </div>

        <!-- 7. Article Card -->
        <div class="content-card">
          <div class="card-header">
            <h2>Article</h2>
            <a href="#">All <van-icon name="arrow" /></a>
          </div>
          <div class="article-list">
            <div v-for="i in 3" :key="`article-${i}`" class="article-item">
              <div class="article-text">
                TextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTextsTexts
              </div>
              <div class="article-image-placeholder"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- 8. Guardian Mode Banner -->
      <div class="guardian-banner">
        <img src="./assets/guard.svg" alt="guardian-mode" />
        <span>Guardian mode enabled</span>
        <van-icon name="arrow" />
      </div>

      <!-- 9. Bottom Sticky Bar -->
      <div class="bottom-bar">
        <button class="action-btn green">
          <img src="./assets/footer-phone.svg" alt="phone" /> Rp <span>50,000</span>
        </button>
        <button class="action-btn orange">
          <img src="./assets/footer-chat.svg" alt="chat" /> Rp <span>40,000</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
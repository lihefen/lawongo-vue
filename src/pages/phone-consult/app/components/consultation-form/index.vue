<template>
  <div class="page-container">
    <div class="consultation-card">
      <!-- 1. 顶部绿色信息区域 -->
      <div class="card-header">
        <div class="header-main">
          <!-- 左侧标题 -->
          <h2 class="title">Quick Phone<br>Consultation</h2>
          <!-- 右侧价格区域 -->
          <div class="price-area">
            <div class="special-offer">Special offers</div>
            <div class="price-line">
              <span class="currency">Rp</span>
              <span class="price">50,000</span>
              <span class="duration">/60 minutes</span>
            </div>
          </div>
        </div>
        <ul class="features-list">
          <li><van-icon name="passed" color="#fff" /> Professional Lawyer Certification</li>
          <li><van-icon name="passed" color="#fff" /> Not returned at any time</li>
        </ul>
      </div>

      <!-- 2. 白色半透明表单区域 -->
      <div class="form-container">
        <van-form>
          <!-- 咨询类型 -->
          <div class="form-item">
            <label class="field-label">Type of Consultation</label>
            <van-field
              :value="selectedTypesDisplay"
              readonly
              clickable
              name="picker"
              placeholder="Please select your type of consultation"
              right-icon="arrow"
              @click="showTypeSelector = true"
            />
          </div>

          <!-- 电话号码 -->
          <div class="form-item">
            <label class="field-label">Telephone number</label>
            <van-field
              :value="displayPhoneNumber"
              name="telephone"
              type="tel"
              placeholder="Please enter your phone number"
              @input="telephone = $event"
              @focus="isPhoneFocused = true"
              @blur="isPhoneFocused = false"
            />

          </div>
        </van-form>
        
        <!-- 底部提示信息 -->
        <div class="encryption-notice">
          <van-icon name="shield-o" />
          <span>Your phone number is only used for lawyers and is protected by encryption</span>
        </div>
      </div>
    </div>

    <div class="service-description-card">
      <h3 class="service-title">Service Description</h3>
      
      <div class="steps-container">
        <!-- 第1步 -->
        <div class="step-item">
          <div class="step-circle">1</div>
          <div class="step-text">Platform<br>Matching</div>
        </div>
        
        <span class="step-separator">»</span>
        
        <!-- 第2步 -->
        <div class="step-item">
          <div class="step-circle">2</div>
          <div class="step-text">Lawyers receive<br>orders</div>
        </div>
        
        <span class="step-separator">»</span>
        
        <!-- 第3步 -->
        <div class="step-item">
          <div class="step-circle">3</div>
          <div class="step-text">Lawyer<br>Phone</div>
        </div>
      </div>
    </div>

    <!-- 立即咨询按钮和底部文本 -->
    <div class="bottom-action-area">
        <van-button class="consult-now-btn" block round :disabled="!isFormValid"
            @click="submitAll" >
            Consult Now
        </van-button>
        <div class="final-security-notice">
            <van-icon name="passed" />
            <span>Ensure your payment security</span>
        </div>
    </div>

    <!-- 自定义底部弹出选择器 -->
    <van-popup v-model="showTypeSelector" position="bottom" round :style="{ height: '60%' }">
      <div class="custom-selector">
        <!-- 弹窗头部 -->
        <div class="popup-header">
          <span class="popup-title">Please select the type of consultation</span>
          <van-icon name="cross" size="20" @click="showTypeSelector = false" />
        </div>

        <!-- 标签选择区域 -->
        <div class="tags-container">
          <div
            v-for="item in typeOptions"
            :key="item"
            class="tag-item"
            :class="{ 'selected': tempSelectedTypes.includes(item) }"
            @click="toggleSelection(item)"
          >
            {{ item }}
          </div>
        </div>
        
        <!-- 底部确认区域 -->
        <div class="popup-footer">
          <van-button class="confirm-btn" :class="{ 'active': tempSelectedTypes.length > 0 }" type="primary" block round @click="confirmSelection">
            Confirm
          </van-button>
          <div class="payment-security">
            <van-icon name="passed" color="#26a69a" />
            <span>Ensure your payment security</span>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'ConsultationForm',
  data() {
    return {
      selectedTypes: [], // 最终选定的类型数组
      tempSelectedTypes: [], // 弹窗中临时选择的类型数组

      // telephone 存储的是真实号码
      telephone: '', 
      // 新增状态标志
      isPhoneFocused: false, 

      showPicker: false, // 控制选择器弹出
      // 弹窗控制
      showTypeSelector: false,
      // 咨询类型选项
      typeOptions: [
        'Family Wedding', 'Integration Consulting', 'Credit Debt', 
        'Traffic Accident', 'Corporate Law', 'Intellectual Property',
        'Real Estate', 'Labor Dispute'
      ],

    }
  },
  computed: {
    /**
     * 用于在输入框中优雅地显示已选项
     */
    selectedTypesDisplay() {
      if (this.selectedTypes.length === 0) {
        return ''; // 没有选择时显示空
      }
      return this.selectedTypes.join(', '); // 将数组用逗号和空格连接成字符串
    },
    displayPhoneNumber() {
      // 如果输入框是聚焦状态，直接返回真实号码
      if (this.isPhoneFocused) {
        return this.telephone;
      }
      
      // 如果没有聚焦，并且号码符合规则，则返回脱敏后的号码
      const phone = this.telephone;
      if (phone) {
        // 使用 slice 截取前3位和后4位
        // return `${phone.slice(0, 3)}****${phone.slice(-4)}`;
      }
      
      // 如果不符合规则（例如为空或长度不对），直接返回原样
      return phone;
    },
    isFormValid() {
      // 条件1: 咨询类型数组的长度必须大于0
      const isTypeSelected = this.selectedTypes.length > 0;
      
      // TODO: 条件2: 电话号码必须是11位 不确定外国手机号长度
      const isPhoneValid = !!this.telephone.length;
      
      // 只有当所有条件都为 true 时，表单才有效
      return isTypeSelected && isPhoneValid;
    }

  },
  watch: {
    showTypeSelector(newVal) {
      if (newVal) {
        // 打开弹窗时，将主数据复制到临时数据中
        this.tempSelectedTypes = [...this.selectedTypes];
      }
    }
  },
  methods: {
    // 在弹窗中点击标签
    toggleSelection(type) {
      const index = this.tempSelectedTypes.indexOf(type);
      if (index > -1) {
        // 如果已存在，则移除 (取消选择)
        this.tempSelectedTypes.splice(index, 1);
      } else {
        // 如果不存在，则添加 (选择)
        this.tempSelectedTypes.push(type);
      }
    },
    // 点击确认按钮
    confirmSelection() {
      this.selectedTypes = [...this.tempSelectedTypes];
      this.showTypeSelector = false; // 关闭弹窗
    },
    submitAll() {
        console.log('表单提交!');
        this.$emit('submit',{
            mobileNumber: this.telephone,
            typeOfService: this.selectedTypes,
        });
        // 首先再次检查，防止意外情况
        if (!this.isFormValid) {
            console.log('表单无效，无法提交');
            return;
        }

        console.log('表单提交!');
        console.log('咨询类型:', this.selectedTypes);
        console.log('电话号码:', this.telephone);
        // 在这里可以放置调用API等提交逻辑
    }
  },

}
</script>
<style lang="scss" src="./index_module.scss" scoped></style>
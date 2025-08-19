<template>
  <van-nav-bar
    :title="title"
    :left-text="leftText"
    :left-arrow="showBack"
    @click-left="onClickLeft"
  />
</template>

<script>
export default {
    name: 'successDialog',
    props: {
    },
    methods: {
    }
};
</script>

<style lang="scss" scoped>
</style>
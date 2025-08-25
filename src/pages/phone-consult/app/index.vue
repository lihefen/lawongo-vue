<template>
  <div class="home-page">
    <!-- <common-header title="Konsultasi Telepon Cepat" :showBack="true" backPath="/" /> -->
    <div class="content">
      <banner />
      <consultation-form @submit="submit" />
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style lang="scss" src="./index_module.scss" scoped></style>
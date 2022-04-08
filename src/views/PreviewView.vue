<template>
  <div class="preview-view">
    <router-link class="go-back-btn btn btn-primary btn-lg" to="/">돌아가기</router-link>

    <section
      v-for="(section, index) in promotionStore.sections"
      :key="index"
      class="pr-row editor-section-content"
      :style="{ backgroundColor: section.color }"
    >
      <div class="content-layout">
        <div v-if="section.items && section.items.length" class="container">
          <PromoItem v-for="(item, itemIndex) in section.items" :key="itemIndex" :item="item" />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import promotionStore from '@/stores/promotionStore'
import PromoItem from '@/components/MakerEditor/PromoItem.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/layout';

.preview-view {
  position: relative;

  .go-back-btn {
    position: fixed;
    top: 80px;
    left: 50px;
    z-index: 1024;
  }
}
</style>

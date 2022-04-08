<template>
  <div class="preview-view">
    <router-link class="go-back-btn btn btn-primary btn-lg" to="/">돌아가기</router-link>

    <section
      v-for="(section, index) in promotionStore.sections"
      :key="index"
      class="pr-row"
      :style="{ backgroundColor: section.color }"
    >
      <div v-if="section.items.length === 1 && section.items[0].type === 'landingButton'">
        <PromoItem v-for="(item, itemIndex) in section.items" :key="itemIndex" :item="item" />
      </div>
      <div v-else class="content-layout">
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

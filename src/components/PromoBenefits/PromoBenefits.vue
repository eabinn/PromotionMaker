<template>
  <div class="col-wrapper text-center">
    <div
      v-for="(benefit, index) in props.data.items"
      :key="index"
      class="col-xs-12 no-float col-item"
      :class="`col-md-${props.data.column}`"
    >
      <div class="event-icon">
        <img
          :src="benefit.images['1x']"
          :srcset="`${benefit.images['2x']} 2x`"
          :alt="`benefit ${index + 1}`"
        />
      </div>
      <div class="event-desc">
        <h6 v-if="benefit.identifier" class="num">
          <strong v-n2br="{ htmlText: benefit.identifier }" />
        </h6>
        <h3 v-if="benefit.title" class="main">
          <span v-n2br="{ htmlText: benefit.title }" />
        </h3>
        <div v-if="benefit.text" class="desc">
          <span v-n2br="{ htmlText: benefit.text }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Benefits } from '@/interfaces/promo.interfaces'

interface IProps {
  data: Benefits
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_event_benefits';
@import '@/assets/scss/promotion/_title';
</style>

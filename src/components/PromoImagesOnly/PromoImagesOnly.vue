<template>
  <div class="text-center">
    <div
      v-for="(imageSet, index) in props.data.items"
      :key="index"
      class="col-xs-12 no-float col-item"
      :class="`col-md-${props.data.column}`"
    >
      <figure class="visual-wrapper">
        <img :src="imageSet['1x']" :srcset="`${imageSet['2x']} 2x`" alt="feature" />
      </figure>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImagesOnly } from '@/interfaces/promo.interfaces'

interface IProps {
  data: ImagesOnly
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/reset';
</style>

<template>
  <div class="col-wrapper">
    <div class="col-xs-12 no-float col-item">
      <div class="pr-video">
        <div class="pr-video-box">
          <span class="pr-video-box__top" :style="{ backgroundColor: props.data.leftColor }" />
          <iframe
            :src="props.data.videoUrl"
            webkitallowfullscreen=""
            mozallowfullscreen=""
            frameborder="0"
          ></iframe>
          <span class="pr-video-box__bottom" :style="{ backgroundColor: props.data.rightColor }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MarketingVideo } from '../item.types'

interface TitleProps {
  data: MarketingVideo
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_layout.scss';
@import '@/assets/scss/promotion/button';
</style>

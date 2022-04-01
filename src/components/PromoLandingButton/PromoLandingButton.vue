<template>
  <div class="col-wrapper">
    <div class="pr-line" :style="{ background: props.data.mainColor }">
      <span v-if="props.data.style === 'tail'" class="pr-line-tail"></span>
      <div class="pr-line-desc text-center" style="padding: 36px 38px">
        <div class="pr-btn-box" :style="{ color: props.data.mainColor }">
          <a
            class="pr-btn pr-btn-inline pr-btn-white pr-btn-border pr-btn-landing"
            :href="props.data.link"
            target="_blank"
          >
            <strong class="txt" style="font-size: 16px">{{ props.data.text }}</strong>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { LandingButton } from '@/interfaces/promo.interfaces'

interface TitleProps {
  data: LandingButton
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_layout.scss';
@import '@/assets/scss/promotion/button';
</style>

<template>
  <div
    v-if="props.data.bgType === 'dark'"
    class="pr-line"
    :style="{ background: props.data.mainColor }"
  >
    <span v-if="props.data.tailType === 'tail'" class="pr-line-tail"></span>
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
  <div v-else class="pr-line" :style="{ background: '#FFFFFF' }">
    <span
      v-if="props.data.tailType === 'tail'"
      class="pr-line-tail"
      :style="{ color: '#F4F4F4' }"
    />
    <div class="pr-line-desc text-center" style="padding: 36px 38px">
      <div class="pr-btn-box" :style="{ color: props.data.mainColor }">
        <a
          class="pr-btn pr-btn-inline pr-btn-border pr-btn-landing"
          :href="props.data.link"
          :style="{ color: props.data.mainColor }"
          target="_blank"
        >
          <span :style="{ backgroundColor: props.data.mainColor, opacity: 0.15 }">
            <span class="pr-btn-bg" />
          </span>
          <strong class="txt" style="font-size: 16px">{{ props.data.text }}</strong>
        </a>
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
@import '@/assets/scss/promotion/_layout';
@import '@/assets/scss/promotion/_button';
</style>

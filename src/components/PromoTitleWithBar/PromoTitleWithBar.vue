<template>
  <div class="text-center">
    <div class="col-xs-12 no-float col-item" :class="`col-md-${props.data.column}`">
      <div
        v-if="props.data.title || props.data.upSubTitle || props.data.underSubTitle"
        class="pr-title-renewal"
        :style="{ color: props.data.barColor }"
      >
        <div class="pr-title-wrap">
          <p class="pr-title-text pr-title-text--sub">
            <span v-n2br="{ htmlText: props.data.upSubTitle }" />
          </p>
          <h3 class="pr-title-text pr-title-text--main">
            <span v-n2br="{ htmlText: props.data.title }" />
          </h3>
          <p class="pr-title-text pr-title-text--sub">
            <span v-n2br="{ htmlText: props.data.underSubTitle }" />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TitleWithBar } from '@/interfaces/promo.interfaces'

interface IProps {
  data: TitleWithBar
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary.scss';
</style>

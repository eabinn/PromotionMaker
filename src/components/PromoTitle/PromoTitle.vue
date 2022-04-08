<template>
  <div class="col-xs-12 no-float col-item">
    <div class="title-container">
      <h5
        v-if="props.data.upSubTitle"
        v-n2br="{ htmlText: props.data.upSubTitle }"
        :class="`subtitle-${props.data.upSubTitleFontSize === 'big' ? 'large' : 'basic'}`"
      />
      <h3
        v-n2br="{ htmlText: props.data.title }"
        :class="props.data.titleSize === 'big' ? 'title-large' : 'title-basic'"
      />
      <h5
        v-if="props.data.underSubTitle"
        v-n2br="{ htmlText: props.data.underSubTitle }"
        :class="`subtitle-${props.data.underSubTitleFontSize === 'big' ? 'large' : 'basic'}`"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Title } from '@/interfaces/promo.interfaces'

interface TitleProps {
  data: Title
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_title.scss';
</style>

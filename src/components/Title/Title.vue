<template>
  <div class="col-wrapper">
    <div class="col-xs-12 no-float col-item">
      <div class="title-container">
        <h5
          v-if="props.data.upSubtitle"
          v-n2br="{ htmlText: props.data.upSubtitle }"
          :class="`subtitle-${props.data.upSubtitleFontSize === 'big' ? 'large' : 'basic'}${
            props.data.upSubtitleFontWeight === 'bold' ? '--bold' : ''
          }`"
        />
        <h3
          v-n2br="{ htmlText: props.data.title }"
          :class="props.data.titleSize === 'big' ? 'title-large' : 'title-basic'"
        />
        <h5
          v-if="props.data.underSubtitle"
          v-n2br="{ htmlText: props.data.underSubtitle }"
          :class="`subtitle-${props.data.underSubtitleFontSize === 'big' ? 'large' : 'basic'}${
            props.data.underSubtitleFontWeight === 'bold' ? '--bold' : ''
          }`"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Title } from '../item.types'

interface TitleProps {
  data: Title
}

const props = defineProps<TitleProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_title.scss';
</style>

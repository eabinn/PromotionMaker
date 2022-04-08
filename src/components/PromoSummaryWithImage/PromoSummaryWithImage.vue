<template>
  <div class="text-center">
    <div
      v-if="props.data.imagePosition === 'left'"
      class="hidden-xs hidden-sm col-xs-12 no-float col-item col-top"
      :class="`col-md-${props.data.imageContentColumn}`"
    >
      <figure class="visual-wrapper">
        <img
          :src="props.data.images['1x']"
          :srcset="`${props.data.images['2x']} 2x`"
          alt="feature"
        />
      </figure>
    </div>

    <div
      class="col-xs-12 no-float col-item"
      :class="`col-md-${props.data.descriptionContentColumn}`"
    >
      <div v-for="(description, index) in props.data.descriptions" :key="index" class="definition">
        <div v-if="description.title" class="definition-title text-left">
          <strong v-n2br="{ htmlText: description.title }" />
        </div>

        <ul v-if="description.type === 'dot'" class="definition-wrap">
          <li
            v-for="(item, itemIndex) in description.items"
            :key="itemIndex"
            class="definition__item"
          >
            <span v-n2br="{ htmlText: item }" />
          </li>
        </ul>
        <div v-else-if="description.type === 'normal'" class="definition-wrap">
          <p
            v-for="(item, itemIndex) in description.items"
            :key="itemIndex"
            class="definition__item"
          >
            <span v-n2br="{ htmlText: item }" />
          </p>
        </div>
        <ol v-else class="definition-wrap">
          <li
            v-for="(item, itemIndex) in description.items"
            :key="itemIndex"
            class="definition__item"
          >
            <span v-n2br="{ htmlText: item }" />
          </li>
        </ol>
      </div>
    </div>

    <div
      v-if="props.data.imagePosition === 'right'"
      class="hidden-xs hidden-sm col-xs-12 no-float col-item col-top"
      :class="`col-md-${props.data.imageContentColumn}`"
    >
      <figure class="visual-wrapper">
        <img
          :src="props.data.images['1x']"
          :srcset="`${props.data.images['2x']} 2x`"
          alt="feature"
        />
      </figure>
    </div>

    <div
      class="hidden-md hidden-lg col-xs-12 no-float col-item col-top"
      :class="`col-md-${props.data.imageContentColumn}`"
    >
      <figure class="visual-wrapper">
        <img
          :src="props.data.images['1x']"
          :srcset="`${props.data.images['2x']} 2x`"
          alt="feature"
        />
      </figure>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SummaryWithImage } from '@/interfaces/promo.interfaces'

interface IProps {
  data: SummaryWithImage
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary.scss';
@import '@/assets/scss/promotion/reset';
</style>

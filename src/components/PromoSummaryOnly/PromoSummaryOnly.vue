<template>
  <div class="col-wrapper text-center">
    <div class="col-xs-12 no-float col-item" :class="`col-md-${props.data.contentColumn}`">
      <div
        v-if="props.data.title || props.data.subTitle"
        class="pr-title"
        :style="{ color: props.data.barColor }"
      >
        <div class="pr-title-wrap">
          <p v-if="props.data.subTitle" class="pr-title-text pr-title-text--sub">
            <b
              v-if="props.data.subTitleFontWeight === 'bold'"
              v-n2br="{ htmlText: props.data.subTitle }"
            ></b>
            <span v-else v-n2br="{ htmlText: props.data.subTitle }" />
          </p>

          <h3 v-if="props.data.title" class="pr-title-text pr-title-text--main">
            <span v-n2br="{ htmlText: props.data.title }" />
          </h3>
        </div>
      </div>

      <div v-for="(description, index) in props.data.descriptions" :key="index" class="definition">
        <div v-if="description.title" class="definition-title text-left">
          <strong v-n2br="{ htmlText: description.title }">유의사항</strong>
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
  </div>
</template>

<script lang="ts" setup>
import { SummaryOnly } from '@/interfaces/promo.interfaces'

interface IProps {
  data: SummaryOnly
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary.scss';
</style>

<template>
  <div class="text-center">
    <div class="col-xs-12 no-float col-item" :class="`col-md-${props.data.contentColumn}`">
      <div v-for="(description, index) in props.data.items" :key="index" class="definition">
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
import { Notes } from '@/interfaces/promo.interfaces'

interface IProps {
  data: Notes
}

const props = defineProps<IProps>()
</script>

<style lang="scss" scoped>
@import '@/assets/scss/promotion/_summary.scss';
</style>

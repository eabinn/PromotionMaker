<template>
  <Title v-if="props.item.type === 'title'" :data="props.item.title!" />
  <SummaryOnly v-else-if="props.item.type === 'summaryOnly'" :data="props.item.summaryOnly!" />
  <SummaryWithImage
    v-else-if="props.item.type === 'summaryWithImage'"
    :data="props.item.summaryWithImage!"
  />
  <LandingButton
    v-else-if="props.item.type === 'landingButton'"
    :data="props.item.landingButton!"
  />
  <PackageCards v-else-if="props.item.type === 'packageCards'" :data="props.item.packageCards!" />
  <Notes v-else-if="props.item.type === 'notes'" :data="props.item.notes!" />
  <div v-else>
    <div class="title">
      <input id="title" placeholder="타이틀을 입력해주세요" />
      <input id="subtitle" placeholder="서브 타이틀을 입력해주세요" />
    </div>
    <div class="description">
      <input placeholder="설명" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { IItem } from './item.types'
import Title from '@/components/Title/Title.vue'
import SummaryOnly from './SummaryOnly/SummaryOnly.vue'
import LandingButton from './LandingButton/LandingButton.vue'
import SummaryWithImage from './SummaryWithImage/SummaryWithImage.vue'
import PackageCards from './PackageCards/PackageCards.vue'
import Notes from './Notes/Notes.vue'

interface ItemProps {
  item: IItem
}

const props = defineProps<ItemProps>()
</script>

<style lang="scss" scoped>
.box {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  &.dummy {
    width: 100%;
    height: 50%;
  }

  button {
    display: none;
  }

  &:hover button {
    display: block;
  }
}

.title {
  display: flex;
  flex-direction: column;
}

button.btn-delete {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>

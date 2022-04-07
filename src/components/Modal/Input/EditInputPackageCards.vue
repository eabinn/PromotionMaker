<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>Package Cards를 수정해주세요.</label>
      <button @click="addPackageCard($event)">새 Package Card 추가</button>
    </div>
    <div class="edit-input edit-input-nested">
      <div v-for="(packageCard, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Package Card</label>
          <button @click="deletePackageCard($event, index)">
            {{ index + 1 }}번째 Package Card 삭제
          </button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputColor
            :change-target="'패키지 카드 메인'"
            :value="packageCard.mainColor"
            :update-value="(value) => (packageCard.mainColor = value)"
          />

          <EditInputTextarea
            :change-target="'패키지 카드 식별자'"
            :value="packageCard.identifier"
            :update-value="(value) => (packageCard.identifier = value)"
          />

          <EditInputTextarea
            :change-target="'패키지 카드 타이틀'"
            :value="packageCard.title"
            :update-value="(value) => (packageCard.title = value)"
          />

          <EditInputTextarea
            :change-target="'패키지 카드 서브 타이틀'"
            :value="packageCard.subTitle"
            :update-value="(value) => (packageCard.subTitle = value)"
          />

          <EditInputTexts
            :change-target="'패키지 카드'"
            :value="packageCard.descriptions"
            :update-value="(value) => (packageCard.descriptions = value)"
          />

          <EditInputPackageCardButtons
            :value="packageCard.buttons"
            :update-value="(value) => (packageCard.buttons = value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PackageCard } from '@/interfaces/promo.interfaces'
import { defaultPackageCard } from '@/mockupDatas/promoData'
import EditInputColor from './EditInputColor.vue'
import EditInputTextarea from './EditInputTextarea.vue'
import EditInputTexts from './EditInputTexts.vue'
import EditInputPackageCardButtons from './EditInputPackageCardButtons.vue'

interface IProps {
  value: PackageCard[]
  updateValue(value: PackageCard[]): void
}

const props = defineProps<IProps>()

const addPackageCard = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, defaultPackageCard])
}

const deletePackageCard = (e: Event, index: number) => {
  e.preventDefault()

  const packageCards = props.value

  props.updateValue([
    ...packageCards.slice(0, index),
    ...packageCards.slice(index + 1, packageCards.length),
  ])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

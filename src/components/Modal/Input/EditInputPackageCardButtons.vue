<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>Package Card 구매 버튼을 수정해주세요.</label>
      <button @click="addButton($event)">새 Package Card 구매 버튼 추가</button>
    </div>
    <div class="edit-input edit-input-nested">
      <div v-for="(button, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Package Card 구매 버튼</label>
          <button @click="deleteButton($event, index)">
            {{ index + 1 }}번째 Package Card 구매 버튼 삭제
          </button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputSelectPackageCardButtonType
            :change-target="'Package Card 구매 버튼'"
            :value="button.type"
            :update-value="(value) => (button.type = value)"
          />
          <EditInputColor
            :change-target="'Package Card 구매 버튼'"
            :value="button.mainColor"
            :update-value="(value) => (button.mainColor = value)"
          />
          <EditInputText
            :change-target="'Package Card 구매 버튼 텍스트'"
            :value="button.text"
            :update-value="(value) => (button.mainColor = value)"
          />
          <EditInputText
            :change-target="'Package Card 구매 버튼 구매 기간'"
            :value="button.day"
            :update-value="(value) => (button.day = value)"
          />
          <EditInputText
            :change-target="'Package Card 구매 버튼 구매 금액'"
            :value="button.price"
            :update-value="(value) => (button.price = value)"
          />
          <EditInputText
            :change-target="'Package Card 구매 버튼 구매 링크'"
            :value="button.link"
            :update-value="(value) => (button.link = value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PackageCardButton } from '@/interfaces/promo.interfaces'
import EditInputSelectPackageCardButtonType from './EditInputSelectPackageCardButtonType.vue'
import EditInputColor from './EditInputColor.vue'
import EditInputText from './EditInputText.vue'

interface IProps {
  value: PackageCardButton[]
  updateValue(value: PackageCardButton[]): void
}

const props = defineProps<IProps>()

const addButton = (e: Event) => {}
const deleteButton = (e: Event, index: number) => {}
</script>

<style lang="scss" scoped>
@import './common';
</style>

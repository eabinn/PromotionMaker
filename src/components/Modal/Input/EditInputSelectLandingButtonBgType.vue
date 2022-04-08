<template>
  <div class="edit-input">
    <label>랜딩 버튼 bg 타입를 선택해주세요.</label>
    <ul class="help">
      <li>light를 선택한 경우 기본 bg가 하얀색이고 main color가 버튼의 텍스트 색상이 됩니다.</li>
    </ul>
    <select :value="props.value" @change="($event) => handleChange($event)">
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { LandingButtonBgType } from '@/interfaces/promo.interfaces'
import { ref } from 'vue'

interface IProps {
  value: string
  updateValue(value: LandingButtonBgType): void
}

const props = defineProps<IProps>()
const options = ref<LandingButtonBgType[]>(['dark', 'light'])

const handleChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = input.value as LandingButtonBgType
  props.updateValue(value)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

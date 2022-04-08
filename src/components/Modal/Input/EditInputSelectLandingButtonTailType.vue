<template>
  <div class="edit-input">
    <label>랜딩 버튼 tail 타입를 선택해주세요.</label>
    <ul class="help">
      <li>normal일 경우 tail이 없습니다.</li>
    </ul>
    <select :value="props.value" @change="($event) => handleChange($event)">
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { LandingButtonTailType } from '@/interfaces/promo.interfaces'
import { ref } from 'vue'

interface IProps {
  value: string
  updateValue(value: LandingButtonTailType): void
}

const props = defineProps<IProps>()
const options = ref<LandingButtonTailType[]>(['normal', 'tail'])

const handleChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = input.value as LandingButtonTailType
  props.updateValue(value)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

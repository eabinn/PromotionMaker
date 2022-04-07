<template>
  <div class="edit-input">
    <label>{{ props.changeTarget }} 리스트 타입를 선택해주세요.</label>
    <select :value="props.value" @change="($event) => handleChange($event)">
      <option v-for="(option, index) in options" :key="index" :value="option">
        {{ option.toUpperCase() }}
      </option>
    </select>
  </div>
</template>

<script lang="ts" setup>
import { FontWeight, ListType } from '@/interfaces/promo.interfaces'
import { ref } from 'vue'

interface IProps {
  value: string
  updateValue(value: ListType): void
  changeTarget: string
}

const props = defineProps<IProps>()
const options = ref<ListType[]>(['dot', 'normal', 'number'])

const handleChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  const value = input.value as ListType
  props.updateValue(value)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

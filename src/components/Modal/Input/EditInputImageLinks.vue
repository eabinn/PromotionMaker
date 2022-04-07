<template>
  <div class="edit-input">
    <label>{{ props.changeTarget }}에 들어갈 이미지 주소를 입력해주세요</label>

    <div v-for="(imageSrc, key) in props.value" :key="key" class="edit-input edit-input-row">
      <label>{{ key }}</label>
      <input :value="imageSrc" @change="handleChange($event, key)" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImageSet } from '@/interfaces/promo.interfaces'

interface IProps {
  value: ImageSet
  updateValue(value: ImageSet): void
  changeTarget: string
}

const props = defineProps<IProps>()

const handleChange = (e: Event, key: keyof ImageSet) => {
  const input = e.target as HTMLInputElement
  const value = input.value

  const imageSet = {
    ...props.value,
  }
  imageSet[key] = value

  props.updateValue(imageSet)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

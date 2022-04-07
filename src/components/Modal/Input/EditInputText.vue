<template>
  <div class="edit-input edit-input-textarea">
    <label>{{ props.changeTarget }}을 입력해주세요</label>
    <input :value="props.value" @change="($event) => handleChange($event)" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  value: string
  updateValue(value: string): void
  changeTarget: string
}

const props = defineProps<IProps>()

const handleChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  props.updateValue(input.value)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

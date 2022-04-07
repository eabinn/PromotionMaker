<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>{{ props.changeTarget }} 내용 수정해주세요.</label>
      <button @click="addText($event)">새 내용 추가</button>
    </div>
    <ul>
      <li>색상 변경이 가능합니다.</li>
    </ul>
    <div v-for="(text, index) in props.value" :key="index" class="edit-input edit-input-row">
      <textarea :value="text" @change="changeText($event, index)" />
      <button @click="deleteText($event, index)">삭제</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  value: string[]
  updateValue(value: string[]): void
  changeTarget: string
}

const props = defineProps<IProps>()

const addText = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, ''])
}

const deleteText = (e: Event, index: number) => {
  e.preventDefault()

  props.updateValue([
    ...props.value.slice(0, index),
    ...props.value.slice(index + 1, props.value.length),
  ])
}

const changeText = (e: Event, index: number) => {
  e.preventDefault()

  const input = e.target as HTMLInputElement
  const value = input.value

  props.updateValue([
    ...props.value.slice(0, index),
    value,
    ...props.value.slice(index + 1, props.value.length),
  ])
}

const handleChange = (e: Event, index: number) => {
  const input = e.target as HTMLInputElement
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

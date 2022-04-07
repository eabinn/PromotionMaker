<template>
  <div class="edit-input">
    <label>{{ props.changeTarget }} 영역 비율을 정해주세요. (1 ~ 12)</label>
    <ul class="help">
      <li>
        컨텐츠 영역이 총 12개의 영역으로 나눠져 있습니다. 그 중 원하는 비율을 선택해주세요.<br />
        예를 들어 6을 선택하는 경우 6/12, 50%의 영역을 차지합니다.
      </li>
      <li>
        비율 설정하는 것이 여러 개 있을 경우 두 영역 합쳐서 12 이하가 되야 합니다. 예를 들어 컨텐츠
        영역과 이미지 영역의 비율을 설정해야 하는 경우 어느 하나가 5일 경우 다른 하나는 1 ~ 7의 값이
        가능합니다.
      </li>
    </ul>
    <input :value="props.value" type="number" @change="($event) => handleChange($event)" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  value: number
  maxValue: number
  updateValue(value: number): void
  changeTarget: string
}

const props = defineProps<IProps>()

const handleChange = (e: Event) => {
  const value = +(e.target as HTMLInputElement).value
  let updatedValue = value

  if (value > props.maxValue) {
    updatedValue = props.maxValue
  }

  if (value < 1) {
    updatedValue = 1
  }

  props.updateValue(updatedValue)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

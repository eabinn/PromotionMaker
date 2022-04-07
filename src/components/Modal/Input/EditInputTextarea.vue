<template>
  <div class="edit-input edit-input-textarea">
    <label>{{ props.changeTarget }}을 입력해주세요</label>
    <ul v-if="props.showHelp" class="help">
      <li>아무 것도 입력하지 않으면 화면에 해당 영역이 그려지지 않습니다.</li>
      <li>
        {{`줄바꿈이 가능합니다. <br />
        태그를 사용하세요.`}}
      </li>
      <li>
        {{`색상 변경이 가능합니다. 원하는 텍스트를 <span style="color: #234123">텍스트</span> 와
        같이 <span /> 태그로 감싼 뒤 스타일 속성을 넣어주세요.`}}
      </li>
    </ul>
    <textarea :value="props.value" @change="($event) => handleChange($event)" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  value: string
  updateValue(value: string): void
  changeTarget: string
  showHelp?: boolean
}

const props = withDefaults(defineProps<IProps>(), {
  showHelp: true,
})

const handleChange = (e: Event) => {
  const input = e.target as HTMLInputElement
  props.updateValue(input.value)
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

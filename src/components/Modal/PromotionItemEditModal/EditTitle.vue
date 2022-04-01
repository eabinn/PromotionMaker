<template>
  <form>
    <div class="item">
      <b># 타이틀을 입력해주세요.</b>
      <textarea v-model="editedItem.title" />
    </div>
    <div class="item">
      <b># 타이틀 폰트 두께를 선택해주세요.</b>
      <select v-model="editedItem.titleSize">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
    </div>
    <div class="item">
      <b># 위쪽 서브타이틀을 입력해주세요.</b>
      <textarea v-model="editedItem.upSubtitle" />
    </div>
    <div class="item">
      <b># 위쪽 서브타이틀 폰트 크기를 선택해주세요.</b>
      <select v-model="editedItem.upSubtitleFontSize">
        <option value="normal">Normal</option>
        <option value="big">Big</option>
      </select>
    </div>
    <div class="item">
      <b># 위쪽 서브타이틀 폰트 두께를 선택해주세요.</b>
      <select v-model="editedItem.upSubtitleFontWeight">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
    </div>
    <div class="item">
      <b># 아래쪽 서브타이틀을 입력해주세요.</b>
      <textarea v-model="editedItem.underSubtitle" />
    </div>
    <div class="item">
      <b># 아래쪽 서브타이틀 폰트 크기를 선택해주세요.</b>
      <select v-model="editedItem.underSubtitleFontSize">
        <option value="normal">Normal</option>
        <option value="big">Big</option>
      </select>
    </div>
    <div class="item">
      <b># 아래쪽 서브타이틀 폰트 두께를 선택해주세요.</b>
      <select v-model="editedItem.underSubtitleFontWeight">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Title } from '../item.types'

interface IProps {
  item: Title
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .item {
    display: flex;
    flex-direction: column;
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  select {
    display: block;
    width: 100%;
  }

  input {
    width: 100%;
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .description {
    &-type {
      margin-bottom: 10px;
    }
    &-item {
      display: flex;
      textarea {
        flex: 1;
      }
    }
  }
}
</style>

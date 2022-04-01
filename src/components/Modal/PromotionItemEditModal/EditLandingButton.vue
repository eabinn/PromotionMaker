<template>
  <form>
    <div class="item">
      <b># 메인 색상을 정해주세요.</b>
      <input v-model="editedItem.mainColor" type="color" />
    </div>
    <div class="item">
      <b>버튼 내용을 적어주세요.</b>
      <input v-model="editedItem.text" />
    </div>
    <div class="item">
      <b>버튼 클릭시 랜딩될 주소를 적어주세요(https:// 포함 full url).</b>
      <input v-model="editedItem.link" />
    </div>
    <div class="item">
      <b># 스타일을 정해주세요</b>
      <select v-model="editedItem.type">
        <option value="normal">Normal</option>
        <option value="tail">Tail</option>
      </select>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { LandingButton } from '../item.types'

interface IProps {
  item: LandingButton
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

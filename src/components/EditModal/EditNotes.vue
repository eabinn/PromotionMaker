<template>
  <form v-if="editedItem">
    <div class="item">
      <b># PC 화면에서의 컨텐츠 영역 비율을 정해주세요. (1 ~ 12)</b>
      <input v-model="editedItem.contentColumn" type="number" />
    </div>
    <div class="item descriptions">
      <div>
        <b># 디스크립션을 추가해주세요</b>
        <button @click="addDescription($event)">추가</button>
      </div>
      <div v-for="(description, index) in editedItem.items" :key="index" class="description">
        <div class="title">
          <b>{{ index + 1 }}번째 디스크립션</b>
          <button @click="deleteDescription($event, index)">삭제</button>
        </div>

        <div class="description-type">
          <b>- 리스트 타입</b>
          <select v-model="description.type">
            <option value="normal">Normal</option>
            <option value="dot">Dot</option>
            <option value="number">Number</option>
          </select>
        </div>
        <div class="description-type">
          <b>- 리스트 타이틀</b>
          <input v-model="description.title" />
        </div>
        <div>
          <div>
            <b>- 리스트</b>
            <button @click="addDescriptionItem($event, index)">아이템 추가</button>
          </div>
          <div
            v-for="(item, itemIndex) in description.items"
            :key="itemIndex"
            class="description-item"
          >
            <textarea :value="item" @change="changeDescriptionItem($event, index, itemIndex)" />
            <button @click="deleteDescriptionItem($event, index, itemIndex)">삭제</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Notes } from '../item.types'

interface IProps {
  originalItem: Notes
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'originalItem')

const addDescription = (e: Event) => {
  e.preventDefault()

  editedItem.value.items.push({
    title: '타이틀입니다.',
    type: 'normal',
    items: [],
  })
}

const deleteDescription = (e: Event, index: number) => {
  e.preventDefault()

  const descriptions = editedItem.value.items
  editedItem.value.items = [
    ...descriptions.slice(0, index),
    ...descriptions.slice(index + 1, descriptions.length),
  ]
}

const changeDescriptionItem = (e: Event, descriptionIndex: number, itemIndex: number) => {
  e.preventDefault()

  const value = (e.target as HTMLInputElement).value
  editedItem.value.items[descriptionIndex].items[itemIndex] = value
}

const addDescriptionItem = (e: Event, descriptionIndex: number) => {
  e.preventDefault()

  editedItem.value.items[descriptionIndex].items.push('')
}

const deleteDescriptionItem = (e: Event, descriptionIndex: number, itemIndex: number) => {
  e.preventDefault()

  const items = editedItem.value.items[descriptionIndex].items
  editedItem.value.items[descriptionIndex].items = [
    ...items.slice(0, itemIndex),
    ...items.slice(itemIndex + 1, items.length),
  ]
}
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

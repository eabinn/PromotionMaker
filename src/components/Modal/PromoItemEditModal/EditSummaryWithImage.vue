<template>
  <form v-if="editedItem">
    <div class="item">
      <b># PC 화면에서의 디스크립션 영역 비율을 정해주세요. (1 ~ 12)</b>
      <input v-model="editedItem.descriptionContentColumn" type="number" />
    </div>
    <div class="item">
      <b># PC 화면에서의 이미지 영역 비율을 정해주세요. (1 ~ 12)</b>
      <input v-model="editedItem.imageContentColumn" type="number" />
    </div>
    <div class="item">
      <b># bar 색깔을 정해주세요.</b>
      <input v-model="editedItem.barColor" type="color" />
    </div>
    <div class="item">
      <b># 타이틀을 입력해주세요.</b>
      <textarea v-model="editedItem.title" />
    </div>
    <div class="item">
      <b># 서브타이틀을 입력해주세요.</b>
      <textarea v-model="editedItem.subTitle" />
    </div>
    <div class="item">
      <b># 서브타이틀 폰트 두께를 선택해주세요.</b>
      <select v-model="editedItem.subTitleFontWeight">
        <option value="normal">Normal</option>
        <option value="bold">Bold</option>
      </select>
    </div>
    <div class="item descriptions">
      <div>
        <b># 디스크립션을 추가해주세요</b>
        <button @click="addDescription($event)">추가</button>
      </div>
      <div v-for="(description, index) in editedItem.descriptions" :key="index" class="description">
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
            v-for="(descriptionItem, itemIndex) in description.items"
            :key="itemIndex"
            class="description-item"
          >
            <textarea
              :value="descriptionItem"
              @change="changeDescriptionItem($event, index, itemIndex)"
            />
            <button @click="deleteDescriptionItem($event, index, itemIndex)">삭제</button>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <b># 이미지 주소를 적어주세요.</b>
      <div>
        <b>1x</b>
        <input v-model="editedItem.images['1x']" />
      </div>
      <div>
        <b>2x</b>
        <input v-model="editedItem.images['2x']" />
      </div>
    </div>
    <div class="item">
      <b># 이미지 영역 위치를 정해주세요.</b>
      <select v-model="editedItem.imagePosition">
        <option value="right">Right</option>
        <option value="left">Left</option>
      </select>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { SummaryWithImage } from '@/components/item.types'

interface IProps {
  item: SummaryWithImage
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')

const addDescription = (e: Event) => {
  e.preventDefault()

  editedItem.value.descriptions.push({
    title: '타이틀입니다.',
    type: 'normal',
    items: [],
  })
}

const deleteDescription = (e: Event, index: number) => {
  e.preventDefault()

  const descriptions = editedItem.value.descriptions
  editedItem.value.descriptions = [
    ...descriptions.slice(0, index),
    ...descriptions.slice(index + 1, descriptions.length),
  ]
}

const changeDescriptionItem = (e: Event, descriptionIndex: number, itemIndex: number) => {
  e.preventDefault()

  const value = (e.target as HTMLInputElement).value
  editedItem.value.descriptions[descriptionIndex].items[itemIndex] = value
}

const addDescriptionItem = (e: Event, descriptionIndex: number) => {
  e.preventDefault()

  editedItem.value.descriptions[descriptionIndex].items.push('')
}

const deleteDescriptionItem = (e: Event, descriptionIndex: number, itemIndex: number) => {
  e.preventDefault()

  const items = editedItem.value.descriptions[descriptionIndex].items
  editedItem.value.descriptions[descriptionIndex].items = [
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

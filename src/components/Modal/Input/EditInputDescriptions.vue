<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>{{ props.changeTarget }} Descriptions 수정해주세요.</label>
      <button @click="addDescription($event)">새 Description 추가</button>
    </div>
    <div class="edit-input edit-input-nested">
      <div v-for="(description, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Description</label>
          <button @click="deleteDescription($event, index)">
            {{ index + 1 }}번째 Description 삭제
          </button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputTextarea
            :change-target="'Description 타이틀'"
            :value="description.title"
            :update-value="(value) => (description.title = value)"
          />
          <EditInputSelectListType
            :change-target="'Description 아이템'"
            :value="description.type"
            :update-value="(value) => (description.type = value)"
          />
          <div class="edit-input">
            <div class="edit-input edit-input-row">
              <label>Description 아이템들을 수정해주세요.</label>
              <button @click="addDescriptionItem($event, index)">새 Description 아이템 추가</button>
            </div>
            <ul class="help">
              <li>아무 것도 입력하지 않으면 화면에 해당 영역이 그려지지 않습니다.</li>
              <li>
                {{`줄바꿈이 가능합니다. <br />
                태그를 사용하세요.`}}
              </li>
              <li>
                {{`색상 변경이 가능합니다. 원하는 텍스트를
                <span style="color: #234123">텍스트</span> 와 같이 <span /> 태그로 감싼 뒤 스타일
                속성을 넣어주세요.`}}
              </li>
            </ul>
            <div
              v-for="(item, itemIndex) in description.items"
              :key="itemIndex"
              class="edit-input edit-input-row"
            >
              <textarea
                :value="item"
                @change="handleDescriptionItemChange($event, index, itemIndex)"
              />
              <button @click="deleteDescriptionItem($event, index, itemIndex)">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { List } from '@/interfaces/promo.interfaces'
import { defaultDescription } from '@/mockupDatas/promoData'
import EditInputTextarea from './EditInputTextarea.vue'
import EditInputSelectListType from './EditInputSelectListType.vue'

interface IProps {
  value: List[]
  changeTarget: string
  updateValue(value: List[]): void
}

const props = defineProps<IProps>()

const addDescription = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, defaultDescription])
}

const deleteDescription = (e: Event, index: number) => {
  e.preventDefault()

  const descriptions = props.value

  props.updateValue([
    ...descriptions.slice(0, index),
    ...descriptions.slice(index + 1, descriptions.length),
  ])
}

const addDescriptionItem = (e: Event, index: number) => {
  e.preventDefault()

  const descriptions = props.value

  props.updateValue([
    ...descriptions.slice(0, index),
    {
      ...descriptions[index],
      items: [...descriptions[index].items, ''],
    },
    ...descriptions.slice(index + 1, descriptions.length),
  ])
}

const deleteDescriptionItem = (e: Event, index: number, itemIndex: number) => {
  e.preventDefault()

  const descriptions = props.value

  props.updateValue([
    ...descriptions.slice(0, index),
    {
      ...descriptions[index],
      items: [
        ...descriptions[index].items.slice(0, itemIndex),
        ...descriptions[index].items.slice(itemIndex + 1, descriptions[index].items.length),
      ],
    },
    ...descriptions.slice(index + 1, descriptions.length),
  ])
}

const handleDescriptionItemChange = (e: Event, index: number, itemIndex: number) => {
  const input = e.target as HTMLInputElement
  const descriptions = props.value

  props.updateValue([
    ...descriptions.slice(0, index),
    {
      ...descriptions[index],
      items: [
        ...descriptions[index].items.slice(0, itemIndex),
        input.value,
        ...descriptions[index].items.slice(itemIndex + 1, descriptions[index].items.length),
      ],
    },
    ...descriptions.slice(index + 1, descriptions.length),
  ])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

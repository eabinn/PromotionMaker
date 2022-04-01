<template>
  <form v-if="editedItem">
    <div class="flex-item">
      <h4>프로필 리스트</h4>
      <button @click="addProfile($event)">프로필 추가</button>
    </div>
    <div v-for="(profile, index) in editedItem.items" :key="index" class="item-box">
      <div class="flex-item">
        <h5>{{ index + 1 }}번째 프로필</h5>
        <button @click="deleteProfile($event, index)">삭제</button>
      </div>
      <div class="item">
        <b># 강사명을 적어주세요.</b>
        <input v-model="profile.name" />
      </div>
      <div class="item">
        <b># 강사 이미지 주소를 적어주세요.</b>
        <div>
          <b>1x</b>
          <input v-model="profile.images['1x']" />
        </div>
        <div>
          <b>2x</b>
          <input v-model="profile.images['2x']" />
        </div>
      </div>
      <div class="item descriptions">
        <div>
          <b># 디스크립션을 추가해주세요</b>
          <button @click="addDescription($event, index)">추가</button>
        </div>
        <div
          v-for="(description, dIndex) in profile.descriptions"
          :key="dIndex"
          class="description"
        >
          <div class="title">
            <b>{{ index + 1 }}번째 디스크립션</b>
            <button @click="deleteDescription($event, index, dIndex)">삭제</button>
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
              <button @click="addDescriptionItem($event, index, dIndex)">아이템 추가</button>
            </div>
            <div
              v-for="(descriptionItem, itemIndex) in description.items"
              :key="itemIndex"
              class="description-item"
            >
              <textarea
                :value="descriptionItem"
                @change="changeDescriptionItem($event, index, dIndex, itemIndex)"
              />
              <button @click="deleteDescriptionItem($event, index, dIndex, itemIndex)">삭제</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Profiles } from '../item.types'

interface IProps {
  item: Profiles
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')

const addProfile = (e: Event) => {
  e.preventDefault()

  editedItem.value.items.push({
    name: '강사명',
    images: {
      '1x': 'https://i.picsum.photos/id/233/183/183.jpg?hmac=jy33ns7RiGhwQmq3QHOp97Y0EGdKEQcXL-vRX6MDhuE',
      '2x': 'https://i.picsum.photos/id/233/183/183.jpg?hmac=jy33ns7RiGhwQmq3QHOp97Y0EGdKEQcXL-vRX6MDhuE',
    },
    descriptions: [
      {
        title: '리스트 타이틀',
        type: 'number',
        items: [
          '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
          '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
        ],
      },
      {
        title: '리스트 타이틀',
        type: 'number',
        items: [
          '기본 노트 리스트 아이템 가나다라마바사아자차 아야어여오요우유으이',
          '가나다라마바사아자차카타파하 아야어여오요우유으이 가나다라마바사아자차카타파',
        ],
      },
    ],
  })
}

const deleteProfile = (e: Event, index: number) => {
  e.preventDefault()

  const profiles = editedItem.value.items
  editedItem.value.items = [
    ...profiles.slice(0, index),
    ...profiles.slice(index + 1, profiles.length),
  ]
}

const addDescription = (e: Event, index: number) => {
  e.preventDefault()

  editedItem.value.items[index].descriptions.push({
    title: '타이틀입니다.',
    type: 'normal',
    items: [],
  })
}

const deleteDescription = (e: Event, profileIndex: number, descriptionIndex: number) => {
  e.preventDefault()

  const descriptions = editedItem.value.items[profileIndex].descriptions

  editedItem.value.items[profileIndex].descriptions = [
    ...descriptions.slice(0, descriptionIndex),
    ...descriptions.slice(descriptionIndex + 1, descriptions.length),
  ]
}

const changeDescriptionItem = (
  e: Event,
  profileIndex: number,
  descriptionIndex: number,
  itemIndex: number
) => {
  e.preventDefault()

  const value = (e.target as HTMLInputElement).value
  editedItem.value.items[profileIndex].descriptions[descriptionIndex].items[itemIndex] = value
}

const addDescriptionItem = (e: Event, profileIndex: number, descriptionIndex: number) => {
  e.preventDefault()

  editedItem.value.items[profileIndex].descriptions[descriptionIndex].items.push('')
}

const deleteDescriptionItem = (
  e: Event,
  profileIndex: number,
  descriptionIndex: number,
  itemIndex: number
) => {
  e.preventDefault()

  const items = editedItem.value.items[profileIndex].descriptions[descriptionIndex].items
  editedItem.value.items[profileIndex].descriptions[descriptionIndex].items = [
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

  .flex-item {
    display: flex;
    align-items: center;
    gap: 10px;
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

  .item-box {
    display: flex;
    flex-direction: column;
    // gap: 20px;
  }
}
</style>

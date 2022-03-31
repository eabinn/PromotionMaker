<template>
  <form v-if="editedItem">
    <div class="flex-item">
      <h4>패키지 카드 리스트</h4>
      <button @click="addPackageCard($event)">카드 추가</button>
    </div>
    <div v-for="(item, index) in editedItem.items" :key="index" class="item-box">
      <div class="flex-item">
        <h5>{{ index + 1 }}번째 패키지 카드</h5>
        <button @click="deletePackageCard($event, index)">삭제</button>
      </div>
      <div class="item">
        <b># 메인 색깔을 정해주세요.</b>
        <input v-model="item.mainColor" type="color" />
      </div>
      <div class="item">
        <b># 식별자를 입력해주세요.</b>
        <textarea v-model="item.identifier" />
      </div>
      <div class="item">
        <b># 타이틀을 입력해주세요.</b>
        <textarea v-model="item.title" />
      </div>
      <div class="item">
        <b># 서브타이틀을 입력해주세요.</b>
        <textarea v-model="item.subTitle" />
      </div>
      <div class="item descriptions">
        <div>
          <b># 디스크립션을 추가해주세요</b>
          <button @click="addDescriptionItem($event, index)">추가</button>
        </div>
        <div v-for="(description, dIndex) in item.descriptions" :key="dIndex" class="description">
          <div class="description-item">
            <textarea :value="description" @change="changeDescriptionItem($event, index, dIndex)" />
            <button @click="deleteDescriptionItem($event, index, dIndex)">삭제</button>
          </div>
        </div>
      </div>
      <div class="item descriptions">
        <div>
          <b># 구매 버튼을 추가해주세요.</b>
          <button @click="addButton($event, index)">추가</button>
        </div>
        <div v-for="(button, bIndex) in item.buttons" :key="bIndex" class="description">
          <div class="flex-item">
            <h5>{{ bIndex + 1 }}번째 버튼</h5>
            <button @click="deleteButton($event, index, bIndex)">버튼 삭제</button>
          </div>

          <div class="item">
            <b>버튼 타입</b>
            <select v-model="button.type">
              <option value="normal">Normal</option>
              <option value="outline">Outline</option>
            </select>
          </div>
          <div class="item">
            <b># 버튼 색상을 정해주세요.</b>
            <input v-model="button.mainColor" type="color" />
          </div>
          <div class="item">
            <b># 버튼 텍스트를 적어주세요.</b>
            <input v-model="button.text" />
          </div>
          <div class="item">
            <b># 구매 기간을 적어주세요.</b>
            <input v-model="button.day" />
          </div>
          <div class="item">
            <b># 구매 금액 적어주세요.</b>
            <input v-model="button.price" />
          </div>
          <div class="item">
            <b># 구매 링크를 적어주세요.</b>
            <input v-model="button.link" />
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { PackageCards } from '../item.types'

interface IProps {
  originalItem: PackageCards
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'originalItem')

const addPackageCard = (e: Event) => {
  e.preventDefault()

  if (editedItem.value.items.length === 3) {
    return
  }

  editedItem.value.items.push({
    mainColor: '#9D45E8',
    identifier: 'PACKAGE 1',
    subTitle: '서브 타이틀 한 줄 최대 18자',
    title: '타이틀 한 줄 12자<br>타이틀 한 줄 12자',
    descriptions: ['asdfasfasfasdfas;lfjasf', 'qwerqwerqwerqwer', 'sdfasdfasasdfasdf'],
    buttons: [
      {
        type: 'normal',
        mainColor: '#9D45E8',
        text: '클래스',
        day: '123',
        price: '9,999,900',
        link: 'https://airklass.com',
      },
      {
        type: 'outline',
        mainColor: '#9D45E8',
        text: '패키지',
        day: '123',
        price: '9,999,900',
        link: 'https://airklass.com',
      },
    ],
  })
}

const deletePackageCard = (e: Event, index: number) => {
  e.preventDefault()

  const items = editedItem.value.items
  editedItem.value.items = [...items.slice(0, index), ...items.slice(index + 1, items.length)]
}

const addDescriptionItem = (e: Event, packageIndex: number) => {
  e.preventDefault()

  editedItem.value.items[packageIndex].descriptions.push('')
}

const changeDescriptionItem = (e: Event, packageIndex: number, index: number) => {
  e.preventDefault()

  const value = (e.target as HTMLInputElement).value
  editedItem.value.items[packageIndex].descriptions[index] = value
}

const deleteDescriptionItem = (e: Event, packageIndex: number, index: number) => {
  e.preventDefault()

  const items = editedItem.value.items[packageIndex].descriptions
  editedItem.value.items[packageIndex].descriptions = [
    ...items.slice(0, index),
    ...items.slice(index + 1, items.length),
  ]
}

const addButton = (e: Event, packageIndex: number) => {
  e.preventDefault()

  editedItem.value.items[packageIndex].buttons.push({
    type: 'normal',
    mainColor: '#9D45E8',
    text: '클래스',
    day: '123',
    price: '9,999,900',
    link: 'https://airklass.com',
  })
}

const deleteButton = (e: Event, packageIndex: number, index: number) => {
  e.preventDefault()

  const buttons = editedItem.value.items[packageIndex].buttons
  editedItem.value.items[packageIndex].buttons = [
    ...buttons.slice(0, index),
    ...buttons.slice(index + 1, buttons.length),
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

.errors {
  display: flex;
  flex-direction: column;
  .message {
    color: red;
  }
}
</style>

<template>
  <form v-if="editedItem">
    <div class="item">
      <b># PC 화면에서의 각 아이템의 영역 비율을 정해주세요. (1 ~ 12)</b>
      <input v-model="editedItem.itemColumn" type="number" />
    </div>
    <div class="flex-item">
      <h4>아이템 리스트</h4>
      <button @click="addBenefit($event)">아이템 추가</button>
    </div>

    <div v-for="(benefit, index) in editedItem.items" :key="index" class="item-box">
      <div class="flex-item">
        <h5>{{ index + 1 }}번째 아이템</h5>
        <button @click="deleteBenefit($event, index)">삭제</button>
      </div>
      <div class="item">
        <b>식별자를 적어주세요.</b>
        <input v-model="benefit.identifier" />
      </div>
      <div class="item">
        <b>타이틀을 적어주세요.</b>
        <input v-model="benefit.title" />
      </div>
      <div class="item">
        <b>내용을 적어주세요.</b>
        <input v-model="benefit.text" />
      </div>
      <div class="item">
        <b># 아이템 이미지 주소를 적어주세요.</b>
        <div>
          <b>1x</b>
          <input v-model="benefit.images['1x']" />
        </div>
        <div>
          <b>2x</b>
          <input v-model="benefit.images['2x']" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Benefits } from '../item.types'

interface IProps {
  originalItem: Benefits
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'originalItem')

const addBenefit = (e: Event) => {
  e.preventDefault()

  editedItem.value.items.push({
    identifier: '혜택 1',
    title: '더미 텍스트 가나다라',
    text: ' 가나다라마바사 더미 텍스트 가나다라마바사아자차',
    images: {
      '1x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
      '2x': 'https://i.picsum.photos/id/879/396/220.jpg?hmac=ha-MDDbv8d1ywmvn2VQOtKFU3OnOrB8xS49KBdim_0s',
    },
  })
}

const deleteBenefit = (e: Event, index: number) => {
  e.preventDefault()

  const benefits = editedItem.value.items

  if (benefits.length === 1) {
    return
  }

  editedItem.value.items = [
    ...benefits.slice(0, index),
    ...benefits.slice(index + 1, benefits.length),
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

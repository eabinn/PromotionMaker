<template>
  <div class="edit-input">
    <div class="edit-input">
      <div class="edit-input edit-input-row">
        <label>Reviews를 수정해주세요.</label>
        <button @click="addReview($event)">새 Review 추가</button>
      </div>
      <ul class="help">
        <li>
          {{`내용과 이름은 줄바꿈이 가능합니다. <br />
          태그를 사용하세요.`}}
        </li>
      </ul>
    </div>

    <div class="edit-input edit-input-nested">
      <div v-for="(review, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Review</label>
          <button @click="deleteReview($event, index)">{{ index + 1 }}번째 Review 삭제</button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputTextarea
            :value="review.text"
            :change-target="'Review 내용'"
            :update-value="(value) => (review.text = value)"
            :show-help="false"
          />
          <EditInputTextarea
            :value="review.name"
            :change-target="'Review 작성자'"
            :update-value="(value) => (review.name = value)"
            :show-help="false"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Review } from '@/interfaces/promo.interfaces'
import { defaultReview } from '@/mockupDatas/promoData'
import EditInputTextarea from './EditInputTextarea.vue'

interface IProps {
  value: Review[]
  updateValue(value: Review[]): void
}

const props = defineProps<IProps>()

const addReview = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, defaultReview])
}

const deleteReview = (e: Event, index: number) => {
  e.preventDefault()

  props.updateValue([
    ...props.value.slice(0, index),
    ...props.value.slice(index + 1, props.value.length),
  ])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

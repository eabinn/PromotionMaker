<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>Benefit을 수정해주세요.</label>
      <button @click="addBenefit($event)">새 Benefit 추가</button>
    </div>

    <div class="edit-input edit-input-nested">
      <div v-for="(benefit, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Description</label>
          <button @click="deleteBenefit($event, index)">{{ index + 1 }}번째 Benefit 삭제</button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputTextarea
            :value="benefit.identifier"
            :change-target="'베네핏 식별자'"
            :update-value="(value) => (benefit.identifier = value)"
          />
          <EditInputTextarea
            :value="benefit.title"
            :change-target="'베네핏 타이틀'"
            :update-value="(value) => (benefit.title = value)"
          />
          <EditInputTextarea
            :value="benefit.text"
            :change-target="'베네핏 내용'"
            :update-value="(value) => (benefit.text = value)"
          />
          <EditInputImageLinks
            :value="benefit.images"
            :change-target="'베네핏'"
            :update-value="(value) => (benefit.images = value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Benefit } from '@/interfaces/promo.interfaces'
import { defaultBenefit } from '@/mockupDatas/promoData'
import EditInputTextarea from './EditInputTextarea.vue'
import EditInputImageLinks from './EditInputImageLinks.vue'

interface IProps {
  value: Benefit[]
  updateValue(value: Benefit[]): void
}

const props = defineProps<IProps>()

const addBenefit = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, defaultBenefit])
}

const deleteBenefit = (e: Event, index: number) => {
  e.preventDefault()

  const benefits = props.value

  props.updateValue([...benefits.slice(0, index), ...benefits.slice(index + 1, benefits.length)])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

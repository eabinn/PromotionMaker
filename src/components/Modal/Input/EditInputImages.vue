<template>
  <div class="edit-input">
    <div class="edit-input edit-input-row">
      <label>{{ props.changeTarget }} 이미지들을 수정해주세요.</label>
      <button @click="addImageSet($event)">새 Image Set 추가</button>
    </div>
    <div class="edit-input edit-input-nested">
      <div v-for="(imageSet, index) in props.value" :key="index">
        <div class="edit-input edit-input-row">
          <label>{{ index + 1 }}번째 Description</label>
          <button @click="deleteImageSet($event, index)">{{ index + 1 }}번째 Image Set 삭제</button>
        </div>
        <div class="edit-input edit-input-nested">
          <EditInputImageLinks
            :value="imageSet"
            :change-target="'Image Set'"
            :update-value="(value) => updateImageSet(index, value)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ImageSet } from '@/interfaces/promo.interfaces'
import { defaultImageSet } from '@/mockupDatas/promoData'
import EditInputImageLinks from './EditInputImageLinks.vue'

interface IProps {
  value: ImageSet[]
  changeTarget: string
  updateValue(value: ImageSet[]): void
}

const props = defineProps<IProps>()

const addImageSet = (e: Event) => {
  e.preventDefault()

  props.updateValue([...props.value, defaultImageSet])
}

const deleteImageSet = (e: Event, index: number) => {
  e.preventDefault()

  const imageSets = props.value

  props.updateValue([...imageSets.slice(0, index), ...imageSets.slice(index + 1, imageSets.length)])
}

const updateImageSet = (index: number, imageSet: ImageSet) => {
  const imageSets = props.value

  props.updateValue([
    ...imageSets.slice(0, index),
    imageSet,
    ...imageSets.slice(index + 1, imageSets.length),
  ])
}
</script>

<style lang="scss" scoped>
@import './common';
</style>

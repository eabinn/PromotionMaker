<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서 Description 영역'"
      :value="editedItem.descriptionContentColumn"
      :max-value="12"
      :update-value="(value) => (editedItem.descriptionContentColumn = value)"
    />

    <EditInputNumber
      :change-target="'PC 화면에서 이미지 영역'"
      :value="editedItem.imageContentColumn"
      :max-value="12"
      :update-value="(value) => (editedItem.imageContentColumn = value)"
    />

    <EditInputDescriptions
      :change-target="''"
      :value="editedItem.descriptions"
      :update-value="(value) => (editedItem.descriptions = value)"
    />

    <EditInputImageLinks
      :value="editedItem.images"
      :update-value="(value) => (editedItem.images = value)"
      :change-target="'이미지 영역'"
    />

    <EditInputSelectPosition
      :change-target="'이미지 영역'"
      :value="editedItem.imagePosition"
      :update-value="(value) => (editedItem.imagePosition = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { SummaryWithImage } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'
import EditInputDescriptions from '../Input/EditInputDescriptions.vue'
import EditInputImageLinks from '../Input/EditInputImageLinks.vue'
import EditInputSelectPosition from '../Input/EditInputSelectPosition.vue'

interface IProps {
  item: SummaryWithImage
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

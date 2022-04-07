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

    <EditInputColor
      :change-target="'Bar'"
      :value="editedItem.barColor"
      :update-value="(value) => (editedItem.barColor = value)"
    />

    <EditInputTextarea
      :change-target="'타이틀'"
      :value="editedItem.title"
      :update-value="(value) => (editedItem.title = value)"
    />

    <EditInputTextarea
      :change-target="'서브타이틀'"
      :value="editedItem.subTitle"
      :update-value="(value) => (editedItem.subTitle = value)"
    />

    <EditInputSelectFontWeight
      :change-target="'서브타이틀'"
      :value="editedItem.subTitleFontWeight"
      :update-value="(value) => (editedItem.subTitleFontWeight = value)"
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
import EditInputColor from '../Input/EditInputColor.vue'
import EditInputTextarea from '../Input/EditInputTextarea.vue'
import EditInputSelectFontWeight from '../Input/EditInputSelectFontWeight.vue'
import EditInputDescriptions from '../Input/EditInputDescriptions.vue'
import EditInputImageLinks from '../Input/EditInputImageLinks.vue'
import EditInputSelectPosition from '../Input/EditInputSelectPosition.vue'

interface IProps {
  item: SummaryWithImage
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

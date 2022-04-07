<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서의 컨텐츠 영역'"
      :value="editedItem.contentColumn"
      :max-value="12"
      :update-value="(value) => (editedItem.contentColumn = value)"
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
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { SummaryOnly } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputColor from '../Input/EditInputColor.vue'
import EditInputTextarea from '../Input/EditInputTextarea.vue'
import EditInputSelectFontWeight from '../Input/EditInputSelectFontWeight.vue'
import EditInputDescriptions from '../Input/EditInputDescriptions.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'

interface IProps {
  item: SummaryOnly
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

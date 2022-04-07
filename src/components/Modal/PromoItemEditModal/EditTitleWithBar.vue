<template>
  <EditForm>
    <EditInputNumber
      :change-target="'PC 화면에서의 컨텐츠 영역'"
      :value="editedItem.column"
      :max-value="12"
      :update-value="(value) => (editedItem.column = value)"
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
      :change-target="'위쪽 서브타이틀'"
      :value="editedItem.upSubTitle"
      :update-value="(value) => (editedItem.upSubTitle = value)"
    />

    <EditInputTextarea
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubTitle"
      :update-value="(value) => (editedItem.underSubTitle = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Title, TitleWithBar } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputTextarea from '../Input/EditInputTextarea.vue'
import EditInputNumber from '../Input/EditInputNumber.vue'
import EditInputColor from '../Input/EditInputColor.vue'

interface IProps {
  item: TitleWithBar
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

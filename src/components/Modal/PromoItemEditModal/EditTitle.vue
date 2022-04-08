<template>
  <EditForm>
    <EditInputTextarea
      :change-target="'타이틀'"
      :value="editedItem.title"
      :update-value="(value) => (editedItem.title = value)"
    />
    <EditInputSelectFontSize
      :change-target="'타이틀'"
      :value="editedItem.titleSize"
      :update-value="(value) => (editedItem.titleSize = value)"
    />
    <EditInputTextarea
      :change-target="'위쪽 서브타이틀'"
      :value="editedItem.upSubTitle"
      :update-value="(value) => (editedItem.upSubTitle = value)"
    />
    <EditInputSelectFontSize
      :change-target="'위쪽 서브타이틀'"
      :value="editedItem.upSubTitleFontSize"
      :update-value="(value) => (editedItem.upSubTitleFontSize = value)"
    />
    <EditInputTextarea
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubTitle"
      :update-value="(value) => (editedItem.underSubTitle = value)"
    />
    <EditInputSelectFontSize
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubTitleFontSize"
      :update-value="(value) => (editedItem.underSubTitleFontSize = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Title } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputTextarea from '../Input/EditInputTextarea.vue'
import EditInputSelectFontSize from '../Input/EditInputSelectFontSize.vue'

interface IProps {
  item: Title
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

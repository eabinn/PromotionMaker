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
      :value="editedItem.upSubtitle"
      :update-value="(value) => (editedItem.upSubtitle = value)"
    />
    <EditInputSelectFontSize
      :change-target="'위쪽 서브타이틀'"
      :value="editedItem.upSubtitleFontSize"
      :update-value="(value) => (editedItem.upSubtitleFontSize = value)"
    />

    <EditInputSelectFontWeight
      :change-target="'위쪽 서브타이틀'"
      :value="editedItem.upSubtitleFontWeight"
      :update-value="(value) => (editedItem.upSubtitleFontWeight = value)"
    />
    <EditInputTextarea
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubtitle"
      :update-value="(value) => (editedItem.underSubtitle = value)"
    />
    <EditInputSelectFontSize
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubtitleFontSize"
      :update-value="(value) => (editedItem.underSubtitleFontSize = value)"
    />

    <EditInputSelectFontWeight
      :change-target="'아래쪽 서브타이틀'"
      :value="editedItem.underSubtitleFontWeight"
      :update-value="(value) => (editedItem.underSubtitleFontWeight = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { Title } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputTextarea from '../Input/EditInputTextarea.vue'
import EditInputSelectFontWeight from '../Input/EditInputSelectFontWeight.vue'
import EditInputSelectFontSize from '../Input/EditInputSelectFontSize.vue'

interface IProps {
  item: Title
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>

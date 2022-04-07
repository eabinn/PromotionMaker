<template>
  <EditForm>
    <EditInputColor
      :change-target="'좌측 상단 코너'"
      :value="editedItem.leftColor"
      :update-value="(value) => (editedItem.leftColor = value)"
    />
    <EditInputColor
      :change-target="'우측 하단 코너'"
      :value="editedItem.rightColor"
      :update-value="(value) => (editedItem.rightColor = value)"
    />
    <EditInputText
      :change-target="'비디오 링크'"
      :value="editedItem.videoUrl"
      :update-value="(value) => (editedItem.videoUrl = value)"
    />
  </EditForm>
</template>

<script lang="ts" setup>
import { toRef } from 'vue'
import { MarketingVideo } from '@/interfaces/promo.interfaces'
import EditForm from './common/EditForm.vue'
import EditInputColor from '../Input/EditInputColor.vue'
import EditInputText from '../Input/EditInputText.vue'

interface IProps {
  item: MarketingVideo
}

const props = defineProps<IProps>()

const editedItem = toRef(props, 'item')
</script>
